// ============== Absoulte Path =================

// --------------------------     ./ ===> jaha hu wahi par dhundo
// --------------------------     ../ ===> one time back
// --------------------------     ../../ ===> 2 time back
// --------------------------     ../config/data ===> 2 time back
// --------------------------     ./config/data ===> jaha hu wahi par "config folder" then "data.js"

var x = require('./data');
var y = x();

var abc = require("to-reverse-string");

var z = abc("nitin verma");
console.log(z);

// y.demo();

// npm i