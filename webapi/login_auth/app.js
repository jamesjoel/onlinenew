var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var sha1 = require("sha1");
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
var cors = require("cors");
var jwt = require("jsonwebtoken");

app.use(cors());
app.use(bodyParser());

app.post("/api/user/", (req, res)=>{
    req.body.password = sha1(req.body.password);
    if(req.body.re_password)
        delete req.body.re_password;

    MongoClient.connect(url, (err, con)=>{
        var db = con.db("newbatch");
        db.collection("user").find({ username : req.body.username }).toArray((err, result)=>{
            if(result.length==0)
            {
                db.collection("user").insertOne(req.body, (err, result)=>{
                    console.log(result);
                    res.send(result);
                });

            }
            else{
               res.status(403).send({ success : false });
            }
        });
    });
});


app.post("/api/user/login", (req, res)=>{
    MongoClient.connect(url, (err, con)=>{
        var db = con.db("newbatch");
        db.collection("user").find({ username : req.body.username }).toArray((err, result)=>{
            if(result.length == 1)
            {
                if(result[0].password == sha1(req.body.password))
                {
                    var data = { id : result[0]._id, username : result[0].username, name : result[0].full_name };
                    var token = jwt.sign(data, "my name is james", { expiresIn : 3600 });
                    res.status(200).send({ success : true, token});
                }
                else
                {
                    res.status(404).send({ success : false, type : 2 });
                }
            }
            else
            {
                res.status(404).send({ success : false, type : 1 });
            }
        })
    })
});




app.listen(3000, ()=>{
    console.log("server running");
})