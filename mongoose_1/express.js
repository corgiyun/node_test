var express = require('express')();
var { User } = require('./mongoose');

express.get('/', (req,res)=> {
  res.send('Hello Express')
}).listen(3000)

express.get('/addUser', (req, res)=> {
  let data = {
    name: req.query.myInput
  }
  console.log(data);
  var addUser = User(data);
  addUser.save();
  res.send(JSON.stringify(data))
})