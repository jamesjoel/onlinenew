var express = require("express");
var app = express();
var MongoClient = require("mongodb").MongoClient;
var mongo = require("mongodb");
var cors = require("cors");
var bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser());
// localhost:3000/api/employee
app.get("/api/employee", (req, res)=>{
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("newbatch");
        db.collection("employee").find().toArray((err, result)=>{
            res.send(result);
            // console.log(result);
        });
    });
});
app.post("/api/employee", (req, res)=>{
    var obj = req.body;
    delete obj._id;
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("newbatch");
        db.collection("employee").insert(obj, (err, result)=>{
            console.log(result);
            res.send(result.ops[0]);
        });
    });
});
app.delete("/api/employee/:id", (req, res)=>{
    // console.log(req.params);
    var id = req.params.id;
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("newbatch");
        db.collection("employee").remove({ _id : mongo.ObjectId(id)}, (err, result)=>{
            res.send(result);
        })
    })

});

app.put("/api/employee/:id", (req, res)=>{
    // console.log(req.body);
    var id = req.params.id;
    delete req.body._id;
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("newbatch");
        db.collection("employee").update({ _id : mongo.ObjectId(id)}, { $set : req.body }, (err, result)=>{
            console.log(result);
            res.send(result);
        })
    })

});



// app.put()








app.get("/api/product", (req, res)=>{
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("newbatch");
        db.collection("product").find().toArray((err, result)=>{
            res.send(result);
        })
    })
})










app.listen(3000, ()=>{
    console.log("server running for API");
});


/*
    res.send()
    res.render()
    res.redirect()
    res.sendFile()

*/




/*

this is an REST Full API -----www.demo.com/api/products

.get()   ----- getting all data
.post()  ----- insert
.delete() ----www.demo.com/api/products/12   ---- delete
.put() ---- www.demo.com/api/products/15 + obj ---- update




*/