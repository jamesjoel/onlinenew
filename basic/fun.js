function demo(a, b){   // crateing a fun   --- (x ---------- parameter)

    // var a = x;
    // var b = y;
    var c = a*b;
    var d = c/2;

    return d; // return type fun
    //console.log(d);
}
/*
        1. simple function 
            function demo(){


            }

        2. parameterized fun

            function demo(a, b){


            }

        3. return type fun

                function demo(a, b){


                    return ....
                }




demo()

*/

var ans = demo(200, 20); // calling a fun
console.log(ans);

var ans2 = demo(50, 25);
console.log(ans2);

demo(10, 30);

demo(3, 5);




function test()
{

    var a = 5;
    var b = 5;
    var c = a+b;
    return c;

}

var ans = test();
