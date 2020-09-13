var express = require("express");
var routes = express.Router();

routes.use("/student", require("../controllers/student"));

module.exports = routes;