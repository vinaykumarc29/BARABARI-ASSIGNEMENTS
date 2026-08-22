import React, { lazy, Suspense, useContext, useMemo, useState } from 'react';
const CourseCard = lazy(()=> import('./CourseCard'));
import './CourseList.css';
import CourseContext from '../contexts/CourseContext';

function CourseList() {

  const { data, errorMsg } = useContext(CourseContext);
  const [search, setSearch] = useState('All');

  const filteredCourses= useMemo(() => {
    console.log(`func exectued`)
    if (!data) return [];
    if (search == `All`) return data;

    return data.filter((course) => {
      return course.category == search;
    })

  }, [data, search]);

  return (
    <div>
      <div className="container">
        <h1>Courses</h1>
        <select name="courses" id="courses" value={search} onChange={(e)=>setSearch(e.target.value)}>
          <option value="All" >All</option>
          <option value="Web">Web</option>
          <option value="AI">AI</option>
          <option value="Data Science">Data Science</option>
          <option value="Cloud">Cloud</option>
          <option value="Security">Security</option>

        </select>
        <div className="cardsContainer">

          {errorMsg ? <h1>Something went wrong !! {errorMsg}</h1> :filteredCourses.map((course)=>{

            return  <Suspense fallback=<p>Loading Cards</p> ><CourseCard title={course.title} description={course.description} category={course.category} key={course.id} /> </Suspense>

          })}

          
          
        </div>


      </div>
    </div>
  )
}

export default CourseList
