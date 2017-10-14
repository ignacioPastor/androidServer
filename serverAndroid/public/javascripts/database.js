var Sequelize = require('sequelize');
var models = require('./models');
var exports = module.exports = {};
var keys = require('keys');
var localhost = 'localhost';

const production = false;



// Variables to use in remote server mode
const serverPass = keys.ServerPass;
const serverUser = keys.ServerUser;
const serverNameDatabase = "md_database";

// Variables to use in local server mode
const localUser = 'testAngular';
const localPassword = '1234';
const nameDatabaseLocal = "md_databaseandroid";

const user = production ? serverUser : localUser;
const password = production ? serverPass : localPassword;
const database = production ? serverNameDatabase : nameDatabaseLocal;

var connection = new Sequelize(database, user , password, {
    host: localhost,
    dialect: 'mysql',
    timezone: 'Europe/Dublin',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
//var connection = null;
models.setUp(connection);

exports.database = connection;
exports.models = models;
exports.sequelize = Sequelize;
