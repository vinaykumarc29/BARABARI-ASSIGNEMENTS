import {BrowserRouter ,Routes ,Route} from 'react-router'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import PageNotFound from './components/PageNotFound'
function App() {
  return (
  <>
  <BrowserRouter>

  <Navbar/>

  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='*' element={<PageNotFound/>} />
  </Routes>
  </BrowserRouter>

  
  
  </>
  )
}

export default App
