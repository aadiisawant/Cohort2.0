const zod  = require('zod')

const createTodo = zod.object({
    title: zod.string().min(2),
    description: zod.string().min(2),
})

module.exports = {
    createTodo
}