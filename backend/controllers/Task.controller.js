import TaskModel from "../models/Task.model.js";
export const createTask = async (req, res)=>{ 
    try{
        const {title, description}  = req.body
        const newTask = new TaskModel({
            title, description
        })

         await newTask.save()

        res.status(200).json({
        status: true,
        message: 'Task Created successfully.'
    })
    }

   
    catch(error){
        res.status(500).json({
        status: false,
        message: error.message
    })
  }
}
export const getAllTask = async (req, res)=>{
      try{
        const taskData = await TaskModel.find().sort({createdAt: -1}).lean().exec()

        res.status(200).json({
        status: true,
       
        taskData
    })
    }

   
    catch(error){
        res.status(500).json({
        status: false,
        message: error.message
    })
  }
 }
export const showTask = async (req, res)=>{
        try{
        const {taskid} = req.params
        const taskData = await TaskModel.findById(taskid)

        res.status(200).json({
        status: true,
        
        taskData
    })
    }

   
    catch(error){
        res.status(500).json({
        status: false,
        message: error.message
    })
  }
 }



export const updateTask = async (req, res)=>{

      
      try{

        const {taskid} = req.params
        const {title, description, status}  = req.body

        const taskData = await TaskModel.findByIdAndUpdate(taskid, {title, description, status}, {new: true} )
        


        res.status(200).json({
        status: true,
        message: 'Task  Updated successfully.',
        taskData
    })
    }

   
    catch(error){
        res.status(500).json({
        status: false,
        message: error.message
    })
  }
 }
export const deleteTask = async (req, res)=>{
     try{

        const {taskid} = req.params
       

         await TaskModel.findByIdAndDelete(taskid)
        

        

        res.status(200).json({
        status: true,
        message: 'Task  Deleted successfully.',
    
    })
    }

   
    catch(error){
        res.status(500).json({
        status: false,
        message: error.message
    })
  }
 }