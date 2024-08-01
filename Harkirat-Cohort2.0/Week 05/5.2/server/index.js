const express = require('express');
const todoRouter = require('./routes/todo')
const cors = require('cors')

const app = express();

app.use(express.json())
app.use(cors())
//routes
app.use('/todos', todoRouter);

app.get('/hello', (req,res)=>{
res.send("Hello EveryOne!!")
})
app.listen(3000, () => console.log("Server started"))