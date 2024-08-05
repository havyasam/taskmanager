const getAlltask = (req, res)=>{
    res.send("get all task");
}

const createTask=(req, res)=>{
    console.log(req.body)
    res.json(req.body);
}
const getTask=(req, res)=>{
   
    res.json({id:req.params.id});
    console.log({id:req.params.id})
}
const updateTask=(req,res)=>{
    console.log("hi")
    res.send('update task');
}
const deleteTask=(req,res)=>{
    res.send('delete task');
}

module.exports={getAlltask,getTask,createTask,updateTask,deleteTask}