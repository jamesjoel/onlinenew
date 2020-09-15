var express = require("express");
var app = express();
var bodyParser = require("body-parser");


var cookieParser = require("cookie-parser");
var session = require("express-session");


app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));
app.use(bodyParser());


app.use(cookieParser());
app.use(session({ secret : "the stepping stone" }));



app.use(require("./config/routes"));




app.listen(3000, ()=>{
    console.log("server running");
})
console.log("hello");