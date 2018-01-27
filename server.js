const express = require('express');

const app = express();
const port = 5000;

app.get('/menu', (req, res) => {
  res.send({ express: 'Menu' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));