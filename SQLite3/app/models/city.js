/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var City = sequelize.define('City', { 
    ref             : { type: DataTypes.STRING(5), unique: true, validate: { isNull: false } },
    code            : { type: DataTypes.STRING(2), allowNull: false, unique: true },
    countryCode     : { type: DataTypes.STRING(2), allowNull: false },
    regionRef       : { type: DataTypes.STRING(5), allowNull: false },
    name            : { type: DataTypes.STRING,    allowNull: false },
    timeZone        : { type: DataTypes.STRING,    allowNull: true, defaultValue: null },
    dialingCode     : { type: DataTypes.STRING,    allowNull: true, defaultValue: null },
    code            : { type: DataTypes.STRING(8), allowNull: true, unique: true },
    
    createdBy       : { type: DataTypes.STRING, defaultValue: 'unknown' },
    updatedBy       : { type: DataTypes.STRING, defaultValue: 'unknown' }
  }, {
    classMethods: { }
  });
  
  // TODO: Associations commented out because not working...
  // City.belongsTo(db.Country, { foreignKey: 'countryCode'});
  // City.belongsTo(db.Region, { foreignKey: 'regionRef'});
  
  return City;
};
