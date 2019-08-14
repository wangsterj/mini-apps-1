const path = require('path');
const bodyParser = require('body-parser');
const objToCSV = require('./function.js');

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('client'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'client/index.html'));
});

app.post('/', (req, res) => {
    var body = JSON.parse(req.body.input.slice(0,-1));
    var CSV = objToCSV(body);
    res.send(CSV);
});

app.listen(port,()=>{console.log("App listening on port: " + port)});