var express = require("express");
var routes = express.Router();

routes.use("/", require("../controller/admin/login"));

module.exports = routes;