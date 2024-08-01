const {Router} = require('express');
const { Todo } = require('../db');
const { createTodo } = require('../types/types');

const router = Router();

router.get('/gettodos', async (req, res) => {
    try {
      const data = await Todo.find();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch todos' });
    }
});
  
router.get('/gettodo/:id', async(req,res)=>{
    try{
        const id = req.params.id;
        const todo = await Todo.findOne({id:id})
        if(!todo){
            res.status(404).json({error: "Todo not found"})
        }else{
            res.status(200).json(todo)
        }
        
    }catch(error) {
        res.status(500).json({ error: 'Failed to fetch todo' });
    }
})

  let globalId = Todo.length;
  
router.post('/addtodo', async (req, res) => {
    try {  
      const todoData = req.body;
      const parsedData = createTodo.safeParse(todoData)
      if(!parsedData.success){
        res.status(411).json({
            msg : "Wrong inputs"
        })
      }else{
      todoData.completed = false;
      todoData.id = globalId++;
      const todo = await Todo.create(todoData);
      res.status(201).json(todo);
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to add todo' });
    }
});

router.put('/update/:id', async(req,res)=>{
    const id = req.params.id;
    const updatedData = req.body;
    try {
        const result = await Todo.findOneAndUpdate({id : id}, updatedData, {new: true })
        if(!result){
            res.status(404).json({error: "Todo not found"})
        }else{
            res.status(200).json(result)
        }
      } catch (error) {
        res.status(500).json({ error: 'Failed to Update todo' });
      }
})  

router.delete('/delete/:id', async(req,res)=>{
    const id = req.params.id;
    try {
        const result = await Todo.deleteOne({ id: id });
        if (result.deletedCount === 0) {
          res.status(404).json({ msg: 'Todo not found' });
        } else {
          res.status(200).json({ msg: 'Deleted' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Failed to delete todo' });
      }
})


module.exports = router