const fs = require('fs');

function adityaReadfile(){
    let p = new Promise(function(resolve, reject){
    fs.readFile('text.txt', 'utf-8',(err, data)=>{
        resolve(data);
    })}
    )
    return p;
}
// async function main(){
//     let value1 = await adityaReadfile();
//     console.log(value1)
// }
// main()
adityaReadfile().then((msg)=>console.log(msg))
function logData(data){
    console.log(data);
}
// adityaReadfile().then(data => console.log(data))

function promiceCheck(){
    let p = new Promise(function(resolve){
    resolve("Hello!")
    })
    return p;
}
// let value = promiceCheck()
// value.then(data => console.log(data))