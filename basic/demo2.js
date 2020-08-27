var obj = { name : "rohit", age : 25, abc : function(){
            
            return { a : "indore", b : "bhopal", demo : function(){
                    
                    return {
                        first : "vinod",
                        second : "nitin",
                        third : "amit"
                    }                    
                } 
            };

        }
};





var ans = obj.abc();
var ans2=ans.demo();

// console.log(ans2.third);

console.log();




// var console = { log : function(a){
//         console.log(a);
//     }
// }

// console.log(console);






