
// using set interval func
let counter =1;
function counterOne(){
    console.log(counter);
    counter++;
}
// let setIntervalId = setInterval(counterOne,1000);
// setTimeout(()=>clearInterval(setIntervalId),5000)

//without set interval
function counterTwo(start,end){
    let counter = start;
    console.log(counter);
    counter++;
    if(start<=end){
        setTimeout(()=>{
            counterTwo(counter,end)
        }, 1000)
    }
}   
counterTwo(1,20)