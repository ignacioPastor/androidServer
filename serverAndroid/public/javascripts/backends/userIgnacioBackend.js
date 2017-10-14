var exports = module.exports = {};
var db = require('./../database');
var models = db.models;
var Promise = require('promise');


exports.getUserByEmail = function (email){
    let myUser = new Promise((fulfill, reject) => {
        models.UserIgnacio.findOne({where: {email: email}, raw: true}).then(user => {
            if(user) {
                fulfill(user);
            }
            else {
                fulfill(null);
            }
        }).catch(reject);
    });
    return myUser;
};

exports.updateUser = function (user) {
    return new Promise((fulfill, reject) => {
        models.UserIgnacio.update(user,{where: {id: user.id}})
            .then(rows => {
                fulfill({success: true});
            })
            .catch(reject);
    })
};

exports.addUser = function (user) {
    return new Promise((fulfill, reject) => {
        models.UserIgnacio.create(user)
            .then(result => {
                fulfill(result)
            })
            .catch(reject);
    })
};

//Function to get all the clients from the database
exports.getAll = function() {
    return new Promise((fulfill, reject) => {
        models.UserIgnacio.findAll({order: 'telefono asc', raw: true}).then(users => {
            return fulfill(users);
        }).catch(reject);
    })
};

//Add a new user
exports.addUser = function (user) {
    return new Promise((fulfill, reject) => {
    console.log(user);
        models.UserIgnacio.create(user)
            .then(result => {
                fulfill(result)
            })
            .catch(reject => {
    console.log(reject);
            });
    })
};
