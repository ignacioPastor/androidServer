var exports = module.exports = {};
var db = require('./../database');
var models = db.models;
var Promise = require('promise');


//Function to get all the clients from the database -- Yahir
exports.getTests = function() {
    return new Promise((fulfill, reject) => {
        models.TestAngular.findAll({raw: true}).then(tests => {
            return fulfill(tests);
        }).catch(reject);
    })
};