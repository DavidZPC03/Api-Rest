const express = require('express');
const app = express();
const baearer = require('express-bearer-token');
const port = 3000;

app.use(baearer());

app.use((req, res, next) => {
  if (req.token === '123456') {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
