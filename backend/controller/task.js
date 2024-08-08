
const Task = require("../models/Task")
const getAlltask = async(req, res)=>{
    try {
        const task = await Task.find({})
        res.status(201).json(task);
        
    } catch (error) {
        res.status(500).json({error})
    }

}

//create Task

const createTask= async(req, res)=>{
    try {
        const task = await Task.create(req.body)
        res.status(201).json(task);
        
    } catch (error) {
        res.status(500).json({error})
    } 

    
}

//Get task

const getTask=async(req, res)=>{
     try {
         const {id:taskID} = req.params
         const task = await Task.findOne({_id:taskID})
         console.log(task)
         if(!task){
             return res.status(400).json({msg: `there is no id name ${taskID}`})
         }
        res.json(task);
      
     } catch (error) {
         return res.status(500).json({error})
     }
   
}

// Update Task 

const updateTask = async(req,res)=>{
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({_id:taskID},req.body, { new: true })
        console.log(task)
        if(!task){
            return res.status(400).json({msg: `no id defined`})
        }
        res.status(201).json(task)
    } catch (error) {
        
        return res.status(500).json({error})
    }

   
}


//Delete Task

const deleteTask=async(req,res)=>{
    
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID})
        console.log(task)
        if(!task){
            return res.status(400).json({msg:`there is no id named ${taskID}`})
        }
        res.json({msg: `deleted the id ${taskID}`})
        
    } catch (error) {
        return res.status(500).json({error})
    }
}

module.exports={getAlltask,getTask,createTask,updateTask,deleteTask}