import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'



function Edit() {
 
  const navigate = useNavigate();
        
const [Task,setTask] = useState([])

const [name,setName] = useState('')
const {taskID} = useParams()


useEffect(() =>{
  console.log(taskID)
    axios.get(`http://localhost:3000/api/v1/router/`+taskID)
    .then((res) =>{
      const {name} = res.data
      setName({...name,name:name})
      console.log(name)
    })
    .catch((error) =>{
        console.log("er")
    })
    
},[taskID])


const update = async(event) =>{
    event.preventDefault()
    try {
        await axios.patch(`http://localhost:3000/api/v1/router/${taskID}`,{name})
        navigate('/')
    } catch (error) {
        console.log("error")
    }
}



  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-16 bg-[#eef2ff]'>
    <div className='bg-white pl-16 pr-16 pt-16 pb-16 rounded'>
    <h1 className='text-center my-4 font-mono text-2xl'>Edit your Task</h1>
    <form onSubmit={update}>
      <input type="text" value = {name.name} name="myInput" placeholder='eg: finish the work' className='bg-[#e2e8f0] rounded-l-lg px-8 py-1' onChange={e => setName(e.target.value )}/>
      <button type = 'submit' className='bg-indigo-500 rounded-r-lg px-2 py-1 text-white hover:bg-[#16a34a]'>Update</button>
    </form>
  </div>
  </div>
  )
}

export default Edit