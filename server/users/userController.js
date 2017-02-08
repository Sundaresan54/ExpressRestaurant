var users = require('./userEntity');
var models = {
  add:function(req, res) {
     let newUser=new users({
       "userName":req.body.userName,
       "password":req.body.password
     })
     newUser.save().then((doc)=>{
       console.log(doc);
       res.send(doc);
     },(err)=>{
       console.log(err);
       res.send('Error');
     });
  },
  update: function(req, res) {
     let id = req.params.id;
      users.findByIdAndUpdate(id,{$set:{userName:req.body.userName}},{new:true}).then((doc)=>{
     res.send(doc);
   },(err)=>{
     console.log(err);
     res.send('Error');
   });
 },
 delete:function(req, res) {
    let id = req.params.id;
     users.findByIdAndRemove(id).then((doc)=>{
      res.send(doc);
    },(err)=>{
      console.log(err);
      res.send('Error');
    });
 },
 view:function(req, res) {
  console.log('Inside get');
  users.find().then((doc)=>{

  res.send(doc);
  },(err)=>{
  console.log(err);
  res.send('Error');
  });
 }

};
module.exports = models;
