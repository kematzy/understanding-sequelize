/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Region = sequelize.define('Region', { 
    ref             : { type: DataTypes.STRING(5), unique: true, validate: { isNull: false } },
    code            : { type: DataTypes.STRING(2), allowNull: false, unique: true },
    countryCode     : { type: DataTypes.STRING(2), allowNull: false },
    name            : { type: DataTypes.STRING,    allowNull: false },
    
    createdBy       : { type: DataTypes.STRING, defaultValue: 'unknown' },
    updatedBy       : { type: DataTypes.STRING, defaultValue: 'unknown' }
  }, {
    classMethods: { }
  });
  
  // TODO: Associations commented out because not working...
  // Region.belongsTo(Country, { foreignKey: 'countryCode'});
  // Region.hasMany(City, { foreignKey: 'regionRef'});
  
  return Region;
};


