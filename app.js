const ejs = require('ejs');
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT||5000;

var array = ['add new items with +'];
const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get('/', function(req, res){
  res.render('contact', {array:array});
});
app.post('/', function(req,res){
const newItem = req.body.newItem;
array.push(newItem);
res.redirect('/');
});




app.listen(PORT, function(){
  console.log("listening on port $'PORT'");
});
