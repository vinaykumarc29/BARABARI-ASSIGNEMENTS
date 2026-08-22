import React from 'react';
import './RegisteredStudent.css';
function RegisteredStudent(props) {
    const { studentsLists } = props
    return (
        <div>
            {studentsLists.map((student)=>{
           return <div className="studentContainer" key={student.email}>
                <p>Name : <span className="nameField">{student.fullName}</span></p>
                <p>Email : <span className="emailField">{student.email}</span></p>
                <p>Phone Number : <span className="phoneFiled">{student.phno}</span></p>
                <p>Gender : <span className="gender">{student.gender}</span></p>
                <p>Course : <span className="course">{student.course}</span></p>
            </div>
            })}
        </div>
    )
}

export default RegisteredStudent;
