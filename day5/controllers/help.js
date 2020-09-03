var express = require("express");
var routes = express.Router();

routes.get("/", (req, res)=>{
    var pagedata = { title : "Help", pagename : "help/index"};
    res.render("layout", pagedata);
});

routes.get("/info", (req, res) => {
    var pagedata = { title: "Info", pagename: "help/info" };
    res.render("layout", pagedata);
});

module.exports = routes;