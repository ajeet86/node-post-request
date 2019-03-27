//below example show its runll all line and stetime out result show in last becouse node.js not wast time Dog is running.Dog is running2.Dog is running3.Dog is done at  last end .
var express = require('express');
var app = express();

//app.use(express.static('public'));

app.get('/', function(request, response) {
		//response.send('Hello world');	
		response.sendFile(__dirname + '/public/index.html');
});


app.get('/blocks', function(request, response) {
//var blocks = ['Fixed', 'Movable', 'Rotating'];
//response.send(blocks);
//response.json(blocks);
//var blocks1 = '<ul><li>Fixed</li><li>Movable</li></ul>';
//response.send(blocks1);
response.redirect(301, '/parts');
});

app.get('/parts', function(request, response) {
						//   alert('hi');
						//  response.send(response);
var blocks = ['Fixed', 'Movable', 'Rotating'];
//response.send(blocks);
response.json(blocks);
var blocks1 = '<ul><li>Fixed</li><li>Movable</li></ul>';
response.send(blocks1);
//response.redirect(301, '/parts');
});

app.listen(8080,function(){	
	console.log('read write  on port 8080...');
	});






/*
var http = require('http');
http.createServer(function(request, response) {
		  response.writeHead(200);
request.on('readable', function() {
								     
									var chunk = null;
									while (null !== (chunk = request.read())) {
									    response.write(chunk);
									}
									 
									 
								});

request.on('end', function() {
		 response.end();				   
});


}).listen(8080,function(){	
	console.log('read write  on port 8080...');
	});

/*

var server = http.createServer();
server.on('request', function(request, response){ response.writeHead(200);
				response.write("Dog is running.");
				console.log("Dog is running................."); 
				});
//server.on('close', function(){ ... });

var http = require('http');

http.createServer(function(request, response) {
				response.writeHead(200);
				response.write("Dog is running.");
				console.log("Dog is running.................");
				setTimeout(function(){
									    response.write("Dog is done.");
										response.end();
									},10000);
				response.write("Dog is running2.");
				response.write("Dog is running3.");
				
}).listen(8080,function(){	
	console.log('Listening on port 8080...');
	});

//html dom have events like (click,submit,hover) below example triggers when p clicks

$("p").on("click", function(){ ... });

//Many objects in Node emit events(EventEmitter(net.Server(request),fs.readStream(data)))

//CUSTOM EVENT EMITTERS
var EventEmitter = require('events').EventEmitter;
var logger = new EventEmitter();
logger.on('error', function(message){
console.log('ERR: ' + message);
});
logger.emit('error', 'Spilled Milk');
logger.emit('error', 'Eggs Cracked');


*/