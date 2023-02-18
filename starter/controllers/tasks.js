const Task = require('../models/task');
const asyncWrapper = require('../middleware/async')
const getAllTasks = asyncWrapper( async (req,res)=>{
    
        // await before Task.find({})
        // it is throwing an error
        const tasks =  await Task.find({});
        res.status(200).json({tasks:tasks})//shortage only .json({tasks})
    
})
const createTask = asyncWrapper( async (req,res)=>{
   
        const task = await Task.create(req.body)
        res.status(201).json({task});
        
   
   
})
const getTask = asyncWrapper( async (req,res)=>{
   
        // destructuring and creating an allias
        const {id:taskId}=req.params
        const task = await Task.findOne({_id:taskId})
        

        if(!task){
            return res.status(404).json({msg:`no task with id ${taskId}`})
        }
        res.status(200).json(task);
   
  
})

const deleteTask= asyncWrapper(  async (req,res)=>{
   
        // destructuring and creating an allias
        const {id:taskId}=req.params
        const task = await Task.findByIdAndDelete({_id:taskId})
        

        if(!task){
            return res.status(404).json({msg:`no task with id ${taskId}`})
        }
        res.status(200).json(task);
  
  
})
const updateTask =asyncWrapper( async (req,res)=>{
    
   
        const{id:taskId}=req.params;
        const task = await Task.findOneAndUpdate({_id:taskId},req.body,{
            new:true,
            runValidators:true
            
        })
        if(!task){
            return res.status(404).json({msg:`no task with id ${taskId}`})
        }
        res.status(200).json({id:taskId,data:req.body})
   
})

module.exports={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}