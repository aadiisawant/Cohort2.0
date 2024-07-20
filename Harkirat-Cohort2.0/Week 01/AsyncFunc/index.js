const fs = require('fs'); //filesystem

function readFileFunc(){
 fs.readFile('text.txt', 'utf-8',(err, data)=>{
    console.log(data);
})
}
// readFileFunc()
// console.log("Hi bro");

function cube(n){
    return n*n*n;
}
function square(n){
    return n*n;
}

function somethingOfn(n,fn){
   console.log( fn(n));
}
//passing an announomus function as callback
// somethingOfn(5,(n)=>{
//     return n*n
// });
//function as call back
// somethingOfn(5,cube);

 