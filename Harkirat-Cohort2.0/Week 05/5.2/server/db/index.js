const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/todosDB').then(()=> console.log("Mongodb connected..."))

const Todos = mongoose.Schema({
    id : {
        type: Number,
        require: true,
    },
    title : {
        type: String,
        require: true,
    },
    description:{
        type: String,
        require: true,
    },
    completed:{
        type: Boolean,
    }
})

const Todo = mongoose.model('todo',Todos);
module.exports = {
    Todo
}