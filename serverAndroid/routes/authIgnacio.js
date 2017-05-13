var express = require('express');
var router = express.Router();
var Promise = require('promise');

var userBackend = require('../public/javascripts/backends/userIgnacioBackend');



router.post('/', function(req, res, next) {
    console.log("authIgnacio---------------1");
    var email = req.body.email;
    var password = req.body.password;
    console.log(email);
    console.log(password);

    if(!email || !password) {
    console.log("authIgnacio---------------2");
        res.status(401).end('Incorrect username or password.');
    }
    else {
    console.log("authIgnacio---------------3");
        userBackend.getUserByEmail(email)
            .then(function(user) {
    console.log("authIgnacio---------------4");
                if(user && password == user.password) {   //If user is not null (received email exists), and received password is equal to user password
    console.log("authIgnacio---------------5");
                    delete user.password;
                    res.json(user);
                }
                else {
    console.log("authIgnacio---------------6");
                    res.status(401).end('Incorrect username or password.');
                }
            })
            .catch(function(reason) {
    console.log("authIgnacio---------------7");
                res.status(401).end(reason);
            });
    }
});

module.exports = router;