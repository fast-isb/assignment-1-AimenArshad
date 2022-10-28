import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();
import Annoucement from '../models/Annoucement.js'


//Annoucements 
router.post("/create",function(req,res){
    console.log(req.body)

    var posts = new Annoucement({
        date : Date.now() ,
        desc : req.body.desc,
        addedBy : req.body.addedBy,
      });


      posts.save((err, doc) => {
        if (err){
            console.log(req.body)
        }
        else{
            res.send(posts)
        }
        }
        )
        

});
router.get("/get/:id",function(req,res){
  

    
    let posts = Annoucement.findOne({_id: req.body.id}, function(err, posts){
        if(err){
            console.log(err);
        }
        else {
            res.send(posts);
        }
    });
    

});

router.get("/getAll",function(req,res){
  



        let posts = Annoucement.find({}, function(err, posts){
            if(err){
                console.log(err);
            }
            else {
                res.send(posts);
            }
        });
        

});
router.put("/update",function(req,res){
  
   console.log(req.body);
      var myquery = { _id: req.body._id };
     var newvalues = { $set: {name: req.body.name} };

        let posts = Person.updateOne(myquery,newvalues, function(err, posts){
            if(err){
                console.log(err);
            }
            else {
                res.send(posts);
            }
        });
});
router.delete("/delete/:id",function(req,res){
  
   
       var myquery = { _id: req.params.id };
 
         let posts = Annoucement.deleteOne(myquery, function(err, posts){
             if(err){
                 console.log(err);
             }
             else {
                 res.send("Deleted")
             }
         });
 });













export default router;

// module.exports = router;