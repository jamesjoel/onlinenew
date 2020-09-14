var express = require("express");
var routes = express.Router();

routes.use("/student", require("../controllers/student"));
routes.use("/product", require("../controllers/product"));

routes.use("/demo", require("../controllers/demo"));



module.exports = routes;
