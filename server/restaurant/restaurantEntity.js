const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var mdb = new mongoose.Schema( {
  resId:String,
  resName:String,
  resLoc:String

});
 var restaur = mongoose.model('restaurant',mdb)
module.exports = restaur;
