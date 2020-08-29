var express = require("express");
var app = express();

/*
    template engine / templating

*/

app.set("view engine", 'ejs');
/*
    when we use any template engine in Express 
    then we have to store all view files in "views" folder

*/


app.get("/", function(req, res){
    var a = "rohit"; 
   // res.sendFile(__dirname+"/home.html");
    var obj = { name : a, age : 25, city : "indore" };


    res.render("home", obj);

});

app.get("/about", function(req, res){
    var color = ["red", "green", "blue"];
    var user = [
        {
            name : "rohit",
            age : 25,
            city : "indore"
        },
        {
            name : "james",
            age : 22,
            city : "ujjain"
        },
        {
            name : "nidhi",
            age : 20,
            city : "mumbai"
        },
        {
            name : "nitin",
            age : 25,
            city : "indore"
        }
    ]



    var obj = { color : color, user : user };
    res.render("about", obj);
});







app.listen(3000, function(){
    console.log('server running');
});



/*
    res.send() ------------------------ only send data

    res.sendFile() --------------- only send HTML file

    res.render() -------------------- send data and file both

    res.redirect() ----------------- redirect to another url/route





*/