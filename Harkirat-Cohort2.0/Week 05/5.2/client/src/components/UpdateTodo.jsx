import React from 'react'

function UpdateTodo({currentTodo}) {

  const handleUpdate = async(e)=>{
    e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const response = await fetch(`http://localhost:3000/todos/update/${currentTodo.id}`, {
                method: "PUT",
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
            alert('Updated...')
        }
  }  

  return (
    <div className="form-container">
        <form onSubmit={handleUpdate}>
          <input
          name='title'
          placeholder='Title'
          defaultValue={currentTodo.title} 
          required
          />
          <input
          name='description'
          placeholder='description'
          defaultValue={currentTodo.description} 
          required
          />
          <button type='submit'>update Form</button>
        </form>
        </div>
  )
}

export default UpdateTodo
