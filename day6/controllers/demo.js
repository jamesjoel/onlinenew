var express = require("express");
var routes = express.Router();


routes.get("/", (req, res)=>{
    req.session.name = "rohit";
    req.session.age = 25;
    req.session.city = "indore";
    console.log(req.session);
    res.redirect("/");
});

module.exports = routes;
