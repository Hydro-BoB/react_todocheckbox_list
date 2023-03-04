import React from 'react'
import Todo from './Todo'

export default function TodoList({todoss}) {
  return (
    todoss.map ( todo => { 
                            return < Todo key={todo.id} todo={todo}  /> 
                            }
                )
    //array.map (loopthrough array) => (return single function)
  )
}
