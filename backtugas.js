const http = require("http");

const fs = require("fs");
fs.readdir("/", function(err, files){
    /*for(i=0;i<files.length;i++){
        
    }*/

    const server = http.createServer(function (req, res){
        for(i=0;i<files.length;i++){
            res.write(files[i]);
            res.write("\r");
        }
        
        res.end();
    });

    server.listen(3000);

    
    
});



/*
const server = http.createServer
(function (req, res){
	res.write("a");
	res.end();    
});

server.listen(3000);

*/

