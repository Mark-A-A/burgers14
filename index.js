var PORT = process.env.NODE_ENV || 4040;

var express = require('express');
var exphbs  = require('express-handlebars');
 
var app = express();
// Directory for serving public static files
app.use('/static', express.static(__dirname + '/public'));

//Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    console.log("hit the home page");
    res.render('home');
});
 
app.listen(PORT, function (){
  console.log("Server listening on Port %s", PORT);
});