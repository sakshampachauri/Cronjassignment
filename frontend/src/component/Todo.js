import React from 'react'
import { checkTodo } from '../utils/HandleApi'

function Todo({ text, check, updateMode, deleteTodo, todoId, setTodo }) {

    const handleChecked = (event) => {
        let complete = event.target.checked
        if (complete === true) {
            checkTodo(todoId, complete, setTodo)
        }
    }

    return (
        <div className='todo-container my-2'>
            <input type="checkbox" className='todo-container-input' checked={check} onChange={(event) => handleChecked(event)} />
            <h4 className='todo-conatiner-text mx-2'>{text}</h4>
            {check ? "" :
                <button className='btn btn-primary mx-2' onClick={updateMode}>edit</button>}
            <button className='btn btn-primary mx-2' onClick={deleteTodo}>delete</button>

        </div>
    )
}

export default Todo