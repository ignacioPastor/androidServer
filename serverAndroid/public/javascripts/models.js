var exports = module.exports = {};
var Sequelize = require('sequelize');

var createData = true; 

// Tables
// I put Events in plural because 'Event' is a reserved word.
var TestAngular, UserIgnacio;

function setUp(connection) {
    //Test table
    TestAngular = connection.define('testAngular', {
        testField1: {
            type: Sequelize.STRING
        },
        testField2: {
            type: Sequelize.STRING
        },
        testField3: {
            type: Sequelize.STRING
        },
        testField4: {
            type: Sequelize.STRING
        }
    }, {
      indexes: [
          {
              fields: ['id']
          }
      ],
      timestamps: true  
     }
    );

     //UserIgnacio table
    UserIgnacio = connection.define('userignacio', {
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        latitud: {
            type: Sequelize.STRING
        },
        longitud: {
            type: Sequelize.STRING
        },
        telefono: {
            type: Sequelize.STRING
        }
    }, {
      indexes: [
          {
              fields: ['id']
          }
      ],
      timestamps: true  
     }
    );


    //Relations
    //Client.hasMany(Expense, {foreignKey: 'clientId'});

    //connection.sync();

     connection.sync({force: createData}).then(result => {

        if(createData) {
            // UserIgnacio.create({name: "ignacio", email: "ignacio.past@gmail.com", password: "ignacio1", telefono: "651650233"});
            UserIgnacio.create({name: "userDevelop", email: "1", password: "11", telefono: "111"});
            UserIgnacio.create({name: "user2", email: "emailUser2", password: "passUser2", telefono: "222"});
            UserIgnacio.create({name: "user3", email: "emailUser3", password: "passUser3", telefono: "333"});
            UserIgnacio.create({name: "user4", email: "emailUser4", password: "passUser4", telefono: "444"});
            UserIgnacio.create({name: "user5", email: "emailUser5", password: "passUser5", telefono: "555"});




            TestAngular.create({testField1: 'contentTestField11', testField2: 'contentTestField12', testField3: 'contentTestField13', testField4: 'contentTestField14'});
            TestAngular.create({testField1: 'contentTestField21', testField2: 'contentTestField22', testField3: 'contentTestField23', testField4: 'contentTestField24'});
            TestAngular.create({testField1: 'contentTestField31', testField2: 'contentTestField32', testField3: 'contentTestField33', testField4: 'contentTestField34'});
            TestAngular.create({testField1: 'contentTestField41', testField2: 'contentTestField42', testField3: 'contentTestField43', testField4: 'contentTestField44'});
            TestAngular.create({testField1: 'contentTestField51', testField2: 'contentTestField52', testField3: 'contentTestField53', testField4: 'contentTestField54'});
            TestAngular.create({testField1: 'contentTestField61', testField2: 'contentTestField62', testField3: 'contentTestField63', testField4: 'contentTestField64'});
            TestAngular.create({testField1: 'contentTestField71', testField2: 'contentTestField72', testField3: 'contentTestField73', testField4: 'contentTestField74'});
        }
    });
    

    exports.TestAngular = TestAngular;
    exports.UserIgnacio = UserIgnacio;
    
}

exports.setUp = setUp;