import { lazy, Suspense } from 'react';
import './App.css';
import CourseProvider from './components/CourseProvider';
const CourseList = lazy(() => import('./components/CourseList'));

function App() {

  return (
    <>
      <CourseProvider>

        <Suspense fallback=<h1>Loading</h1> >
          <CourseList />
        </Suspense>

      </CourseProvider>
    </>
  )
}

export default App
