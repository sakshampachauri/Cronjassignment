import React, { useEffect, useState } from 'react'
import Todo from './component/Todo';
import { getAllTodo, insertTodo, updateTodo, deleteTodo, searchTodo } from './utils/HandleApi';
function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("")
  const [isUpDating, setIsUpdating] = useState(false)
  const [todoId, setTodoId] = useState("")
  useEffect(() => {
    getAllTodo(setTodo)
  }, [])
  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setTodoId(_id)
  }
  const handleSearch = (e) => {
    e.preventDefault();
    searchTodo(e.target.value, setTodo)
  }

  return (
    <div className="App">
      <div className='text-center'><h4>Assignment Of Cronj</h4></div>
      <div className='container'>
        <input type="text" className='search-box' placeholder='enter value to be searched' onChange={handleSearch} />
        <input type="text" className='todo-box' value={text} onChange={(e) => {
          setText(e.target.value)
        }} />
        <button className='btn btn-primary mx-2 my-2' onClick={isUpDating ? () => updateTodo(text, setText, setTodo, setIsUpdating, todoId) : () => insertTodo(text, setText, setTodo)}>{isUpDating ? "update" : "add"}</button>
      </div>
      <div>
        <p>Total no. of task {todo.length}</p>
        <p>No. of Completed task {todo.filter((ele) => ele.complete === true).length}</p>
        <p>No. of Non-Completed task {todo.filter((ele) => ele.complete !== true).length}</p>

      </div>


      <div className='todo-values'>
        {todo.length > 0 ?
          todo.map((ele) => <Todo text={ele.text} key={ele._id}
            check={ele.complete}
            updateMode={() => updateMode(ele._id, ele.text)}
            deleteTodo={() => deleteTodo(ele._id, setTodo)}
            todoId={ele._id}
            setTodo={setTodo}
          />
          ) : <p>Nothing Found</p>
        }
      </div>

    </div>
  );
}

export default App;
