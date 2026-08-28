import Navbar from "./components/Navbar"
import StudentTable from "./components/StudentTable"
import StudentProvider from "./context/StudentProvider"

function App() {
  return (
    <>
    <StudentProvider>

    <Navbar/>
    <StudentTable/>
    
    </StudentProvider>
    </>
  )
}

export default App