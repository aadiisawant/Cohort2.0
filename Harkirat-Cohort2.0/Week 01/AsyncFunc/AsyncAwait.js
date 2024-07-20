function promiseCheck(){
    let p = new Promise(function(resolve){
    resolve("Hello!")
    })
    return p;
}
async function main(){
let value =  await promiseCheck()
console.log(value);
// value.then(data => console.log(data))
}

main()