const express = require('express');
const z = require('zod')
const { userverify } = require('./middlewares/userverify');

//port
const PORT = 3000;
const app = express();

//validation with zod
const NumArr = z.array(z.number())

app.use(express.json())

app.get('/hello', userverify, (req,res)=>{
    res.send('The Credentials are verified... You can proceed.')
})

app.post("/checkNum", (req,res)=>{
    const numArray = req.body.arr
    const response = NumArr.safeParse(numArray)
    if(!response.success){
        res.status(411).json({
            msg:"Input is Invalid"
        })
    }else{
        res.send({
            response
        })
    }
})


app.listen(PORT, ()=> console.log(`Server started... ${PORT}`))
