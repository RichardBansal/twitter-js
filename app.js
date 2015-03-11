var express = require( 'express' );
var morgan = require("morgan")
var app = express();



app.use(morgan("dev"));


var server = app.listen(1234);
console.log("Booted Server... Again")

app.get("/", function(req, res){
	console.log("Server Listening...")
	res.send("hello world")
})