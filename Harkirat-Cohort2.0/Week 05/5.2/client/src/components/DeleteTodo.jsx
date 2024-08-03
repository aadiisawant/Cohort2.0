import React from 'react'

async function DeleteTodo(id) {
    try {
        const response = await fetch(`http://localhost:3000/todos/delete/${id}`, {
          method: "DELETE"
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }else{
        // fetchTodos()
        alert(`Todo with id:${id} is deleted.`)
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
//   return (
//     <div>
      
//     </div>
//   )
}

export default DeleteTodo
