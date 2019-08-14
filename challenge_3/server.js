const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = 8080;

const app = express();
app.use(express.static(path.join(__dirname,'public')));
app.use(morgan('combined'));

// parse application/json
app.use(bodyParser.json())

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('good');
})

app.get('/data', (req, res) => {
  console.log(req.body);
  res.send('good');
})

app.listen(port, ()=> console.log("Listening on port " + port));