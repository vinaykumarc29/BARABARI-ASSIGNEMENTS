import express from 'express';
import {addTask, deleteTask, getAllTasks, getTask, updateTask} from '../controllers/taskController.js';

const router = express.Router();

router.post("/create-task",addTask);
router.get("/get-all-tasks",getAllTasks);
router.get("/:id",getTask);
router.patch("/update-task/:id",updateTask);
router.delete("/delete-task/:id",deleteTask);


export default router;