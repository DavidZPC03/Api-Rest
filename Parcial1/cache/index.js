import express from 'express';
import { createClient } from 'redis';

const app = express();

const redisClient = createClient({
  url: 'redis://host.docker.internal:6379' 
});

redisClient.on('error', (err) => {
  console.error('❌ Redis Error:', err);
});

(async () => {
  try {
    await redisClient.connect();
    console.log('✅ Conectado a Redis');

    // Endpoint con caché MANUAL
    app.get('/random', async (req, res) => {
      // Cambiado de MANUAL_CACHE a solo CACHE
      const cacheKey = `cache:GET:${req.path}`; 
      // Duración de la caché cambiada a 1 minuto (60 segundos)
      const cacheDurationSeconds = 1 * 60; // 1 minuto en segundos

      try {
        const cachedResponse = await redisClient.get(cacheKey);

        if (cachedResponse) {
          console.log('✅ Sirviendo "/random" desde caché.'); // Mensaje de consola actualizado
          return res.setHeader('X-Cache-Status', 'HIT').json(JSON.parse(cachedResponse));
        }

        const newResponse = {
          number: Math.floor(Math.random() * 1000),
          generatedAt: new Date().toISOString(),
        };
        console.log('✨ Nuevo número generado:', newResponse.number);

        await redisClient.set(cacheKey, JSON.stringify(newResponse), {
          EX: cacheDurationSeconds 
        });
        console.log(`💾 Clave "${cacheKey}" guardada en caché por ${cacheDurationSeconds} segundos.`); // Mensaje de consola actualizado

        res.setHeader('X-Cache-Status', 'MISS').json(newResponse);

      } catch (err) {
        console.error('❌ Error al manejar la caché en /random:', err); // Mensaje de consola actualizado
        const fallbackResponse = {
          number: Math.floor(Math.random() * 1000),
          generatedAt: new Date().toISOString(),
          message: 'Error de caché, sirviendo sin caché.'
        };
        res.status(500).json(fallbackResponse);
      }
    });

    // Endpoint para probar escritura y lectura básica en Redis (se mantiene sin cambios)
    app.get('/test-redis-connection', async (req, res) => {
      const testKey = 'test:mykey';
      const testValue = 'hello from nodejs at ' + new Date().toISOString();
      const testTTL = 60; // 60 segundos

      try {
        console.log(`Attempting to SET key: ${testKey} with value: ${testValue}`);
        await redisClient.set(testKey, testValue, { EX: testTTL });
        console.log(`Successfully SET key: ${testKey}`);

        console.log(`Attempting to GET key: ${testKey}`);
        const retrievedValue = await redisClient.get(testKey);
        console.log(`Successfully GET key: ${testKey}. Value: ${retrievedValue}`);

        const currentTtl = await redisClient.ttl(testKey);

        if (retrievedValue === testValue) {
          res.json({
            status: 'success',
            message: 'Redis connection and basic operations (SET/GET) are working!',
            key_set: testKey,
            value_set: testValue,
            value_retrieved: retrievedValue,
            ttl_remaining_seconds: currentTtl
          });
        } else {
          res.status(500).json({
            status: 'failed',
            message: 'Value retrieved from Redis does not match value set. Problem with persistence.',
            key_set: testKey,
            value_set: testValue,
            value_retrieved: retrievedValue,
            ttl_remaining_seconds: currentTtl
          });
        }

      } catch (err) {
        console.error('❌ Error in /test-redis-connection:', err);
        res.status(500).json({
          status: 'error',
          message: 'Failed to perform Redis operations. Check Redis server and connection.',
          error: err.message
        });
      }
    });

    // Endpoint para ver claves de caché en Redis
    app.get('/redis-keys', async (req, res) => {
      try {
        // Buscar todas las claves que empiezan con 'cache:'
        const keys = await redisClient.keys('cache:*'); // <--- CAMBIO AQUÍ

        if (keys.length === 0) {
          console.log('ℹ️ No se encontraron claves en Redis con prefijo "cache:"'); // Mensaje actualizado
          return res.json({ message: 'No se encontraron claves de caché.', keys: [] }); // Mensaje actualizado
        }

        const results = await Promise.all(
          keys.map(async (key) => {
            const value = await redisClient.get(key);
            const ttl = await redisClient.ttl(key);
            return {
              key,
              ttl,
              value: value ? JSON.parse(value) : null
            };
          })
        );
        
        res.json(results);
      } catch (err) {
        console.error('❌ Error en /redis-keys:', err);
        res.status(500).json({ error: err.message });
      }
    });

    // Iniciar el servidor Express
    app.listen(3000, () => {
      console.log('🚀 Servidor en http://localhost:3000');
    });

  } catch (err) {
    console.error('❌ Error al conectar a Redis o iniciar el servidor:', err);
    process.exit(1);
  }
})();