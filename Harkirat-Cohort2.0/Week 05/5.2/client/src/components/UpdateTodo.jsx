import React from 'react'
import './UpdateTodo.css'

function UpdateTodo({currentTodo , setTodos, setIsEdit}) {

  const handleUpdate = async(e)=>{
    e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const response = await fetch(`http://localhost:3000/todos/update/${currentTodo.id}`, {
                method: "PUT",
                body: JSON.stringify({
                    title: title,
                    description: description,
                    // completed: completed
                }),
                headers:{
                    "Content-type" : "application/json"
                }
        })
        const data = await response.json()
        if(!response.ok){
            alert(data.msg)
        }else{
            setTodos(prevTodos => prevTodos.map(todo => (todo.id === currentTodo.id ? data : todo)))
            setIsEdit(false)
            alert('Updated...')
        }
  }  

  return (
    <div className="modal">
      <div className='modal-content'>
        <form onSubmit={handleUpdate}>
          <label htmlFor="">Title</label><br></br>
          <input
          name='title'
          placeholder='Title'
          defaultValue={currentTodo.title} 
          required
          /> <br></br>
          <label htmlFor="">Description</label><br></br>
          <input
          name='description'
          placeholder='description'
          defaultValue={currentTodo.description} 
          required
          /><br></br>
          <button type='submit'>update Todo</button>
          <button type='button' onClick={() => setIsEdit(false)}>Cancel</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateTodo
