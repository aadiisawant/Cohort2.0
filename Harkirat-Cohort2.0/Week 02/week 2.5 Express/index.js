const e = require('express');
const express = require('express');


//app
const app = express();
app.use(express.json())

let users = [{
    name : "Aditya",
    kidneys:[
        {
        leftKidney : false
        },
        {
        rightKideny : false
        }
    ]
}]

app.get("/", (req,res)=>{
    const adityaKidneys = users[0].kidneys;
    const numOfKidneys =adityaKidneys.length;
    let numOfHealthyKdnys = 2;
    let rightKdny =users[0].kidneys[1].rightKideny;
    let leftKdny =users[0].kidneys[0].leftKidney;
    for(let i=0;i<numOfKidneys;i++){
        
        if(users[0].kidneys[i].hasOwnProperty("rightKideny") && users[0].kidneys[i].rightKideny != true){
            numOfHealthyKdnys -= 1;
            
        }
        if(users[0].kidneys[i].hasOwnProperty("leftKidney") && users[0].kidneys[i].leftKidney != true){
            numOfHealthyKdnys -= 1;
        }
    }
    let numOfUnhealthykdnys = numOfKidneys - numOfHealthyKdnys;
    res.json({
        numOfKidneys,
        numOfHealthyKdnys,
        numOfUnhealthykdnys,
        rightKdny,
        leftKdny
    })
})

app.post("/",(req,res)=>{
    console.log(req.body);
    if(req.body.leftKidney){
    const kidneyCheckL = req.body.leftKidney
    users[0].kidneys[0].leftKidney = kidneyCheckL;
    console.log("leftKidny");
    }else{
        users[0].kidneys[0].leftKidney = req.body.leftKidney;
    }
    if(req.body.rightKideny){
        const kidneyCheckR = req.body.rightKideny
        users[0].kidneys[1].rightKideny = kidneyCheckR;
        console.log("rightKidny");
    }else{
        users[0].kidneys[1].rightKideny = req.body.rightKideny;
    }
    res.json({users})
})

// port 
app.listen(3000, ()=>{console.log("Server started")})