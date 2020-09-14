var express = require("express");
var routes = express.Router();

routes.get("/", (req, res) => {
    var pagedata = { title: "Admin Login", pagename: "admin/index" };
    res.render("adminlayout", pagedata);
});
routes.post("/", (req, res)=>{
    var u = req.body.username;
    var p = req.body.password;
})

module.exports = routes;