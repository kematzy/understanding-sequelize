
// var Sequelize       = require('sequelize');
// var sequelize       = require('./db.conf.js').SQLite;


module.exports = function(sequelize, DataTypes) {
  
  var User = sequelize.define('User', {
    username  : DataTypes.STRING,
    email     : DataTypes.STRING,
    birthday  : DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Task)
      }
    }
  });
  
  return User;
}


// var User = sequelize.define('User', {
//   username: Sequelize.STRING,
//   birthday: Sequelize.DATE
//   
//   //
//    // required: true, alphanumeric: true, minLength: 5, maxLength: 32
//    username              : { type: String, limit: 50, unique: true },
//    //
//    // email: true,
//    email                 : { type: String, limit: 250, unique: true, required: true },
//    // required: true, minLength: 5, maxLength: 255
//    name                  : { type: String, limit: 150, required: true },
//    //
//    hashedPassword        : { type: String, limit: 255 },
//    // maxLength: 2  // only accept up to 99 failed attempts
//    loginAttemptsCount    : { type: Number, limit: 2 },
//    // ip: true, // ensure stored value is an IP address
//    currentLoginIPAddress : { type: String, limit: 24, required: true },
//    //
//    currentLoginAt        : { type : Date, required: true },
//    // ip: true, // ensure stored value is an IP address
//    lastLoginIPAddress    : { type: String, limit: 24 },
//    //
//    lastLoginAt           : { type: Date },
//    //
//    sessionTokens         : { type: Array },
//    //
//    confirmedUser         : { type: Boolean, default: false },
//    //
//    confirmToken          : { type: String, limit: 150, unique: true },
//    //
//    rememberToken         : { type: String, limit: 150, unique: true },
//    //
//    passwordResetToken    : { type : String, limit: 150, unique: true },
//    //
//    apiKey                : { type: String, limit: 150, unique: true },
//    //
//    status                : { type : String, limit: 50 },
//    //
//    profileSettings       : { type : 'JSON' },
// 
//    //
//    createdAt             : { type: Date },
//    createdBy             : { type: String, limit: 150 },
//    //
//    updatedAt             : { type: Date },
//    updatedBy             : { type: String, limit: 150 },
//    //
//    deletedAt             : { type: Date },
//    deletedBy             : { type: String, limit: 150 }
//   
// })
//  
// sequelize.sync().success(function() {
//   User.create({
//     username: 'sdepold',
//     birthday: new Date(1986, 06, 28)
//   }).success(function(sdepold) {
//     console.log(sdepold.values)
//   })
// })