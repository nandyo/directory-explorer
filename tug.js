var FileorDirArr = [];
const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res){

if (req.url === '/favicon.ico'){
    res.writeHead(200, {'Content-Type': 'image/x-icon'} );
    res.end();
    console.log('favicon requested');
    return;
    res.end();
}
    
else{
    fs.readdir("/"+req.url+"/", function(err, files){
    console.log(req.url);
    console.log(JSON.stringify(FileorDirArr));
    for(i=0;i<files.length;i++){
        FileorDirArr.push(files[i]);
    }
    });

    for(i=0;i<FileorDirArr.length;i++){
        let stats = fs.lstatSync(req.url+"/"+FileorDirArr[i]); //fileordirarr dikomen tp klw iya gbs baca size
        if(stats.isFile()){
        res.write(FileorDirArr[i]+" "+fs.statSync(req.url+"/"+FileorDirArr[i]).size+"B"); 
        res.write("\r");
        }
        
        else{ 
        res.write(FileorDirArr[i]);
        res.write("\r");
        }
        
        
//        var stats = fs.lstatSync("/"+FileorDirArr[i]);
//        res.write(FileorDirArr[i]+stats.size);
//        res.write("\r");
//        console.log(FileorDirArr[i]);
//        console.log("\r");
    }
    delete FileorDirArr;
    res.end();
}
})
    var FileorDirArr = [];
server.listen(3000, ()=>{ console.log('server running on port 3000s')})



