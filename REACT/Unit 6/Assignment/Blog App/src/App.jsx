import './App.css';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Blog from './components/Blog';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';

function App() {

  const blogs = [
  {
    id: 1,
    title: "Understanding JSX in React",
    author: "Vinay Kumar",
    content:
      "JSX stands for JavaScript XML and allows developers to write HTML-like syntax directly inside JavaScript. React uses JSX to describe the user interface in a more readable and maintainable way. Although browsers cannot understand JSX directly, tools like Babel transpile it into regular JavaScript that React can process."
  },
  {
    id: 2,
    title: "What are React Components?",
    author: "Arjun",
    content:
      "Components are the building blocks of a React application. They are reusable pieces of UI that can accept data through props and return JSX to render content on the screen. By breaking an application into components, developers can create modular, maintainable, and scalable user interfaces."
  },
  {
    id: 3,
    title: "State Management with useState",
    author: "Rohit",
    content:
      "The useState hook allows functional components to store and manage state. Whenever the state changes through its setter function, React automatically re-renders the component to reflect the updated data. This makes it easy to create dynamic and interactive user interfaces."
  },
  {
    id: 4,
    title: "Passing Data with Props",
    author: "Arvind",
    content:
      "Props are used to pass data from a parent component to a child component. They help components communicate and make them reusable by allowing different values to be supplied each time they are rendered. Props are read-only and should never be modified by the receiving component."
  },
  {
    id: 5,
    title: "Using useEffect for Side Effects",
    author: "Vivek",
    content:
      "The useEffect hook is used to handle side effects in React applications, such as fetching data, updating the DOM, or setting up event listeners. It runs after the component renders and can be configured to execute only when specific dependencies change."
  },
  {
    id: 6,
    title: "React Router for Navigation",
    author: "Vishnu",
    content:
      "React Router is a popular library used to implement client-side routing in React applications. It allows users to navigate between different pages without reloading the browser, creating a smoother and faster user experience while maintaining a single-page application structure."
  },
  {
    id: 7,
    title: "Why Keys are Important in React Lists",
    author: "Srikar",
    content:
      "Keys help React identify which items in a list have changed, been added, or removed. By assigning a unique key to each list item, React can efficiently update only the necessary elements in the DOM, improving performance and reducing unnecessary re-renders."
  },
  {
    id: 8,
    title: "Conditional Rendering in React",
    author: "Manoj",
    content:
      "Conditional rendering allows React components to display different content based on certain conditions. Developers commonly use if statements, ternary operators, or logical AND operators to determine what should be rendered, making applications more dynamic and user-friendly."
  }
];

  const router = createBrowserRouter([
    {path:"/",
      element:<Home blogs={blogs}/>
    },
    {path:"blog/:id",
      element:<Blog blogs={blogs}/>
    },
    {
      path:'*',
      element:<PageNotFound/>
    }
  ])

  return (
   <>
   <RouterProvider router={router}/>
   </>
  )
}

export default App
