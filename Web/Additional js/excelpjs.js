const express = require('express');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: './Uploads/' 
 
});
const upload =multer({
  storage:storage
});
var http = require('http');

const app = express();

var server = http.createServer(function (req, res) { 
  if (req.url == '/') { 
      res.writeHead(200, { 'Content-Type': 'text/html' }); 
      
        
      fs.readFile('./excel.html' ,null,function(err,data){
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
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/excelpage.html');
});

// It's very crucial that the file name matches the name attribute in your html
app.post('/excel', upload.single('file2'), (req, res) => {

 res.write("done");
 console.log(req.file);
 console.log(req.filename);
  //res.redirect('/');
});

 

app.listen();