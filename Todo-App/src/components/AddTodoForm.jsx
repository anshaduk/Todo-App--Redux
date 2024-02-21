import React, { useState } from "react";
import { todoAdded } from "../Redux/store/features/todo/todoSlice";
import { nanoid } from "@reduxjs/toolkit";
import {  useDispatch } from "react-redux";

const AddTodoForm = () => {
  const[input,setInput]=useState('')
  const dispatch=useDispatch();
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(/^\s*$/.test(input)){
      alert("Enter a todo")
      setInput("")
      return
    }else{
      dispatch(todoAdded({
        id:nanoid(),
        name:input
      }))
      setInput("")
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-5 flex gap-2">
          <input
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            type="text"
            id="username-success"
            className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
            placeholder="Add Todo"
          />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodoForm;
