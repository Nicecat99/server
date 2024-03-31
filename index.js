const port = 5000; //localhost:5000
const http = require('http');
function server(req,res){
	res.write('Success');
	res.end();
}

http.createServer(server).listen(port);
