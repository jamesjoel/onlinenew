var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var sha1 = require("sha1");
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
var cors = require("cors");
var jwt = require("jsonwebtoken");
var mongo = require("mongodb");

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

app.get("/api/user", backdoor, (req, res)=>{
    //console.log(req.userData);
    var id = req.userData.id;
    MongoClient.connect(url, (err, con)=>{
        var db = con.db("newbatch");
        db.collection("user").find({ _id : mongo.ObjectId(id)}).toArray((err, result)=>{
            res.send(result[0]);
        });
    });
});


function backdoor(req, res, next)
{
    console.log("--------------");
    if(!req.headers.authorization){
        res.status(404).send({msg : "Unauthorize User"});
    }
    else{
        if(req.headers.authorization == ""){
            
            res.status(404).send({msg : "Unauthorize User"});
        }
        else{
            var token = req.headers.authorization; // wrong token


            var userInfo = jwt.verify(token, "my name is james");
            /*
            if token is currepted then jwt.verify return "false" otherwise
            its return data


            */
            if(! userInfo){
                
                res.status(404).send({msg : "Unauthorize User"});
            }
            else{
                req.userData = userInfo;
                next();
            }
        }
    }
}




app.listen(3000, ()=>{
    console.log("server running");
})





/*
localhost:3000/api/user

1. authorization 
2. authorization not empty
3. authorization correct


this._http.get("localhost:3000/api/user", {
    headers : { Authorization : 5421sdfgsdg111221 }
});




*/