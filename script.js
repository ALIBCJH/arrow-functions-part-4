const addNumbers = (a,b) => a +b;
let a = 10;
let b = 24;
console.log(a + b);

//How to use a callback function
/* Functions can also be passed as arguments to other functions, 
this ones are known as call back functions */

function multiplyByTwo(n, callback) {
var result = n * 2;
callback(result);
}
function logResults(result){
    console.log(result);
}

multiplyByTwo( 5, logResults);