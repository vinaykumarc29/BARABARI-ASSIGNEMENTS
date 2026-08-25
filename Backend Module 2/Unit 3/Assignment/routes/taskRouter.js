import express from 'express';
import {getAllTasks , createTask, updateTask, getTask, completeAllTasks, deleteTask} from '../controller/taskController.js';

const router = express.Router();

router.get("/tasks",getAllTasks); // -> returns all tasks
router.post("/tasks",createTask);   // -> creates new tasks
router.put("/tasks",completeAllTasks); // -> changes status of all tasks
router.put("/tasks/:id",updateTask); // -> updates the status, priority or task
router.get("/tasks/:id",getTask); // -> returns  task by id
router.delete("/tasks/:id",deleteTask); // -> deletes the task



export default router;