const port = 5000; // localhost:5000
const serverPort = 1000; //WebSocket server: "wss://localhost:1000" NOT https/http
const Server = require('ws');
const wss = new WebSocket.Server({port:serverPort});
const http = require('http');
function server(req,res){
	res.write('Websocket server is: wss://localhost:1000');
	res.end();
}

http.createServer(server).listen(port);
