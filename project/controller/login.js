var express = require("express");
var routes = express.Router();
var User = require("../models/user");
var sha1 = require("sha1");

routes.get("/", (req, res) => {
    var pagedata = { title: "Login", pagename: "login/index", message : req.flash("msg") };
    res.render("layout", pagedata);
});

routes.post("/", (req, res)=>{
    // console.log(req.body);
    var u = req.body.username;
    var p = req.body.password;
    User.find({ username : u }, function(err, result){
        // console.log(result);
        if(result.length == 1) // if this condition is true then username is correct
        {
            var data = result[0];
            if(data.password == sha1(p))
            {
                console.log("==========================");
            }
            else
            {
                req.flash("msg", "This Password is Incorrect");
                res.redirect("/login");
            }

        }
        else // then username is incorrect
        {
            req.flash("msg", "This Username and Password is Incorrect");
            // req.flash("key", "value");
            res.redirect("/login");

        }
    })


})

module.exports = routes;