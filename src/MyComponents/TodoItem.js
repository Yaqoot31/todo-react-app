import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <>
        <div className="col-md-3">
            <div className="m-1 border border-secondary rounded p-4 todo-item">
                <h4>{todo.title}</h4>
                <p>{todo.desc}</p>
                <button className="btn btn-sm btn-outline-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
           </div>
        </div>
        </>
    )
}
