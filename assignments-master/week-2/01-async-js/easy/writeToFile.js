const fs = require('fs');

//write
function writeToFile(){
fs.writeFile('write.txt',"Hello there!", (err)=>{
if(err){
    console.log(err);
}
console.log("content wrote");
})
}

//append
function appendToFile(){
fs.appendFile('write.txt',"\nHello there! again?", (err)=>{
    if(err){
        console.log(err);
    }
    console.log("content appended");
})
}
appendToFile()