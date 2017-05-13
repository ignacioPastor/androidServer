var exports = module.exports = {};
var db = require('./../database');
var models = db.models;
var Promise = require('promise');


exports.getUserByEmail = function (email){
    console.log("userIgnacioBackend---------------1");
    let myUser = new Promise((fulfill, reject) => {
    console.log("userIgnacioBackend---------------2");
        models.UserIgnacio.findOne({where: {email: email}, raw: true}).then(user => {
            if(user) {
    console.log("userIgnacioBackend---------------3");
                fulfill(user);
            }
            else {
    console.log("userIgnacioBackend---------------4");
                fulfill(null);
            }
        }).catch(reject);
    });
    console.log("userIgnacioBackend---------------5");
    return myUser;
};