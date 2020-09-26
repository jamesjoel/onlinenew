const { request } = require("express");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

app.set('view engine', "ejs");
app.use(express.static(__dirname+"/assets"));

app.use(bodyParser());

var recordPerPage = 20;
var totalRecord = 0;

MongoClient.connect(url, (err, con)=>{
    var db = con.db("newbatch");
    db.collection("country").count((err, result)=>{
        // console.log(result);
        totalRecord = result;
    })
});


app.get("/", (req, res)=>{
    MongoClient.connect(url, (err, con)=>{
        var db = con.db("newbatch");
        db.collection("country").find({}).skip(0).limit(recordPerPage).toArray((err, result)=>{
            //console.log("--------------");
            var pagedata = { result : result, totalRecord : totalRecord, recordPerPage : recordPerPage, currentPage : 1 };
            res.render("index", pagedata);
        });
    })

});
app.get("/:page", (req, res)=>{
    // console.log(req.params);
    var page = req.params.page;
    var skiprec = (page-1)*recordPerPage;

    MongoClient.connect(url, (err, con)=>{
        var db = con.db("newbatch");
        db.collection("country").find({}).skip(skiprec).limit(recordPerPage).toArray((err, result)=>{
            //console.log("--------------");
            var pagedata = { result : result, totalRecord : totalRecord, recordPerPage : recordPerPage, currentPage : page };
            res.render("index", pagedata);
        });
    });
});






app.listen(3000, ()=>{
    console.log("server running");
})



/*
    var recordPerPage = 50;


    page 1 ============ (1-1)*50   ========== 1 ----------- 50
    page 2 ============ (2-1)*50   ========== 51 ----------- 100
    page 3 ============ (3-1)*50    ========== 101 ----------- 150
    page 4 ============ (4-1)*50  ========== 151 ----------- 200

    

    db.collection().find().skip(100).limit(50)






    x = 10;




    3 ==========(3-1 * x)============== 21 ---- 30      ====  skip(20).limit(x)
    4 ======================== 31 ---- 40      ====  skip(30).limit(x)
    5 ===============+======== 41 ---- 50      ====  skip(40).limit(x)


    7 ============(7-1 * x) ============================   61-------70  === skip(60).limit(10)




*/