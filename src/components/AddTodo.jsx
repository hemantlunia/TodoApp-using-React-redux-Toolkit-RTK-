import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
function AddTodo() {
    const [input,setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandle=(e)=>{
        e.preventDefault()
        console.log("grgrgr");
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <>
    <form onSubmit={addTodoHandle} className='space-x-3 mt-12 flex justify-start'>
        <input 
        type="text" 
        className='bg-[black] rounded border border-[yellow] focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
        placeholder='Write Here.....'
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
        <button
        type='submit'
        className='text-white bg-[orange] border-0 py-2 px-6 focus:outline-none hovor:bg-indigo-600 rounded text-lg'
        >
            Add Todo
        </button>
    </form>
      
    </>
  )
}

export default AddTodo
