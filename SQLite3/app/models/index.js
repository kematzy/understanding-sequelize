var fs              = require('fs');
var path            = require('path');
var Sequelize       = require('sequelize');
var lodash          = require('lodash');
var sequelize       = require('../config/db.conf.js').SQLite;
// emit handling:
sequelize.sync().success(function() {
  console.log("DB.Sync() Success ");
})
.error(function(err) {
  // whooops
  console.log("DB.Sync() Error: ",err);
})

// var sequelize       = new Sequelize('sequelize_test', 'root', null);
var db              = {};
 
fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js')
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  });
 
Object.keys(db).forEach(function(modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
});



module.exports = lodash.extend({
  sequelize: sequelize,
  Sequelize: Sequelize
}, db);
