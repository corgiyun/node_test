var express = require('express');
var router = express.Router();

// add mongoose
const mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017/admin";

mongoose.connect(url, { useUnifiedTopology: true });
db = mongoose.connection;
db.on('connected', ()=> {
  console.log('MongoDB connected success'.green);
});
db.on('error', ()=> {
  console.log('MongoDB connected fail');
});
db.on('disconnected', ()=> {
  console.log('MongoDB connected to disconnected');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
