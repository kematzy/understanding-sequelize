module.exports = function(sequelize, DataTypes) {
  
  var Country = sequelize.define('Country', {
    code                  : { type: DataTypes.STRING, allowNull: false, unique: true },
    name                  : { type: DataTypes.STRING, allowNull: false },
    dialingCode           : { type: DataTypes.STRING, allowNull: true, defaultValue: ''  },
    nationalitySingular   : { type: DataTypes.STRING, allowNull: true, defaultValue: ''  },
    nationalityPlural     : { type: DataTypes.STRING, allowNull: true, defaultValue: ''  },
    currencyCode          : { type: DataTypes.STRING, allowNull: true, defaultValue: ''  },
    
    createdBy             : { type: DataTypes.STRING, defaultValue: 'unknown' },
    updatedBy             : { type: DataTypes.STRING, defaultValue: 'unknown' }
    
  }, {
    classMethods: { }
  });
  
  // TODO: Associations commented out because not working...
  // Country.hasMany(Region);
  // Country.hasMany(City);
  
  return Country;
}