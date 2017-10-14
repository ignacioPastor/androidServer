var express = require('express');
var router = express.Router();
var Promise = require('promise');

var userBackend = require('../public/javascripts/backends/userIgnacioBackend');



router.post('/', function(req, res, next) {
    // Si el usuario viene con nombre es que  no está logeandose, así que está para insertar, hacemos next
    if(req.body.name){
        next();
    }else{
        var email = req.body.email;
        var password = req.body.password;
        console.log(email);
        console.log(password);

        if(!email || !password) {
            res.status(401).end('Nombre de usuario o password incorrecto');
        }
        else {
            userBackend.getUserByEmail(email)
                .then(function(user) {
                    if(user && password == user.password) {   //If user is not null (received email exists), and received password is equal to user password
                        delete user.password;
                        res.json(user);
                    }
                    else {
                        res.status(401).end('Nombre de usuario o password incorrecto');
                    }
                })
                .catch(function(reason) {
                    res.status(401).end(reason);
                });
        }
    }
    
});
// Añade un nuevo usuario
router.post('/', (req, res, next) => {
    let user = req.body;
    userBackend.addUser(user)
        .then(answer => {
            res.json(answer);
        })
        .catch(error => {
            res.status(500).end(error);
        });
});

// Actualiza un usuario
router.patch('/', (req, res, next) => {
    let user = JSON.parse(req.body.user);
console.log(user);
console.log(user.id);
    userBackend.updateUser(user)
        .then(u => {
            res.json(u);
        })
        .catch(error => {
            res.status(500).end(error);
        });
});

// Get clients with unpaid status
router.get('/getAll', function(req, res, next) {
    userBackend.getAll()
        .then(users => {
            res.json(users);
        })
        .catch(error => {
            res.status(500).end(error);
        });
});

router.post('/insert', (req, res, next) => {
    let user = req.body;
     console.log(user);
    userBackend.addUser(user)
        .then(answer => {
            res.json(answer);
        })
        .catch(error => {
            res.status(500).end(error);
        });
});

module.exports = router;
