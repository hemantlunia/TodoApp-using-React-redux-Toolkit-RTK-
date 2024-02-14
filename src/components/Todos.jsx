import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
function Todos() {
    const todos = useSelector(state=>state.todos)
    const dispatch = useDispatch()


  return (
    <>
      <div className='flex justify-start text-white underline'>Your Todos Show below :-</div>
      <ul className='list-none'>
        {todos.map((todo)=>(
            <li
            className='w-full mt-4 flex justify-between items-center bg-[purple] px-4 py-2 rounded'
            key={todo.id}
            >
               <div className='text-white w-full h-auto overflow-y-auto'><p className='whitespace-normal break-words text-left'>{todo.text}</p> </div>
                <button
                onClick={()=>dispatch(removeTodo(todo.id))}
                className='flex justify-end  text-white bg-red-500 border-0 py-1 px-4  focus:outline-none hovor:bg-red-600 rounded text-md'
                >Delete</button>
                
            </li>
        ))}
      </ul>
    </>
  )
}

export default Todos
