import React, { useState} from 'react'
export default function Todo (props){
    let { id, completed, title } = props

   const  removeClickHandler = (id) =>{
         props.onRemove(id)
    }

    const editClickHandler = (id) => {
        props.onEdit(id)
    }


        return (
            // 'completed' class for completed todos
            <div className={`todo ${completed ? 'crossed' : ''}`} style={{ display: 'flex' }}>
                <li className="todo-item">{title}</li>

                <button className="check-btn" onClick={() => editClickHandler(id)}>
                    <i className="fas fa-check" aria-hidden="true"></i>
                </button>

                <button className="trash-btn" onClick={() => removeClickHandler(id)}>
                    <i className="fas fa-trash" aria-hidden="true"></i>
                </button>
            </div>
        )
  
}