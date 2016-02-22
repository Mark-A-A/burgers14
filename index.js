debugger
var PORT = process.env.NODE_ENV || 4040;

var express = require('express');
var exphbs  = require('express-handlebars');
var mysql = require('mysql'); 
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Directory for serving public static files
app.use('/static', express.static(__dirname + '/public'));

//Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 

var connection = mysql.createConnection({
  
  port     : 3306,
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'burgers_db'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
 
  console.log('The solution is: ', rows[0].solution);
});


//Ruotes
//routes go inside controller JS file

app.get('/', function (req, res) {
    debugger
    console.log("hit the home page");
    var query = ("SELECT * FROM burgers");
    connection.query(query, function (err, results) {
      if(err) throw err;

      var data = {
        burgers: results
      }
      console.log(results); //Results from mysql table burgers
      res.render('home', data);
      //res.send(results); //sending results to homepage
    });
    
});


app.post("/create", function (req, res){
    debugger
    console.log("Posting to burgers table in burgers_db");
    console.log(req);
    console.log("request body: "+ req.body)
    var query = "INSERT INTO burgers (burger_name) VALUES ('"+ req.body.burgerToAdd + "')";
    connection.query(query, function (err, results) {
      if(err) throw err;

      
      console.log("Results: " + results); //Results from mysql table burgers
      res.redirect('/');
      //res.send(results); //sending results to homepage
    });
})

//connecting to route for deleting row from DB table burgers
app.post('/delete/:id', function (req, res) {
  //deleting row from table
  console.log("deleting row from table");
  res.send("deleting row from table now - you ate a burger");
});

app.listen(PORT, function (){
  console.log("Server listening on Port %s", PORT);
});