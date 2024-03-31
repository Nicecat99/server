const port = 2000; // localhost:2000
const serverPort = 8080; //WebSocket server: "wss://localhost:1000" NOT https/http
const SERVER = require('ws');
const wss = new SERVER.Server({port:serverPort});
const http = require('http');
function server(req,res){
	res.write('Websocket server is: wss://localhost:8080');
	res.end();
}

http.createServer(server).listen(port);
