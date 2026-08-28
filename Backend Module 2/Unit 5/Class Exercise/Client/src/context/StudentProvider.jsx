import { StudentContext } from "./StudentContext";
import axios from "axios";
import { useEffect, useState } from "react";

function StudentProvider({ children }) {
    const BASE_URL = import.meta.env.VITE_BACKEND_URL;

    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const getAllStudents = async ({
        course = "",
        year = "",
        search = "",
        page = 1,
        limit = 10,
    } = {}) => {
        try {
            setLoading(true);
            setError("");

            const params = {
                page,
                limit,
            };

            if (course) params.course = course;
            if (year) params.year = year;
            if (search) params.search = search;

            const response = await axios.get(`${BASE_URL}/fetch`, {
                params,
            });

            setStudents(response.data.data);
            console.log(response.data.data)

        } catch (error) {
            console.log(error);
            setError("Failed to fetch students");
        } finally {
            setLoading(false);
        }
    };

    const getStudent = async(id)=>{
        try{
            setLoading(true)
            const response = await axios.get(`${BASE_URL}/fetch/${id}`);
            console.log(response.data.data)
            return response.data.data

        }catch(error){
            console.log(error);
        }finally{
            setLoading(false);
        }
    }

const editStudent = async (id, { name, age, rollno, course, year }) => {
    try {
        const response = await axios.put(
            `${BASE_URL}/update/${id}`,
            {
                name,
                age: Number(age),
                rollno,
                course,
                year: Number(year),
            }
        );

        const data = response.data.data;
        console.log(data);

        return data;

    } catch (err) {
        console.log(err);
        throw err;
    }
};

    const createStudent = async({name,age,course,rollno,year})=>{
        try{
            const response = await axios.post(`${BASE_URL}/create`,{
                name,
                age: Number(age),
                rollno,
                course,
                year: Number(year)
            }
            );

            console.log(response);
            return  response.data.message;

        }catch(err){
            console.log(err);
        }
    }

    const deleteStudent = async (id) => {
        try {
            const response = await axios.delete(`${BASE_URL}/delete/${id}`);
            return response.data;
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getAllStudents();
    }, []);

    return (
        <StudentContext.Provider
            value={{
                students,
                getAllStudents,
                loading,
                error,
                getStudent,
                editStudent,
                createStudent,
                deleteStudent
            }}
        >
            {children}
        </StudentContext.Provider>
    );
}

export default StudentProvider;