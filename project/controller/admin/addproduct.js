var express = require("express");
var routes = express.Router();
var Product = require("../../models/product");


routes.get("/", (req, res) => {
    var pagedata = { title: "Admin Add Product", pagename: "admin/addproduct" };
    res.render("adminlayout", pagedata);
});

routes.post("/", (req, res)=>{
    req.body.price = parseInt(req.body.price);
    req.body.discount = parseInt(req.body.discount);


    Product.insert(req.body, function(err, result){
        res.redirect("/admin/addproduct");
    });
})


module.exports = routes;