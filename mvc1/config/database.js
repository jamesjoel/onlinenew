var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

module.exports = function(cb){

    MongoClient.connect(url, cb);
    
}
/*
    MongoClient.connect(url, (err, con)=>{


        
    })




*/