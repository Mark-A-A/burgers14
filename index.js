var PORT = process.env.NODE_ENV || 4040;

var express = require('express');
var exphbs  = require('express-handlebars');
var mysql = require('mysql'); 
var app = express();

// Directory for serving public static files
app.use('/static', express.static(__dirname + '/public'));

//Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 

var connection = mysql.createConnection({
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


app.get('/', function (req, res) {
    console.log("hit the home page");
    var query = ("SELECT * FROM burgers");
    connection.query(query, function (err, results) {
      if(err) throw err;

      console.log(results); //Results from mysql table burgers
      res.render('home', results);
      //res.send(results); //sending results to homepage
    });
    
});

//routes go inside controller JS file
app.post("/create", function (req, res){  
    console.log("Posting to burgers table in burgers_db");

})

app.listen(PORT, function (){
  console.log("Server listening on Port %s", PORT);
});