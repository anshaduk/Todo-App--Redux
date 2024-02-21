import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { todoUpdated } from '../Redux/store/features/todo/todoSlice'

const UpdateTodoForm = () => {
  const todoToUpdate=useSelector(state=>state.todos.todoUpdate)
  const [update,setUpdate]=useState(todoToUpdate.name);
  const dispatch=useDispatch();
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(/^\s*$/.test(update)){
      alert('Enter a todo')
      setUpdate("")
      return
    }else{
      dispatch(todoUpdated({
        id:todoToUpdate.id,
        name:update,
      }))
    }
  }
  
  

  return (
    <div>
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-5 flex gap-2">
          <input
          value={update}
          onChange={(e)=>setUpdate(e.target.value)}
            type="text"
            id="username-success"
            className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
            placeholder="Update Todo"
          />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  )
}

export default UpdateTodoForm