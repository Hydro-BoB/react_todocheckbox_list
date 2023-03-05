import React, { useEffect, useState, useRef } from 'react';
import TodoList from './TodoList';
//import uuidv4 from 'uuid/v4';

// function uid() {
//   for(int i)
// }
const LOCAL_STORAGE_KEY = 'todoApp. todos'


function App() {
  const [todos, setTodos] = useState([]) //{id:1 , name:'Todo 1', complete:false}
  
  const todoNameRef= useRef()

  //storing everything  , parse is to change data type
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem
    (LOCAL_STORAGE_KEY) )
    if (storedTodos) setTodos(storedTodos)
  },[])

    useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos) )
    }, [todos])


 function handleAddTodo(e) {
   const name = todoNameRef.current.value
   if(name==='') return
   setTodos(prevTodos => {
    return [...prevTodos , { id: Math.random()*100 , name: name , complete:false } ]
    //                          uuidv4()
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
