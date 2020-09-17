var express = require("express");
var app = express();
var routes = require("./config/routes");


app.set("view engine", "ejs");


app.use(express.static(__dirname+"/assets"));  // ------- css, js(client), image, audio, video, etc
/*
    app.use() is call auto before any other app.get(), app.post() call


*/
app.use(routes);


app.listen(3000, ()=>{
    console.log("server running");
});

// ES5   --- ECMA Script