var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser());

app.use(require("./config/routes"));

app.listen(3000, () => {
    console.log("server running");
});