var restaurant =  require('./restaurantEntity');
var modelRes = {
  add:function(req, res) {
      logger.debug("Inside user post");
      let newRes=new restaurant({
        "resId":req.body.resId,
      "resName":req.body.resName,
      "resLoc":req.body.resLoc
    });
          newRes.save().then((doc) =>{
        res.send(doc);
      }, (e)=>{
        res.send(e);
      });
    },
    update:function(req, res) {
      let id = req.params.id;
       users.findByIdAndUpdate(id,{$set:{resLoc:req.body.resLoc}},{new:true}).then((doc)=>{
      res.send(doc);
    },(err)=>{

      res.send('Error');
    });
  },
  delete:(req, res) => {
  var id = req.params.id;
  Todo.findByIdAndRemove(id).then((doc) => {
    res.send(doc);
  },(err)=>{

    res.send('Error');
  });
},
view:function(req,res) {

   console.log('Inside get');
   users.find().then((doc)=>{

   res.send(doc);
   },(err)=>{
   console.log(err);
   res.send('Error');
   });

}
};
module.exports = modelRes;
