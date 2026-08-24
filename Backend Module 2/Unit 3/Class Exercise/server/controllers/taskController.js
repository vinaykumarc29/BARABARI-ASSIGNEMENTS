import tasks from '../data/tasks.js';


export const addTask =async(req,res)=>{

    const {task} = req.body;
    if(task.trim().length == 0){
      return res.status(400).json({message:"Task Cannot be empty !!"})
    }
    const newTask = {
        id:tasks.length + 1,
        task:task
    }
    tasks.push(newTask);
    return res.status(201).json({message:"Task created successfully"});
}

export const getAllTasks = async(req,res)=>{
    return res.status(200).json({data:tasks,message:"tasks Successfully fetched !!"});
}

export const getTask = (req,res)=>{
    const {id} = req.params;
    let task = tasks.find((t=>t.id == Number(id)));
    if(!task || tasks == []) return res.status(404).json({message:"Invalid Task Id"});

    return res.status(200).json({data:task});
}

export const updateTask = async(req,res)=>{
    let {task} = req.body;
    const {id} = req.params;

    let requiredTask = tasks.find((t) => t.id == Number(id));

    if(!requiredTask) return res.status(404).json({message:"Invalid Task Id"});

    requiredTask.task = task;       
    return res.status(201).json({message:"Task updated Successfully !!"});
}

export const deleteTask = async(req,res)=>{
    const {id} = req.params;

    const taskIndex = tasks.findIndex((t)=>t.id == Number(id));

    if(taskIndex == -1) return res.status(404).json({Message:"Task not found !!"});

    tasks.splice(taskIndex,1);

    return res.status(200).json({message:"Task deleted sucessfully !!"});
    
}

