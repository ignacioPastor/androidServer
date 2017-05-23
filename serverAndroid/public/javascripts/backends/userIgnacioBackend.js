var exports = module.exports = {};
var db = require('./../database');
var models = db.models;
var Promise = require('promise');


exports.getUserByEmail = function (email){
    console.log("userIgnacioBackendGetByEmail---------------1");
    let myUser = new Promise((fulfill, reject) => {
    console.log("userIgnacioBackendGetByEmail---------------2");
        models.UserIgnacio.findOne({where: {email: email}, raw: true}).then(user => {
            if(user) {
    console.log("userIgnacioBackendGetByEmail---------------3");
                fulfill(user);
            }
            else {
    console.log("userIgnacioBackendGetByEmail---------------4");
                fulfill(null);
            }
        }).catch(reject);
    });
    console.log("userIgnacioBackendGetByEmail---------------5");
    return myUser;
};

exports.updateUser = function (user) {
    console.log("userIgnacioBackendUpdateUser---------------1");
    return new Promise((fulfill, reject) => {
    console.log("userIgnacioBackendUpdateUser---------------2");
        models.UserIgnacio.update(user,{where: {id: user.id}})
            .then(rows => {
    console.log("userIgnacioBackendUpdateUser---------------3");
                fulfill({success: true});
            })
            .catch(reject);
    })
};

exports.addUser = function (user) {
    console.log("userIgnacioBackendAddUser---------------1");
    return new Promise((fulfill, reject) => {
    console.log("userIgnacioBackendAddUser---------------2");
        models.UserIgnacio.create(user)
            .then(result => {
                
    console.log("userIgnacioBackendAddUser---------------3");
                fulfill(result)
            })
            .catch(reject);
    })
};

//Function to get all the clients from the database
exports.getAll = function() {
    console.log("userIgnacioBackendGetAll----------------1");
    return new Promise((fulfill, reject) => {
    console.log("userIgnacioBackendGetAll----------------2");
        models.UserIgnacio.findAll({order: 'telefono asc', raw: true}).then(users => {
    console.log("userIgnacioBackendGetAll----------------3");
            return fulfill(users);
        }).catch(reject);
    })
};