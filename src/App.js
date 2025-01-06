import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import { addTodo, getAllTodo, updateTodo, deleteTodo } from "./utils/HandleApi";
function App() {

const [todo, setTodo] = useState([])
const [text, setText] = useState("")
const [update, setUpdate] = useState(false)
const [todoId, setTodoId] = useState("")

useEffect(() => {
  getAllTodo(setTodo)
},[])

const updateMode = (_id,text) =>
{
  setUpdate(true)
  setText(text)
  setTodoId(_id)
}
  return (
    <div className="App">
      <div className="container">
        <h1>Todo App</h1>
 
        <div className="top">
          <input 
          type="text" 
          placeholder="Enter your task.." 
          required="true"
          value={text}
          onChange={(e) => setText(e.target.value)}
          />

          <div 
          className="add" 
          onClick = { update ? 
          () => updateTodo(todoId ,text, setText, setTodo, setUpdate )
          : () => addTodo(text,setText,setTodo)}>
          {update ? "Update" : "Add"}</div>
        </div>

        <div className="list">

          {todo.map((item) => <Todo 
          key = {item._id} 
          text = {item.text}
          updateMode = {()=> updateMode(item._id,item.text)}
          deleteToDo= {()=> deleteTodo(item._id, setTodo)}/> )}

        </div>


      </div>
    </div>
  );
}

export default App;
