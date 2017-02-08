const mongoose = require('mongoose');


var schema = new mongoose.Schema({
  userName: String,
  password: String
});


 var Users = mongoose.model('users', schema);
module.exports = Users;
