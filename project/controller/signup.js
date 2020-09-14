var express = require("express");
var routes = express.Router();

routes.get("/", (req, res)=>{
    var pagedata = { title : "Signup", pagename : "signup/index"};
    res.render("layout", pagedata);
});

module.exports = routes;