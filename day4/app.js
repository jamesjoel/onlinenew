var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname+"/assets"));

app.get("/", function(req, res){
    res.render("home");
});




app.listen(3000, function(){
    console.log("server running");
});

/*
    app.listen() -------- create server
    app.get() -------- create route
    app.set() -------- settion applicaton invoirnment
    app.use() -------------- all before any .get() function



*/