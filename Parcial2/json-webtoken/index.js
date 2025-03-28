const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const fs = require('node:fs');
const path = require('node:path');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Cargar llaves
// biome-ignore lint/style/useSingleVarDeclarator: <explanation>
let privateKey, publicKey;
try {
  privateKey = fs.readFileSync(path.join(__dirname, 'keys', 'privada.pem'), 'utf8');
  publicKey = fs.readFileSync(path.join(__dirname, 'keys', 'publica.pem'), 'utf8');
} catch (err) {
  console.error('Error al leer las llaves:', err.message);
  process.exit(1);
}

// Ruta de login (Genera un token firmado con la llave privada)
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'user' && password === 'password') {
    const token = jwt.sign({ username }, privateKey, { algorithm: 'RS256', expiresIn: '1h' });
    return res.json({ token });
  }

  res.status(401).json({ message: 'Unauthorized' });
});

// Middleware para verificar el token con la llave pública
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  jwt.verify(token, publicKey, { algorithms: ['RS256'] }, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
    req.user = decoded;
    next();
  });
};

// Ruta protegida con el middleware
app.get('/profile', verifyToken, (req, res) => {
  res.json({ message: `Welcome ${req.user.username}` });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
