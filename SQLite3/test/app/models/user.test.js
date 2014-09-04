var should          = require('should');
var db              = require('../../../app/models');

describe("App::Models::User", function () {
  
  before(function(){
    // db.User.sync();
  });
  
  after(function(){
    // db.User.drop();
  });
  
  beforeEach(function(done){
    sequelize.sync().error(function(err){
      if(err){ console.log("ERROR: sequelize.sync()",err); }
      // done();
    });
    done();
  });
  
  afterEach(function(done){
    sequelize.drop().error(function(err){
      if(err){ console.log("ERROR: sequelize.drop()",err); }
    });
    done();
  });
  
  
  describe("CRUD", function () {
    
    describe("Create a User", function () {
      var _user;
      
      beforeEach(function(done){
        db.User.create( { 
          username: 'kematzy', email: 'kematzy@email.com', birthday: new Date()
        } )
        .complete( function(err, c) {
          if (err) { console.log("ERROR: err", err); }
          // console.log("User: ", _user);
          _user = c;
          done();
        });
        
      });
      
      it("should have all the correct attributes defined", function () {
        // console.log("User: ", _user);
        _user.should.have.properties('id', 'username', 'email','birthday', 'createdAt', 'updatedAt', 'deletedAt');
      });
      
      it("should have the 'id' attribute set correctly", function () {
        // console.log("User: ", _user);
        _user.should.have.property('id',1);
      });
      
    });
    
    describe("Read a User", function () {
      
    });
    
    describe("Update a User", function () {
      
    });
    
    describe("Delete a User", function () {
      
    });
    
  });
  
  describe("Validations", function () {
    
  });
  
  describe("Instance Methods", function () {
    
  });
  
  describe("Class Methods", function () {
    
  });
  
  describe("Hooks", function () {
    
  });
  
  describe("Associations", function () {
    
  });
  
});

