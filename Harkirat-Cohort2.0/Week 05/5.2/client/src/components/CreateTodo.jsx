import React from 'react'
import './CreateTodo.css'
function CreateTodo({setTodos}) {
    const handleCreateTodo = async (e)=>{
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const response = await fetch('http://localhost:3000/todos/addtodo', {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description,
                }),
                headers:{
                    "Content-type" : "application/json"
                }
        })
        const data = await response.json()
        if(!response.ok){
            alert(data.msg)
        }else{
            setTodos(prevTodos => [...prevTodos, data])
            alert('Todo Added...')
        }
        e.target.reset();
    }
    
  return (
    <div className='form-container'>
        <form onSubmit={handleCreateTodo}>
            <input 
            name='title' 
            placeholder='Title'
            /><br></br><br></br>
            <input 
            name='description' 
            placeholder='Description'
            /><br></br><br></br>
            <button type='submit'>Add Todo</button>
        </form>
    </div>
  )
}

export default CreateTodo
