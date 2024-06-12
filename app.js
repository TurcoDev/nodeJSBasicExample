const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/saludo', (req, res) => {
    res.send('Hello World2')
  });

app.post('/', function (req, res) {
    console.log(req);
    res.send("Saludo "   + req.message);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})