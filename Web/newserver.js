//For routing we use Express module.
var express = require('express');
// We call it with an object instance.
var app = express();
//We use File System as fs for reading or writing the files.
var fs=require('fs');
//we use http for crreating a http server w
var http = require('http'); 
// Multer is used for uploading the files 
var multer  = require('multer');
//defining the destination where the files will be uploaded.
const storage = multer.diskStorage({
  destination: './Uploads/'});
const upload =multer({
  storage:storage });
//specifying the server
const port = process.env.PORT || 8086;

//creating the http server

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
                console.log('done');
            }
            res.end();
        });
    
    }
});   

app.get('/modal.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/modal.html'));
});
app.get('/register.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/register.html'));
});
app.get('/pdfpage.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/pdfpage.html'));
});
app.post('/pdfp', (req, res,next) => {
    upload(req,res,function(err){
        if(err){
            console.log(err);
        }else{
            res.write("done");
         console.log('done');
         console.log(req.filename);
        } }) });
app.get('/wordpage.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/wordpage.html'));
});
// It's very crucial that the file name matches the name attribute in your html
app.post('/word', (req, res,next) => {
    upload(req,res,function(err){
        if(err){
            console.log(err);
        }else{
        res.write("done");
        console.log('done');
        console.log(req.filename);
        } }) });


app.get('/excelpage.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/excelpage.html'));

app.post('/excel', upload.single('file2'), (req, res) => {

    res.write("done");
        console.log(req.file);
        console.log(req.filename);  });

});
server.listen(port);