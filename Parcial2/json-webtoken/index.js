const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors'); 

const app = express();
const port = 3000;
const secretKey = process.env.SECRET_KEY || 'your_secret_key';

app.use(express.json());
app.use(cors()); 


app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'user' && password === 'password') {
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    return res.json({ token });
  }

  res.status(401).json({ message: 'Unauthorized' });
});

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; 

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
    req.user = decoded;
    next();
  });
};

app.get('/profile', verifyToken, (req, res) => {
  res.json({ message: `Welcome ${req.user.username}` });
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'me rompi :(((!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
