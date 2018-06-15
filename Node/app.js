const http = require("http");
const fs = require('fs');

//function renderHomePage(req, res){
function renderHomePage(){
	// res.writeHead(200,{
	// 	'content-type':'text/html'
	// });
	// res.end(`<h1>Your page has loaded</h1>`);
	const theHTMLtoGet = fs.readFileSync('homePage.html');
	return theHTMLtoGet;
}

const server = http.createServer((req, res)=>{
	if(req.url==='/'){
		//renderHomePage(req, res);
		res.writeHead(200,{'content-type':'text/html'});
		res.end(renderHomePage());
	}else if(req.url==='/peacehand.jpg'){
		//renderHomePage(req, res);
		res.writeHead(200,{'content-type':'image/jpg'});
		const img = fs.readFileSync('peacehand.jpg')
		res.end(img);	
	}else{
		res.end(`Page not Found`)
	}
});

server.listen(3000);
console.log(`Server is listening on port 3000...`);
