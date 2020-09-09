var express = require("express");
var routes = express.Router();
var MongoClient = require("mongodb").MongoClient;
var mongodb = require("mongodb");

var url = "mongodb://localhost:27017";

routes.get("/", (req, res) => {

    MongoClient.connect(url, (err, con) => { 
        var db = con.db("newbatch"); 
        db.collection("product").find().toArray((err, result) => { 
            var pageData = { title: "Product", pagename: "product/index", product: result };
            res.render("layout", pageData);
        });
    });


});

routes.get("/view/:pid", (req,res)=>{
    var id = req.params.pid;
    MongoClient.connect(url, (err, con) => {
        var db = con.db("newbatch");
        db.collection("product").find({ _id : mongodb.ObjectId(id) }).toArray((err, result) => {
            var pageData = { title: "Product", pagename: "product/view", product : result[0] };
            res.render("layout", pageData);
        });
    });

  
});





module.exports = routes;



/*
    MongoClient.connect(url, (err, con)=>{

        var db = con.db("dbname");

        db.collection("coll_name").find().toArray((err, result)=>{

        });
        db.collection("coll_name").insert({object}, (err, result)=>{

        });
        db.collection("coll_name").update({object},{where condi}, (err, result)=>{

        });
        db.collection("coll_name").remove({ city : "indore" }, (err, result)=>{

        });

    })









*/
