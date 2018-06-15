// Require is kind of like the node version of <script>

//http is part of node core. We do not have to install or ask for it.
// It just come with node. Just require it.

const http = require("http");
// fs = file system
const fs = require("fs");

// createServer takes 2 args: 1.request 2.response
const server = http.createServer((req, res)=>{
	//console.log(`Inside createServer`)
	console.log(req.url)
	if(req.url=== `/`){
		//writeHead take 2 arg: 1.Status code 2.
		res.writeHead(200,{'content-type':`text/html`})
		res.write(`<h1>Server Responding</h1>`)
		res.end();
	}
	else{
		res.writeHead(404,{'content-type':`text/html`})
		res.write(`<h1>Requested page is not found</h1>`)
		res.end();
	}
})

server.listen(8080);
console.log("listen on port 8080")