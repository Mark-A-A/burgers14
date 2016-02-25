/*Middleware for ..
*/

var express = require('express');
var router = express.Router();
var burgerMethods = require('../model/burgers.js')

// define the home page route
router.get('/', function (req, res) {
  debugger
  console.log("showing all burgers on home page")
  
  burgerMethods.allBurgers(function (burgerData) {
    debugger
    console.log("burgerData from ORM: " + burgerData);
    
    var burgerTableData = {
        burgers: burgerData
    }

    console.log("burgerTableData");
    //res.redirect("/");
    res.render('home', burgerTableData);
  });


  //res.send('showing all burgers on home page');
  

});

// define the Create a Burger route
router.get('/ceate', function(req, res) {
  console.log("ordering a burger and inserting order into table")
  res.send('Inserting a burger');
});

router.post('/devour/:id', function (req, res) {
  console.log("devouring a burger")
  console.log("req: "+req);
  console.log("request body: "+ req.body);
  console.log("burgerID: " +req.body.burgerID);
  console.log("req.params: " + req.params);
  //deleting row from table
  
  
    res.redirect('/');
    //res.send(results); //sending results to homepage
});

 

router.post('/delete/:id', function (req, res) {
  
  console.log("req: "+req);
  console.log("request body: "+ req.body);
  console.log("burgerID: " +req.body.burgerID);
  console.log("req.params: " + req.params);
  //deleting row from table
  
  
    res.redirect('/');
    //res.send(results); //sending results to homepage
});


//Controller => Views
module.exports = router;