import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { ROUTES } from './Routes/index';

const routes = createBrowserRouter(ROUTES)

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
   <RouterProvider router={routes} />
  
  
  </>
  )
}

export default App
