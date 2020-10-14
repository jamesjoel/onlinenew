var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var sha1 = require("sha1");
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
var cors = require("cors");

app.use(cors());
app.use(bodyParser());

app.post("/api/user/", (req, res)=>{
    req.body.password = sha1(req.body.password);
    if(req.body.re_password)
        delete req.body.re_password;

    MongoClient.connect(url, (err, con)=>{
        var db = con.db("newbatch");
        db.collection("user").insertOne(req.body, (err, result)=>{
            console.log(result);
            res.send(result);
        });
    });
});



app.listen(3000, ()=>{
    console.log("server running");
})