import React, { useState, useRef } from 'react';
import TodoList from './TodoList';
import uuidv4 from 'uuid/v4';

function App() {
  const [todos, setTodos] = useState([]) //{id:1 , name:'Todo 1', complete:false}
  
  const todoNameRef= useRef()

 function handleAddTodo(e) {
   const name = todoNameRef.current.value
   if(name==='') return
   setTodos(prevTodos => {
    return [...prevTodos , { id: uuidv4(), name: name , complete:false }]
  })
   //console.log(name)        
   todoNameRef.current.value=null //show nothing in input rather than backspacing all the letters (better quality of life change)
 }
 
 
  return (
    <>
      <TodoList todoss={todos}/>
      <input ref={todoNameRef} type={"text"}/>
      <button onClick={handleAddTodo}>add to list</button>
      <button>delete</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;
