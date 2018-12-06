var fs =require('fs');
var url =require('url');


function renderHTML(path,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.readFile(path ,null,function(err,data){
        if(err){
            res.writeHead(404);
            res.write("error found");
        }else{
            res.write(data);
        }
        res.end();
    });

}
 
   var handelRequest =function(req,res){
        res.writeHead(200,{'Content-Type':'text/html'});
        var path =url.parse(req.url).pathname;
        switch(path){
            case '/':
            renderHTML ('./index.html',res);
            break;
            case '/modal':
            renderHTML('./modal.html',res);
            break;
            default:
            Response.writeHead(404);
            res.write("not found");
            res.end();

        }
    }

module.exports=handelRequest;























//var http = require('http');
// var fs = require('fs');













// var server = http.createServer(function(req,res){
//     console.log('request of page:'+req.url);
//     if(req.url=== '/home' ){
//         res.writeHead(200,{'Content-Typoe':'text/html'});
//         fs.createReadStream(__dirname+'/index.html','utf8').pipe(res);
//     }else if(req.url=== '/modal'){
//         res.writeHead(200,{'Content-Typoe':'text/html'});
//         fs.createReadStream(__dirname+'/modal.html','utf8').pipe(res);

//     }
//     res.writeHead(200,{'Content-Typoe':'text/html'});
//     var myReadStream =fs.createReadStream(__dirname+'/index.html','utf8');
//     myReadStream.pipe(res);
// });
// server.listen();