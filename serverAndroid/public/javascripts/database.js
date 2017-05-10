var Sequelize = require('sequelize');
var models = require('./models');
var exports = module.exports = {};
var localhost = 'localhost';

// Variables to use in remote server mode
const serverPass = 'E7qggPBqc7vne7tz';
const serverUser = 'root';
const serverNameDatabase = "md_database";

// Variables to use in local server mode
const localUser = 'testAngular';
const localPassword = '1234';
const nameDatabaseLocal = "md_databaseandroid";

const user = serverUser;
const password = serverPass;
const database = serverNameDatabase;

// const user = localUser;
// const password = localPassword;
// const database = nameDatabaseLocal;

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