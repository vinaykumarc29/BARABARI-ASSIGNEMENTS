import express from "express";  
import { createStudent, deleteStudent, getStudentData, getStudents, updateStudent } from "../controller/studentController.js";

const router = express.Router();

router.get("/fetch",getStudents);
router.get("/fetch/:id",getStudentData);
router.post("/create",createStudent);
router.put("/update/:id",updateStudent);
router.delete("/delete/:id",deleteStudent);


export default router;