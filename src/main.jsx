import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './input.css'
import App from './App.jsx'
import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import Login from './components/home/login.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';

const appRouter =createBrowserRouter([
  {
    path: '/',
    element:<App/>,
    children:[
      {
        index:true,
        element:<Login/>
      },
      {path:'/Login',element:<Login/>},
      {path:'/Dashboard',element:<Dashboard/>},
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
