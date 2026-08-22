import './App.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import RegisteredStudent from './components/RegisteredStudent';

function App() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [studentsLists, setstudentsLists] = useState([]);

  const submitForm = (data) => {

    const { fullName, email, phno, course, gender } = data;

    console.log(data);

    setstudentsLists([...studentsLists, {
      fullName: fullName,
      email: email,
      phno: phno,
      course: course,
      gender: gender
    }]);

    reset();



  }



  return (
    <>
      <div className="container">
        <h1>Student Registration Form</h1>
        <div className="formContainer">
          <form id='studentRegistrationForm' onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(submitForm)();


          }}>

            <label htmlFor="fullName">Full Name : </label>
            <input type="text" name='fullName' id='fullName' className='form-ele'

              {...register('fullName', { required: { value: true, message: `Fullname Must Be Filled !` } })}

            />
            <br />

            <label htmlFor="email">Email : </label>
            <input type="email"  {...register('email', { required: { value: true, message: `Email Must Be Filled !` } })} name='email' id='email' className='form-ele' />
            <br />

            <label htmlFor="phno">Phone Number : </label>
            <input type="tel"  {...register('phno', { required: { value: true, message: `Phone number Must Be Filled !` }, maxLength: { value: 10, message: `Phone number must be 10 digits only` } })} name='phno' id='phno' className='form-ele' />
            <br />

            <label htmlFor="course">Course : </label>
            <input type="text"  {...register('course', { required: { value: true, message: `Course Must Be Filled !` } })} name='course' id='course' className='form-ele' />
            <br />

            <label htmlFor="gender" id='gender-label'>Gender : </label>
            <input type="radio"
              {...register('gender', { required: { value: true, message: `Gender Must Be Filled !` } })}
              name='gender' id='genderMale' className='gender' value="male" />male


            <input type="radio"
              {...register('gender', { required: { value: true, message: `Gender Must Be Filled !` } })}
              name='gender' id='genderFemale' className='gender' value="female" />female
            <br />

            <input type="checkbox"
              {...register('termsAndConditions', { required: { value: true, message: `Please agree terms and conditions ` } })}
              name='termsAndConditions'
              id='termsAndConditions'
            />
            <label htmlFor="termsAndConditions" id='terms-label'>agree all terms and conditions</label>
            <br />


            {(errors.fullName || errors.email || errors.phno || errors.course || errors.gender || errors.termsAndConditions) && Object.values(errors).map((error, idx) => {
              return <p key={idx} className='errorMessage'>{error.message}</p>
            })}

            <input type="submit" id='submitBtn' />

          </form>
        </div>

        <h2>Students Registered</h2>

        <RegisteredStudent studentsLists={studentsLists} />
      </div>
    </>
  )
}

export default App;
