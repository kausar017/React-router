import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';

import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Service from './Components/Service/Service.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: 'about',
        element: <About></About>
      },
      { 
        path: 'contract',
        element: <Contact></Contact>
      },
      {
        path: 'service',
        element: <Service></Service>
      },
      {
        path: 'header',
        // element: <Header></Header>
      }
    ]
  },
 

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
    <App></App>
  </StrictMode>,
)
