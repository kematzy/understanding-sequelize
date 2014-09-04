
var Sequelize     = require('sequelize');
var db            = require('./secrets.conf.js').db;

var sequelizeSQLite = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',
  // the storage engine for sqlite  - default ':memory:'
  storage: './db/test.default.db',
  
  // disable logging; default: console.log
  logging: false,
  
  // 
  define : {
    // 
    timestamps: true,
    // enable safer deletes
    paranoid: true,
    
    instanceMethods: {
      
      currentUser: function(current_user) {
        console.log("currentUser", current_user);
      }
      
    }
    
  }
});

// var sequelizeMySQL = new Sequelize('database', 'username', 'password', {
var sequelizeMySQL = new Sequelize(db.database, db.username, db.password, {
  // mysql is the default dialect, but you know...
  dialect: 'mysql'
});


module.exports = {
  SQLite  : sequelizeSQLite,
  MySQL   : sequelizeMySQL
}


