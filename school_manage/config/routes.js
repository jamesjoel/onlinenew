var express = require("express");
var routes = express.Router();


routes.use("/api/login", require("../controller/login"));
routes.use("/api/signup", require("../controller/signup"));


module.exports = routes;