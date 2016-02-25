/*  
DB => M => C
Model gets data from DB via ORM
*/

var orm = require('../config/orm.js');

//Object CRUD methods for Burgers Table
var burgerMethods = {

  allBurgers: function(cb) {           //all =READ
    debugger
    console.log("cb for controller function to bring back data from ORM:"+cb)
    console.log("In Model: showing burgers in progress")
    orm.selectAllBurgers('burgers', function (res) {
      cb(res);
    });
  },

 

  makeBurger: function () {             //create

  },

  eatBurger: function () {              //update
    orm.devouredUpdate()
  },

  deleteBurgerFromTable: function (){  //destroy
    console.log("now deleting via Model and ORM")
  }
};

//Model => Controller 
//Exporting object methods to the Cntroller Routes
module.exports = burgerMethods;



/*
***************
connection, then to the orm
ORM
var orm = require('../config/orm.js');

var super_club = {
  all: function(cb) {
    orm.all('super_clubs', function(res){
      cb(res)
    });
  },
  create: function(nameInput,cb) {
    orm.create('super_clubs', nameInput, 1, cb);
  },
  update: function(inputId, cb){
    orm.update('super_clubs', 1, inputId, cb);
  },
  destroy: function(inputId, cb) {
    orm.destroy('super_clubs', 1, inputId, cb);
  }
};
    
module.exports = super_club;

********
orm to the model
MODEL
var orm = require('../config/orm.js');

var super_club = {
  all: function(cb) {
    orm.all('super_clubs', function(res){
      cb(res)
    });
  },
  create: function(nameInput,cb) {
    orm.create('super_clubs', nameInput, 1, cb);
  },
  update: function(inputId, cb){
    orm.update('super_clubs', 1, inputId, cb);
  },
  destroy: function(inputId, cb) {
    orm.destroy('super_clubs', 1, inputId, cb);
  }
};
    
module.exports = super_club;


*********
Controller to the model
controller
var express = require('express');
var router = express.Router();
var super_club = require('../models/super_club.js');


//get route -> index
router.get('/', function(req,res) {
  console.log('yup')
  super_club.all(function(super_clubs_data){
    console.log('got here')
    res.render('index', {super_clubs_data: super_clubs_data});
  });
});

//post route -> back to index
router.post('/create', function(req, res) {
  super_club.create(req.body.member_name, function(result){
    res.redirect('/');
  });
});

//put route -> back to index
router.put('/update', function(req,res){
  super_club.update(req.body.member_id, function(result){
    res.redirect('/');
  });
});

//delete route -> back to index
router.delete('/destroy', function(req,res){
  super_club.destroy(req.body.member_id, function(result){
    res.redirect('/');
  });
});

module.exports = router;






















*/