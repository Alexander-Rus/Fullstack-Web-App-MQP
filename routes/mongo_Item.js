const express = require('express');
const newRouter = express.Router();

//If you are viewing this on github, then the path to the database has been hidden

newRouter.get('/mongo_Item/:user', (req, res) =>{
    var MongoClient = require('mongodb').MongoClient;
    var url = "###########################"
  
    MongoClient.connect(url, function(err, db) {
      var dbo = db.db("MQP");
      dbo.collection("Item Titles").findOne({'Username': req.params.user}, function(err, result) {
        res.json(result)
      })
    })
})

module.exports = newRouter;