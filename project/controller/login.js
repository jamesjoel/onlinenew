var express = require("express");
var routes = express.Router();

routes.get("/", (req, res) => {
    var pagedata = { title: "Login", pagename: "login/index" };
    res.render("layout", pagedata);
});

module.exports = routes;