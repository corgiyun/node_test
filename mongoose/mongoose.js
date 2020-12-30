var mongoose = require('mongoose');
var url = "mongodb://localhost:27017/mytest";
mongoose.connect(url);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=> {
  console.log("Successful connection to " + url);
});


var Schema = mongoose.Schema;
let user = {
  name: String
};

var userSchema = Schema(user);
var User = mongoose.model('User', userSchema);
// var newUser = User({name: 'testName'});
// newUser.save();

module.exports = { mongoose, User }