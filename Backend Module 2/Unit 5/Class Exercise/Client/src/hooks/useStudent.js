import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

 export const useStudent = ()=>useContext(StudentContext);