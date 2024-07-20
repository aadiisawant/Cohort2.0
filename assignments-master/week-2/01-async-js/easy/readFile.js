const fs = require('fs');

//function call
function readData(){
    let dataFromFile ="";
    fs.readFile('Read-file.txt', "utf-8",(err,data)=>{
        dataFromFile = data;
        console.log(dataFromFile);
    })
}
// readData();

//promise
function dataFromPromise(){
    let data = new Promise((resolve, reject) => {
        fs.readFile('Read-file.txt', "utf-8",(err,data)=>{
            resolve(data)
        })
    })
    return data;
}

console.log("before");
dataFromPromise().then((data)=> console.log(data))
console.log("After");



