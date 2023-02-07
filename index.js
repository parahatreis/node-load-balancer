require('dotenv').config()
const express = require('express');
const app = express();

const PORT = process.env.PORT;

if(!PORT) throw Error('Port is not defined!')

app.get('/', (req, res) => {
  res.send(`Server ${PORT}`);
})

app.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`);
})