import React, { useState } from 'react'
import Layout from './components/Layout'
import {AiFillDelete} from 'react-icons/ai'

const Flatplan = () => {

  const [todo, setTodo] = useState([])
  const [input, setInput] = useState({
    task:"",
    status:"new",
    size:"1",
    completed:false
  })

  const handleChange = (e) =>{
    const {name, value, type, checked} = e.target
    setInput(prev=>({...prev, [name]:value}))
    
    if(type==="checkbox"){
        let checkval
        checked===true?checkval=true:checkval=false
        setInput(prev=>({...prev, [name]:checkval}))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(input.task.trim()){
        setTodo(todo=>[...todo, input])
        setInput({task:"", size:"1",status:"new",completed:false})
      
    }
  }

  const handleUpdate = (e) => {

  }

  const handleDelete = (id) => {
    const newTodo = todo.filter(item=>item!==id)
    setTodo(newTodo)
  }






  return (
    <Layout>
        <div className="min-h-screen py-10 md:flex md:gap-10 md:px-20">

            <div className="bg-white rounded px-8 py-5 w-full mb-10 md:w-1/4 min-w-fit">
                <h2 className="text-3xl font-bold">Input new</h2>
                <form>
                    <div className="mt-5 w-full">
                        <label className="font-bold text-gray-400">New task</label>
                        <input
                            type="text"
                            name="task"
                            className="w-full border-gray-300 border-2 px-3 py-2 rounded outline-none"
                            placeholder="New task..."
                            onChange={handleChange}
                            value={input.task}
                        />
                    </div>
                    <div className="mt-5 w-full">                    
                        <label className="font-bold text-gray-400">Size</label>
                        <select
                            name="size"
                            className="w-full border-gray-300 border-2 px-3 py-2 rounded outline-none cursor-pointer"
                            onChange={handleChange}
                            value={input.size}
                        >
                            <option value="1/4">1/4</option>
                            <option value="1/2">1/2</option>                            
                            <option value="1">1</option>                            
                            <option value="2">2</option>                            
                        </select>
                    </div>
                    <div className="mt-5 w-full">
                        <label className="font-bold text-gray-400">Status</label>
                        <select
                            className="w-full border-gray-300 border-2 px-3 py-2 rounded outline-none cursor-pointer"
                            name="status"
                            onChange={handleChange}   
                            value={input.status}                     
                        >
                            <option value="new">New</option>
                            <option value="chased">Chased</option>                            
                            <option value="sent">Sent to approval</option>
                            <option value="repeat">Repeat</option>                            
                        </select>
                    </div>
                    <div className="mt-5 w-full">
                        <label className="font-bold text-gray-400">Completed</label>
                        <input
                            type="checkbox"
                            name="completed"
                            className="ml-5 accent-gray-450 cursor-pointer float-right mr-2"
                            checked={input.completed}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mt-5 w-full">
                        <button
                        onClick={handleSubmit}
                            className="bg-green-500 w-full px-3 py-2 rounded text-white hover:bg-green-600"
                        >
                            ADD
                        </button>
                    </div>
                </form>
            </div>



            <div className="px-10 py-5 border rounded w-full md:w-3/4">
                <h2 className="text-3xl font-bold">List of task</h2>
                {todo.map((item, index)=>
                    <div
                        className="rounded border-2 mt-1 bg-white"

                        key={index}
                    >
                        <input
                            className="border-r-2 p-4 w-2/3"
                            type="text"
                            value={item.task}
                            onChange={handleUpdate}
                        />
                        <select
                            className="border-r-2 p-2"
                            onChange={handleUpdate}
                            value={item.size}
                        >
                            <option value="1/4">1/4</option>
                            <option value="1/2">1/2</option>                            
                            <option value="1">1</option>                            
                            <option value="2">2</option>                            
                        </select>
                        <select
                            className="border-r-2 p-2"
                            onChange={handleUpdate}
                            value={item.status}
                        >
                            <option value="new">New</option>
                            <option value="chased">Chased</option>                            
                            <option value="sent">Sent to approval</option>
                            <option value="repeat">Repeat</option>   
                        </select>
                        <input
                        className="ml-5 border-r-2 cursor-pointer"
                            type="checkbox"
                            checked={item.completed}
                        />
                        <button
                            style={{fontSize:"28px",verticalAlign:"middle", paddingBottom:"7px",marginLeft:"8px", color:"red"}}
                            onClick={()=>handleDelete(item)}
                        >
                            <AiFillDelete/>
                        </button>

                    </div>
                )}
            </div>

        </div>
    </Layout>
  )
}

export default Flatplan