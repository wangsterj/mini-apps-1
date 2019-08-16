const express = require('express');
const bodyParser= require('body-parser');
const morgan = require('morgan');
const path = require('path');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('connectFour','root',null,{
  dialect: 'mysql'
});

const ConnectFour = sequelize.define('connectFour', {
  board: Sequelize.STRING 
});

ConnectFour.sync({force: true})


const port = 3000;

const app = express();

app.use(morgan());
app.use(express.static(path.join(__dirname,'/client/dist')));
app.use(bodyParser.json());

var counter = 1;
app.post('/post', (req,res)=> {
  ConnectFour.create({board: JSON.stringify(req.body)}).then(() => {
    res.send('hi');
  })
})

app.get('/get', (req, res) => {
  ConnectFour.findAll({
    where: {
      ID: 1
    }
  }).then((data) => {
    res.send(data);
  })
})

app.listen(port,()=> console.log("Listening on port: "+port));