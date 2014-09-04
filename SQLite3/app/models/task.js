


module.exports = function(sequelize, DataTypes) {
  
  var Task = sequelize.define('Task', {
    title         : DataTypes.STRING,
    description   : DataTypes.TEXT,
    status        : DataTypes.STRING
  }, {
    //
    classMethods    : { },
    //
    instanceMethods : { }
    
  });
  
  return Task;
}