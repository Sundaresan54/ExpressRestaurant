const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var mdb = new mongoose.Schema( {
  name:String,
  address:{type:String,unique:true},
  cuisines:String,
  ratings:Number,
  image:String,
  comments:{type:String,
    default:'Add comments'
  }

});
 var restaur = mongoose.model('restaurant',mdb)
module.exports = restaur;
