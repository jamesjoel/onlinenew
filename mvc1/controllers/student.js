var Student = require("../models/student");
var express = require("express");
var routes = express.Router();

routes.get("/", (req, res)=>{
    Student.select((err, result)=>{
        console.log(result);
    });
});

module.exports = routes;