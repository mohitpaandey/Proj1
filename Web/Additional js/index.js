var express = require('express');
var app = express();
var fs=require('fs');
var http = require('http'); 
var multer  = require('multer')
var upload = multer({ dest: 'Uploads/' })

var server = http.createServer(function (req, res) { 
    if (req.url == '/') { 
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
          
        fs.readFile('./index.html' ,null,function(err,data){
            if(err){
                res.writeHead(404);
                res.write("error found");
            }
            else{
                res.write(data);
            }
            res.end();
        });
    
    }});

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/index', function (req, res) {
    var name = req.body.email + ' ' + req.body.password;
    
    res.send(name + ' Submitted Successfully!');
});

server.listen(, function () {
    console.log('Node server is running..');
})