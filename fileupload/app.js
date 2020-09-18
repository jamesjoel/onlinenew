var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var fileupload = require("express-fileupload");


app.use(bodyParser());
app.use(fileupload());

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.post("/", (req, res)=>{
    console.log(req.files.photo); // .photo is a name  value of input type="file"

    req.files.photo.mv(__dirname+"/photos/"+req.files.photo.name, function(err){
        if(err){
            console.log(err);
            return;
        }
        console.log("file uploaded");
    });
});


app.listen(3000, ()=>{
    console.log("server running");
})