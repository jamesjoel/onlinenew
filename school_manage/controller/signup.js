var express = require("express");
var routes = express.Router();
var sha1 = require("sha1");

var User = require("../models/user");



routes.post("/", (req, res)=>{
    
    req.body.password = sha1(req.body.password);
    User.insert(req.body, function(err, result){
       res.send(result);
    });
})

module.exports = routes;