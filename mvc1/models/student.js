var database = require("../config/database");

module.exports.select = function(cb){
    database((err, con) => {

        var db = con.db("newbatch");
        db.collection("student").find().toArray(cb);

    });

}

module.exports.save = function(obj, cb){
    database((err, con) => {

        var db = con.db("newbatch");
        db.collection("student").insert(obj, cb);

    });
}
/*
var Student = require("student");

Student.select((err, result)=>{
});

Student.save(req.body, (err,result)=>{
    
})





*/