const express = require('express');
const newRouter = express.Router();
const Twitter = require('twitter');
const config = require('../config');
var T = new Twitter(config);


//If you cloned this repo, then the twitter auth keys will not work, you'll need to get your own
//and put them in the config file. You need to sign up with the Twitter API
newRouter.get('/Twitter_Info/:user', (req, res) =>{

    // Set up your search parameters
    var params = {
        user_id: req.params.user,
        screen_name: req.params.user
    }
    
    // Initiate your search using the above paramaters
    T.get('users/show', params, function(err, data, response) {
        // If there is no error, proceed
        if(!err){
        console.log("Is this the data", data.name)
        res.json(data)
        } else {
        res.json(err)
        console.log(err);
        }
    })
})

module.exports = newRouter;

