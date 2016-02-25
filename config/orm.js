/* DB ==> Model
ORM for MVC framework
*/

//Importing the mysql connection; require connection file 
var connection = require('../config/connection.js')

//orm object
var orm = {
//inserting sql commands to update the database
  //READ
  selectAllBurgers: function (table, cb) {
    debugger
    var query = "SELECT * FROM " + table;
    console.log("table: " + table);
    console.log("cb: "+ cb);
    connection.query(query, function (err, results) {
      if(err) throw err;

      console.log("results from DB table: " + results); //Results from mysql table burgersx
      cb(results);  //callback for route
      
      
    });
  },
   
  //CREATE
  addBurger: function ( table, burger, cb) {
    var query = "INSERT INTO " + table + " (burger_name) VALUES (?);"; 

    
    connection.query(query, [burger], function (err, results) {
      if(err) throw err;

      console.log("results: " + results); //Results from mysql table burgersx
      cb(results);  //callback for route
      
      
    });
  },

  //UPDATE
  devouredUpdate: function (table, burgerID, cb) {
    var query = "UPDATE " + table + " SET devoured=1 WHERE id=?";

    connection.query(query, [burgerID], function (err, results) {
      if(err) throw err;

      console.log(results); //Results from mysql table burgersx
      cb(results); //callback for route
    });
  },

  //DELETE
  deleteBurger: function (burgerID, cb) {
    var query = "DELETE FROM burgers WHERE id=?";

    //var query = ("SELECT * FROM burgers");
    connection.query(query, function (err, results) {
      if(err) throw err;

      console.log(results); //Results from mysql table burgersx
      cb(results);
      
      
    });
  }

};

module.exports = orm;
