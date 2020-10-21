var express = require("express");
var routes = express.Router();

var Product = require("../models/product");
var mongo = require("mongodb");


routes.get("/", (req, res)=>{
    // console.log(req.cookies.cart);
    var arr = req.cookies.cart.split("#");
    
    var objectArr = [];
    arr.forEach(function(x){
        // console.log(x);
        // var y = mongo.ObjectId(x);
        var obj = { _id : mongo.ObjectId(x) };
        objectArr.push(obj);
    });

    //console.log(objectArr);
    var where = { $or: objectArr };
    // console.log(where);
    // return;
    Product.find(where, function(err, result){
        var pagedata = {title : "Your Cart", pagename : "mycart", "result":result};
        res.render("layout", pagedata);
        // console.log(result);
    });
});

routes.get("/remove/:id", (req, res)=>{
    // console.log("+++++++++", req.params.id);
    // sdfgsdfgsdfg#dfgsdgergsdf#dfsgsdteg5rgsdfg
    var arr = req.cookies.cart.split("#");
    // console.log(arr);
    var removeid = req.params.id;
    var n = arr.indexOf(removeid);
    arr.splice(n, 1);
    var str = arr.join("#");
    // console.log(str);
    res.cookie("cart", str, { expire: 360000 + Date.now() });
    res.redirect("/cart");
});

/*
    var arr = ['red', 'green', 'blue', 'yellow'];
    var x = 'blue';
    var n = arr.indexOf(x);
    arr.splice(n, 1);




*/




routes.get("/add/:id", (req, res) => {
    console.log(req.params);
    var id = req.params.id; // 55454872DFGD
    /*
        First Time 
            245Dfv21545121dfg
        Second Time
            var oldid = 245Dfv21545121dfg;
            var newids = 55454872DFGD#245Dfv21545121dfg;

    */
    console.log(req.cookies.cart);
    if(req.cookies.cart)
    {
        var oldid = req.cookies.cart;
        var newids = id+"#"+oldid;
        res.cookie("cart", newids, { expire : 360000+Date.now()});
    }
    else
    {
        res.cookie("cart", id, { expire : 360000+Date.now()});

    }

    res.redirect("/");
    
});

module.exports = routes;




/*

    db.collection("product").find({}).toArray(cb);

    
    var arr = ['sdfg sdfgdfg', 'ertergertgert','erterdgertetert'];


    
    db.collection("product").find({ _id : ObjectId("1452sdfg21545")}).toArray(cb);



    db.collection("student").find({ $or : [{ age : 25}, { city : 'indore'}]})


    db.collection("col").find({ $or : [ {condition}, {condition} ]})

    db.collection("product").find({ $or : [ {_id : ObjectId('sdfgsdfg)}, { _id : ObjectId('sdfgsdfgsdfg')}, { _id : ObjectId('sdfgsdfgsdfg)} ]})












*/