const express = require('express');
const bodyParser= require('body-parser');
const morgan = require('morgan');
const path = require('path');
const port = 3000;

const app = express();

app.use(morgan());
app.use(express.static(path.join(__dirname,'/client/dist')));
app.use(bodyParser.json());
// app.get('/', (req,res)=> {
//   res.sendFile(path.join(__dirname,'/client/dist/index.html'));
// })


app.listen(port,()=> console.log("Listening on port: "+port));