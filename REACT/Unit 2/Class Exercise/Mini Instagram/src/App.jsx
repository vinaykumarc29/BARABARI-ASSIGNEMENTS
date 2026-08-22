import './App.css';
import Post from './components/Post.jsx'

function App() {

  return (
    <>
    <div className="App">
    <h1>Instagram Posts</h1>
    <Post image="src/assets/post1.png" caption='spiderman'/>
    <Post image="src/assets/post2.png" caption='batman'/>
    <Post image="src/assets/post3.png" caption='captain america'/>
    </div>
    </>
  )
}

export default App
