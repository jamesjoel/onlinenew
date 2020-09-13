var express = require("express");
var app = express();

app.use(require("./config/routes"));

app.listen(3000, ()=>{
    console.log("server running");
});