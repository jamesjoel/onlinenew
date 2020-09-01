var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));  // ------- css, js(client), image, audio, video, etc

app.get("/", (req, res)=>{
    var obj = { pagename : "home/index"};
    res.render("layout", obj);
})
app.get("/about", (req, res) => {
    var obj = { pagename: "about/index" };
    res.render("layout", obj);
})

app.get("/login", (req, res) => {
    var obj = { pagename: "login/index" };
    res.render("layout", obj);
})





app.listen(3000, ()=>{
    console.log("server running");
});

// ES5   --- ECMA Script