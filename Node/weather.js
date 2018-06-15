const http = require('http');

const apikey = 'e312dbeb8840e51f92334498a261ca1d';
const weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&APPID="+apikey;

const request = http.get(weatherUrl, (theResponse)=>{

	let weatherData = '';
	theResponse.on('data',(chunkOfData)=>{
		console.log(chunkOfData);
		console.log(`\n`);
		weatherData += chunkOfData;
	});

	theResponse.on('end',()=>{
		console.log(typeof(weatherData))
		console.log(typeof(JSON.parse(weatherData)));
		console.log(JSON.parse(weatherData));
	})
});

// const server = http.createServer((req, res)=>{
// 	if(req.url=== `/`){
// 		//writeHead take 2 arg: 1.Status code 2.
// 		res.writeHead(200,{'content-type':`text/html`})
// 		res.write(`<h1>Data!!</h1>`)
// 		res.end(weatherData);
// 	}
// 	else{
// 		res.writeHead(404,{'content-type':`text/html`})
// 		res.write(`<h1>Requested page is not found</h1>`)
// 		res.end();
// 	}
// })

server.listen(8000);
