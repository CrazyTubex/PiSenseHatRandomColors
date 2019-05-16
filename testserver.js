var express = require('express'); 
var app = express();
var http = require('http');
var bodyParser = require("body-parser");
var cors = require('cors');
const sense = require("sense-hat-led");

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.listen(3000, () => {
console.log("runing on 3000")
});
var o = [255,0,0];
var x = [255,255,255];

var matrica = [
o,o,o,o,o,o,o,o,
o,o,o,o,o,o,o,o,
o,o,o,o,o,o,o,o,
o,o,o,o,o,o,o,o,
o,o,o,o,o,o,o,o,
o,o,o,o,o,o,o,o,
o,o,o,o,o,o,o,o,
o,o,o,o,o,o,o,o


];

app.get('/testlight', function(req, res){

sense.setPixels(matrica);

});

app.get('/matrica', function(req,res){
res.json(JSON.stringify(matrica));
});

app.post('/zasijaj', function(req, res){

 var idLight = req.body.id;
 console.log(matrica[idLight]);
 console.log(req.body);
 matrica[idLight] = [req.body.r,req.body.g,req.body.b];
 console.log(matrica);
 sense.setPixels(matrica);
 return "succes";

});

app.get('/test', function(req, res){
	res.json(["test","test2"]);
});

app.post('/testpost', function(req,res){

	var data = req.body;
	console.log(data);

});



