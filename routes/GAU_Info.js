const express = require('express');
const newRouter = express.Router();

//If you are viewing this on github, then the path to the database has been hidden
newRouter.get('/GAU_Info/:user', (req, res) =>{
    var MongoClient = require('mongodb').MongoClient;
    var url = "#################################"
  
    MongoClient.connect(url, function(err, db) {
      var dbo = db.db("MQP");
      dbo.collection("GAU Titles").findOne({'Username': req.params.user}, function(err, result) {
        if(!err) {
          res.status(200).json(result)
        } else {
          res.json({'error': 'This user cannot be found'})
        }

      })
    })
})

module.exports = newRouter;