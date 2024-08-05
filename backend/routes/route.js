const express = require('express');
const router = express.Router();
const {getAlltask,createTask,updateTask,deleteTask,getTask} =require('../controller/task')

router.route('/').get(getAlltask).post(createTask)
router.route('/:id').delete(deleteTask).get(getTask).patch(updateTask)


module.exports=router