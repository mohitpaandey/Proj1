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
    {name:'file5'},
    {name:'file6'}
]);
var http = require('http');

const app = express();

var server = http.createServer(function (req, res) { 
  if (req.url == '/') { 
      res.writeHead(200, { 'Content-Type': 'text/html' }); 
      
        
      fs.readFile('./wordpage.html' ,null,function(err,data){
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
app.get('/word', (req, res) => {
  res.sendFile(__dirname + '/wordpage.html');
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
        }
    })

});

 

app.listen();