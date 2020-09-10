var express = require("express");
var routes = express.Router();




var MongoClient = require("mongodb").MongoClient;
var mongodb = require("mongodb");

var url = "mongodb://localhost:27017";

routes.get("/info", (req, res)=>{
    res.send("this is student->info page");
});
routes.get("/demo", (req, res) => {
    res.send("this is student->demo page");
});
// :3000/student/delete/1245785214752
routes.get("/delete/:a", (req, res)=>{
    
    var id = req.params.a;
    MongoClient.connect(url, (err, con)=>{
        var db = con.db("newbatch");
        db.collection("student").remove({ _id : mongodb.ObjectId(id) }, (err, result)=>{
            //console.log(result);
            res.redirect("/student");
        });
    });
  
});


routes.get("/edit/:id", (req, res)=>{
    var id = req.params.id; // 4258cer2785fge22cge
    // OjbectId(4258cer2785fge22cge)
    MongoClient.connect(url, (err, con)=>{
        var db = con.db("newbatch");
        db.collection("student").find({ _id : mongodb.ObjectId(id)}).toArray((err, result)=>{
            var pageData = { title: "Student", pagename: "student/edit", student : result[0] };
            res.render("layout", pageData);
        });
    });

    
});

routes.post("/edit", (req, res)=>{
    
    var obj = req.body;
    var id = req.body.id;
    /*
    {
        id : ,
        name : ,
        age : ,
        city : 
    }


    */
   delete obj.id;
/*
 {
   
     name : ,
     age : ,
     city :
 }


 */

    MongoClient.connect(url, (err, con)=>{
        var db = con.db("newbatch");
        db.collection("student").update({ _id : mongodb.ObjectId(id)}, { $set : obj }, (err, result)=>{
            res.redirect("/student");
        });
    });
});





routes.post("/", (req, res)=>{

    console.log(req.body);
    MongoClient.connect(url, (err, con)=>{
        var db = con.db("newbatch");
        db.collection("student").insert(req.body, (err, result)=>{
            //console.log(result);
            res.redirect("/student");
        });
        
    });
/*
    res.send()
    res.render()
    res.sendFile()
    res.redirect()


*/


});



routes.get("/", (req, res) => {
    
    MongoClient.connect(url, (err, con) => { // connect to DB with URL
        if (err) {
            console.log("database error", err);
            return;
        }
        /*  
            use newbtach
            db.student.find()

        */
        var db = con.db("newbatch"); // use or select DB
        db.collection("student").find().toArray((err, result) => { // db.coll.find(select * from).toArray()
            if(err){
                console.log("table error",err);
                return;
            }
            var pageData = { title: "Student", pagename: "student/index", student: result };
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

    [
        {
            name : ,
            age : ,
            city : ,
            salary : 5000
        },
        {
            name : ,
            age : ,
            city : ,
            salary : 2000
        },
        {
            name : ,
            age : ,
            city : ,
            salary : 3000
        },
    ]




    db.collection("colname").update({ city : "indore" }, { $set : { salary : 10000 }}, (err, result)=>{

    })






*/
