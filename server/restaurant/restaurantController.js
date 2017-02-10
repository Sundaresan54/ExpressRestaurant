var restaurant =  require('./restaurantEntity');
var modelRes = {
  add:function(req, res) {

      let newRes=new restaurant({
        "name":req.body.name,
      "address":req.body.address,
      "cuisines":req.body.cuisines,
      "ratings":req.body.ratings,
      "image":req.body.image
    });
          newRes.save().then((doc) =>{
        res.send(doc);
      }, (e)=>{
        res.send(e);
      });
    },
    update:function(req, res) {
      let id = req.params.id;
       restaurant.findByIdAndUpdate(id,{$set:{comments:req.body.comments}},{new:true}).then((doc)=>{
      res.send(doc);
    },(err)=>{

      res.send('Error');
    });
  },
  delete:(req, res) => {
  var id = req.params.id;
  restaurant.findByIdAndRemove(id).then((doc) => {
    res.send(doc);
  },(err)=>{

    res.send('Error');
  });
},
view:function(req,res) {


   restaurant.find().then((doc)=>{

   res.send(doc);
   },(err)=>{
   console.log(err);
   res.send('Error');
   });

}
};
module.exports = modelRes;
