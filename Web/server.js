var express = require('express');
var fs=require('fs');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var upload =require('express-fileupload');
const port = process.env.PORT || 8086;
app.use('/', express.static(__dirname + '/'));

app.use(upload());
// can be viewed at http://localhost:8086
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
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
app.get('/wordpage.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/wordpage.html'));
});
app.get('/excelpage.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/excelpage.html'));

    // app.post('/excelpage.html',urlencodedParser, function(req, res) {
    //     console.log(req.body);
    //     res.status(400);
    //     res.render('contact',);
    
    // });

    var urlencodedParser = bodyParser.urlencoded({ extended: false })

    app.post('/excel',  function (req, res) {
        if (req.files){
            console.log(req.files);
            var file=req.files.filename,
            filename=files.name;
            file.mv("./uploads"+filename,function(err){
                if(err){
                    console.log(err);
                    res.send('error');
                }else{
                    res.send('done');
                }
            })
        } 
      })

});

app.listen(port);