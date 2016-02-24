// debugger
console.log("PORT: "+ process.env.PORT);
console.log("NODE_ENV: "+NODE_ENV);
var PORT = process.env.PORT || 4040;

var express = require('express');
var exphbs  = require('express-handlebars');
var mysql = require('mysql'); 
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Directory for serving public static files

//app.use('/static', express.static(__dirname + '/public'));

//Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
app.use(express.static('public'));
// app.use('/css', express.static('public/css'));
// app.use('/js', express.static('public/js'));
// app.use('/img', express.static('public/pictures'));

var connection = mysql.createConnection(process.env.JAWSDB_URL);
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
 
  console.log('The solution is: ', rows[0].solution);
});


//Ruotes
//routes go inside controller JS file

app.get('/', function (req, res) {
    // debugger
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
    // debugger
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
  
  console.log("req: "+req);
  console.log("request body: "+ req.body)
  console.log("req.params: " + req.params);
  //deleting row from table
  var query = "DELETE FROM burgers WHERE id='" + req.params.id + "'";
  console.log(query)
    connection.query(query, function (err, results) {
      if(err) throw err;

      console.log("deleting row from table");
      console.log("Results: " + results); //Results from mysql table burgers
      res.redirect('/');
      //res.send(results); //sending results to homepage
    });
  
  
});

app.listen(PORT, function (){
  console.log("Server listening on Port %s", PORT);
});