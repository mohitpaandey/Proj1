const express = require('express');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: './Uploads/' 
//   filename:function(req,res,cb){
//     cb(null,file.originalname);

  //}
 
});
const upload =multer({
  storage:storage
}).fields([
    {name:'file4'},
    {name:'file3'}
]);
var http = require('http');

const app = express();

var server = http.createServer(function (req, res) { 
  if (req.url == '/') { 
      res.writeHead(200, { 'Content-Type': 'text/html' }); 
      
        
      fs.readFile('./pdfpage.html' ,null,function(err,data){
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
app.get('/pdfp', (req, res) => {
  res.sendFile(__dirname + '/pdfpage.html');
});

// It's very crucial that the file name matches the name attribute in your html
app.post('/pdfp', (req, res,next) => {
    upload(req,res,function(err){
        if(err){
            console.log(err);
        }else{
            res.write("done");

            console.log('done');
            console.log(req.filename);
        }
    })

});

 

app.listen();