var express = require('express');
var router = express.Router();
var Promise = require('promise');

var userBackend = require('../public/javascripts/backends/userIgnacioBackend');



router.post('/', function(req, res, next) {
    console.log("authIgnacioPost1---------------1");
    // Si el usuario viene con nombre es que  no está logeandose, así que está para insertar, hacemos next
    if(req.body.name){
        next();
    }else{
        var email = req.body.email;
        var password = req.body.password;
        console.log(email);
        console.log(password);

        if(!email || !password) {
        console.log("authIgnacioPost1---------------2");
            res.status(401).end('Nombre de usuario o password incorrecto');
        }
        else {
        console.log("authIgnacioPost1---------------3");
            userBackend.getUserByEmail(email)
                .then(function(user) {
        console.log("authIgnacioPost1---------------4");
                    if(user && password == user.password) {   //If user is not null (received email exists), and received password is equal to user password
        console.log("authIgnacioPost1---------------5");
                        delete user.password;
                        res.json(user);
                    }
                    else {
        console.log("authIgnacioPost1---------------6");
                        res.status(401).end('Nombre de usuario o password incorrecto');
                    }
                })
                .catch(function(reason) {
        console.log("authIgnacioPost1---------------7");
                    res.status(401).end(reason);
                });
        }
    }
    
});
// Añade un nuevo usuario
router.post('/', (req, res, next) => {
    console.log("authIgnacioPost2----------------1");
    let user = req.body;
    console.log("authIgnacioPost2----------------2");
    userBackend.addUser(user)
        .then(answer => {
    console.log("authIgnacioPost2----------------3");
            res.json(answer);
        })
        .catch(error => {
    console.log("authIgnacioPost2----------------4");
            res.status(500).end(error);
        });
});

// Actualiza un usuario
router.patch('/', (req, res, next) => {
    console.log("authIgnacioPatch----------------1");
    let user = JSON.parse(req.body.user);
console.log(user);
console.log(user.id);
    console.log("authIgnacioPatch----------------2");
    userBackend.updateUser(user)
        .then(u => {
    console.log("authIgnacioPatch----------------3");
            res.json(u);
        })
        .catch(error => {
    console.log("authIgnacioPatch----------------4");
            res.status(500).end(error);
        });
});

// Get clients with unpaid status
router.get('/getAll', function(req, res, next) {
    console.log("authIgnacioGetAll---------------1");
    userBackend.getAll()
        .then(users => {
    console.log("authIgnacioGetAll---------------2");
            res.json(users);
        })
        .catch(error => {
    console.log("authIgnacioGetAll---------------3");
            res.status(500).end(error);
        });
});

module.exports = router;
