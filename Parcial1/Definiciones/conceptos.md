# Definiciones de API, REST y RESTful

## ¿Qué es una API?
Una **API** (Interfaz de Programación de Aplicaciones, por sus siglas en inglés) es un conjunto de reglas y protocolos que permite que diferentes aplicaciones se comuniquen entre sí. Define cómo las aplicaciones pueden interactuar con un servicio o sistema, proporcionando métodos y estructuras de datos para acceder a sus funcionalidades.

## ¿Qué es REST?
**REST** (Transferencia de Estado Representacional, por sus siglas en inglés) es un estilo de arquitectura de software para sistemas distribuidos, como la web. Se basa en principios como:
- **Recursos**: Todo es un recurso identificable por una URL.
- **Operaciones HTTP**: Usa métodos como GET, POST, PUT, DELETE para realizar acciones sobre los recursos.
- **Stateless**: Cada solicitud es independiente y contiene toda la información necesaria para ser procesada.
- **Representaciones**: Los recursos pueden tener múltiples representaciones (JSON, XML, etc.).

## ¿A qué se refiere el término RESTful?
Un servicio o API **RESTful** es aquel que sigue los principios y restricciones de la arquitectura REST. Es decir, es una API que:
- Usa HTTP como protocolo de comunicación.
- Define recursos claros y accesibles mediante URLs.
- Utiliza los métodos HTTP de manera adecuada (GET para leer, POST para crear, PUT para actualizar, DELETE para eliminar).
- Es stateless y puede devolver representaciones de recursos en formatos como JSON o XML.