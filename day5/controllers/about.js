var express = require('express');
var routes = express.Router();

routes.get("/", (req, res) => {
    var pagedata = { title: "About Page", pagename: "about/index" };
    res.render("layout", pagedata);

});

module.exports = routes;