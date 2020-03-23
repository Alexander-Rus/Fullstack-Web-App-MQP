const express = require('express');
const newRouter = express.Router();

//If you are viewing this on github, then the path to the database has been hidden
newRouter.get('/Get_Titles/:user', (req, res) =>{
    var MongoClient = require('mongodb').MongoClient;
    var url = "###########################"

    var incoming_string = req.params.user
    var special_char = /123456/gi;
    var url_new = incoming_string.replace(special_char, "/" )
    console.log("URL to find", url_new)
  
    MongoClient.connect(url, function(err, db) {
      var dbo = db.db("MQP");
      dbo.collection("URL Titles").findOne({'URL': url_new}, function(err, result) {
        console.log("This is the title: ", result.TITLE)
        res.json(result)
      })
    })
})

module.exports = newRouter;