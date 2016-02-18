var PORT = process.env.NODE_ENV || 4040;

var express = require('express');
var exphbs  = require('express-handlebars');
 
var app = express();

//Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('home');
});
 
app.listen(PORT, function (){
  console.log("Server listening on Port %s", PORT);
});