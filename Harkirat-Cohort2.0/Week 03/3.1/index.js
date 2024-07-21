const express = require('express');
const { userverify } = require('./middlewares/userverify');

//port
const PORT = 3000;
const app = express();

app.get('/hello', userverify, (req,res)=>{
    res.send('The Credentials are verified... You can proceed.')
})

app.listen(PORT, ()=> console.log(`Server started... ${PORT}`))
