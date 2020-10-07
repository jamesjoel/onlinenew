var express = require("express");
var app = express();
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");

app.use(cors());
// localhost:3000/api/employee
app.get("/api/employee", (req, res)=>{
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("newbatch");
        db.collection("employee").find().toArray((err, result)=>{
            res.send(result);
        });
    });
});


app.listen(3000, ()=>{
    console.log("server running for API");
});


/*
    res.send()
    res.render()
    res.redirect()
    res.sendFile()

*/