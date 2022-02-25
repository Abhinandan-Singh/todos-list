import React from 'react';
import { TodoItem } from './TodoItem';

export const Todos = (props) => {
  const todoStyle = {
    minHeight: "100vh",
    margin: "10px auto"
  }
  return (
    <div className='container' style={todoStyle}>
        <h3 className='text-center my-3'>Todos List</h3>
        {
          (props.todo.length===0)?"No todos to show":
            props.todo.map((todo)=>{
                return (<><TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/><hr/></>)
            })
        }

    </div>
  )
}
