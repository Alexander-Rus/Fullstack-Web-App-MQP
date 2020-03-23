const express = require('express');
const newRouter = express.Router();

//If you are viewing this on github, then the path to the database has been hidden

newRouter.get('/mongotest/:user', (req, res) =>{
    var MongoClient = require('mongodb').MongoClient;
    var url = "###########################"
  
    MongoClient.connect(url, function(err, db) {
      var dbo = db.db("MQP");
      dbo.collection("User Titles").findOne({'Username': req.params.user}, function(err, result) {
        if(!err){
          res.status(200).json(result)
        } else {
          console.log(err)
          res.json(err)
        }
      })
    })
})

module.exports = newRouter;