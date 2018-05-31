var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.listen(3000);
app.use(express.static('node_modules'));
app.use(express.static('public'));
// app.use(require('stylus').middleware(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));   //add this line
app.use(bodyParser.json());  //add this line