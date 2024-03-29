// get the http module:copy
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function(request, response){
    // default readfile for fs
    let readFile   = "404.html";
    let statusCode = 404;
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === "/"){
        readFile   = "index.html";
        statusCode = 200;
    }
    else if(request.url === "/ninjas"){
        readFile   = "ninjas.html";
        statusCode = 200;
    }
    else if(request.url === "/ninjas/new"){
        readFile   = "new_ninjas.html";
        statusCode = 200;
    }

    fs.readFile(readFile, 'utf8', function (errors, contents){
        response.writeHead(statusCode, {'Content-type': 'text/html'});
        response.write(contents); 
        response.end();
    });
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");