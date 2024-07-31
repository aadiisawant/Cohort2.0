import React, { useState } from 'react'

function Todo() {
  const [globalId, setGlobalId] = useState(1)
  const [todos, setTodos] = useState([])
  const [isEdit, setIsEdit] = useState(false)
  const [currentTodo, setCurrentTodo] = useState({})
  const handleAddTodo = (e)=>{
      e.preventDefault();
      const title = e.target.title.value;
      const description = e.target.description.value;
      const newTodo = {
        id: globalId,
        title : title,
        description : description,
        completed: false,
      }
      if(!todos){
        setTodos([newTodo]);
      }else{
        setTodos([...todos, newTodo]);
      }
      setGlobalId((globalId)=> globalId+1);
      e.target.reset();
  }
    
  const handleStatus = (id)=>{
    const updatedTodos = todos.map(todo => {
      if(todo.id === id){
      return  { ...todo, completed: !todo.completed}
      }
    return todo;
    })
    setTodos(updatedTodos)
  }

  const handleDelete = (id)=>{
    const updatedTodos = todos.filter(todo => todo.id !==id)
    setTodos(updatedTodos)
  }
  const handleEdit = (todo)=>{
    setIsEdit(true);
    setCurrentTodo(todo)
  }
  const handleUpdate = (e)=>{
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const updateT = todos.map(todo => {
      if(todo.id === currentTodo.id){
        return { ...todo, title: title, description: description}
      }
      return todo;
    })
    setTodos(updateT)
    setIsEdit(false)
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input type='text' name="title" placeholder='Title' required/><br /><br />
        <input type='text' name='description' placeholder='description' required />
        <br /><br />
        <button >Add Todo</button>
      </form>
      
      <table>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
          <th>Actions</th>
      {todos.length>0 && todos.map(todo => {
        console.log(todo);
        return <tr key={todo.title}>
                  <td>{todo.id}</td>
                  <td>{todo.title}</td>
                  <td>{todo.description}</td>
                  <td><button onClick={() => handleStatus(todo.id)}>{todo.completed ? 'Done!': 'Mark as done'}</button></td>
                  <td><button onClick={()=> handleEdit(todo)}>Update</button><button onClick={() => handleDelete(todo.id)}>Delete</button></td>
               </tr> 
        })
      }
      </table><br /><br />
      { isEdit && (
        <form onSubmit={handleUpdate}>
          <input type='text' defaultValue={currentTodo.title} name='title' placeholder='title' required></input><br /><br />
          <input type='text' defaultValue={currentTodo.description} name='description' placeholder='description' required></input><br /><br />
          <button type='submit'>update todo</button>
        </form>
      )}
    </div>
  )
}

export default Todo
