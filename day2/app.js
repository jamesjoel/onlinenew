var express = require("express");
var app = express();

/*
how to load html page in perticular url/route


localhost:3000/about
localhost:3000/contact
localhost:3000   ---- home
*/

// console.log(__dirname);


app.get("/about", function(req, res){  // locahost:3000/about
    // res.send("about");
    res.sendFile(__dirname+"/about.html");
});
app.get("/contact", function (req, res) { // locahost:3000/contact
    
    // res.send("contact");
    res.sendFile(__dirname +"/contact.html")
});
app.get("/", function (req, res) { // locahost:3000
    // res.send("home");
    res.sendFile(__dirname +"/home.html");
});






app.listen(3000, function(){
    console.log("server running");
}); // vartual server/host create ----- localhost:3000