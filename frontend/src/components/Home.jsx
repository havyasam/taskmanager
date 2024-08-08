import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Home = () => {
  const [tasks, setTask] = useState([])
  const [DeleteTask,allTask] = useState();
  const [name,setName] = useState('')
 useEffect(() =>{
    axios.get('http://localhost:3000/api/v1/router')
    .then((res)=>{
      setTask(res.data)
    })
    .catch((err) =>{
        console.log('error message is occured')
    })
 },[])

 const updateTask = async() =>{
  event.preventDefault();
  try {
    const response = await axios.post('http://localhost:3000/api/v1/router/',{name:name})
      console.log("helo")
      setTask([...tasks,response.data])
      console.log("done")
      setName('')
      console.log("erased")
  } catch (error) {
    console.log("error")
  }
 }

 const deleted = async(taskID) =>{
  
      try {
        console.log(`Deleting task with ID: ${taskID}`);  
        await axios.delete(`http://localhost:3000/api/v1/router/${taskID}`)
        console.log("helo")
        setTask(tasks.filter(task => task._id !== taskID))
       
      } catch (error) {
        console.log("error")
        
      }
 }

 
  return (
<div className='flex flex-col items-center justify-center h-screen space-y-16 bg-[#eef2ff]'>
  <div className='bg-white pl-12 pr-12 pt-3 pb-6 rounded'>
    <h1 className='text-center my-4 font-mono text-2xl'>Task Manager</h1>
    <form onSubmit={updateTask}>
      <input onChange={e => setName(e.target.value)} value={name} name="myInput" placeholder='eg: finish the work' className='bg-[#e2e8f0] rounded-l-lg px-8 py-1'/>
      <button type = 'submit' className='bg-indigo-500 rounded-r-lg px-2 py-1 text-white hover:bg-[#16a34a]'>submit</button>
    </form>
  </div>
    <div >
      <h1>
          <ul  className='space-y-4'>
              {tasks.map(task => (
                  <li>
                    <div className=' flex  justify-between container  py-3  rounded bg-white'>
                    <div className='mr-36 ml-6 '>
                    {task.name} 
                    
                    </div>
                  <div  className='mr-6 '>
                  <Link to={`/edit/${task._id}`}><button className='pr-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" hover='blue'class="size-5">
                      <path  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>
                    </button></Link>
                    <button onClick={() =>deleted(task._id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="size-5">
                        <path   d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>
                    </button>
                  </div>
                </div>
                </li>
              ))}
          </ul>
        </h1>
  </div>
  </div>
  )
}

export default Home