var should          = require('should');
var db              = require('../../../app/models');
var sequelize       = require('../../../app/models').sequelize;


describe("App::Models::Country", function () {
  
  before(function(){
    // db.Country.sync();
  });
  
  after(function(){
    // db.Country.drop();
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
    
    describe("Create a Country", function () {
      var _country;
      
      beforeEach(function(done){
        db.Country.create( { 
          code: 'MY', name: 'Malaysia', dialingCode: '60', 
          nationalitySingular: "Malaysian", nationalityPlural: 'Malaysians',
          currencyCode: "MYR"
        } )
        .complete( function(err, c) {
          if (err) { console.log("ERROR: err", err); }
          // console.log("country: ", country);
          _country = c;
          done();
        });
        
      });
      
      it("should have all the correct attributes defined", function () {
        // console.log("country: ", _country);
        _country.should.have.properties('id','code','name','dialingCode','nationalitySingular','nationalityPlural','currencyCode','createdAt','updatedAt', 'deletedAt');
      });
      
      it("should have the 'id' attribute set correctly", function () {
        // console.log("country: ", _country);
        _country.should.have.property('id',1);
      });
      
    });
    
    describe("Read a Country", function () {
      
    });
    
    describe("Update a Country", function () {
      
    });
    
    describe("Delete a Country", function () {
      
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
    
    describe("hasMany(Region)", function () {
      
    });
    
    describe("hasMany(City)", function () {
      
    });
    
  });
  
});
