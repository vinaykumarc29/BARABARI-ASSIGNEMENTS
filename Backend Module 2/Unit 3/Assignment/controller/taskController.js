import tasks from "../data/tasks.js";

export const getAllTasks = (req, res) => {

    const {priority , status ,search} = req.query;    
    let result = tasks;

    if(priority){
        result = result.filter((task)=>task.priority == priority);
    }
    if(status){
        result = result.filter((task)=>task.status == status);
    }
    if(search){
        result = result.filter((task)=>task.task.toLowerCase().includes(search.toLowerCase()));
    }
  return res
    .status(200)
    .json({ data: result, message: "all tasks are fetched successfully !!" });
};

export const createTask = (req, res) => {
  const { task, priority, status } = req.body;

  if (!task || !priority || !status) {
    return res
      .status(400)
      .json({ message: "task must contain all 3 fields !!" });
  }

  let newTask = {
    id: tasks.length + 1,
    task: task,
    priority: priority,
    status: status,
  };

  tasks.push(newTask);
  return res.status(201).json({message:"task created sucessfully",task:newTask});
};

export const updateTask = (req,res)=>{
  const {id} = req.params;
  // if body includes status or priority then that is also updated.
  const {task , status ,priority} = req.body; 
  let requiredTask = tasks.find((task)=>task.id == Number(id));

  if(!requiredTask) return res.status(404).json({message:"Student not found !!"});

  requiredTask.task = task;

  // status and priority is also updated if provided !!

  if(status){
    requiredTask.status = status
  }
  if(priority){
    requiredTask.priority = priority;
  }

  return res.status(200).json({message:"Task updated successfully !!",updatedTasked:updateTask});
}

export const getTask = (req,res)=>{
  const {id} = req.params;

  const requiredTask = tasks.find((task)=>task.id == Number(id));

  if(!requiredTask) return res.status(404).json({message:"Student not found !!"});

  return res.status(200).json({message:"task fectched successfully",task:requiredTask});

}

export const completeAllTasks = (req,res)=>{
  tasks.forEach((task)=>{
    task.status = "completed";
  });

  return res.status(200).json({message:"all tasks marked as completed !!"});
}

export const deleteTask = (req,res)=>{
  const {id} = req.params;

  const taskIndex = tasks.findIndex((task)=>task.id == Number(id));

  if(taskIndex == -1) return res.status(404).json({message:"Invalid task id"})

  tasks.splice(taskIndex,1);

  return res.status(200).json({message:"Task deleted successfully !!"});
}


