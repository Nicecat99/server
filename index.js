function server(WS,req){
	ws.on('connection', function(){console.log('connected');});
	ws.on('close', function(){console.log('disconnected');});
}

function run(){
	console.log(`Success`); 
}

const port = 8080; // localhost:8080
const express = require('express');
const Ws = require('express-ws');
const app = express();
Ws(app);

app.ws(server);
app.use(express.static('public'));
app.listen(port,run);
