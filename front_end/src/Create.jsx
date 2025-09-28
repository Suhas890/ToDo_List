import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function Create() {
    const [task, setTask] = useState()
    const handleAdd = () =>{
        axios.post('http://localhost:3001/add',{task:task}).then(result => {location.reload()}).catch(err => console.log(err))
    }
  return (
    <div className="todo-input">
      <input type="text" name="" id="" className="todo-textbox" placeholder='Enter Task' onChange={(e) => setTask(e.target.value)}
      onKeyDown={(e) => {
            if (e.key === "Enter") handleAdd(); }}
        />
      <button type="submit" className="todo-button" onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create
