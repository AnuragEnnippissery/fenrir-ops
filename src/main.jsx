import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './input.css'
import App from './App.jsx'
import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import Login from './components/home/Login.jsx';
import Dashboard from './components/dashboard/Dashboard';
import Layout from './components/dashboard/Layout.jsx'
import Scan from './components/dashboard/Scan.jsx'
import Register from './components/home/Register.jsx'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Register />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path:"register",
        element:<Register/>
      },
      {
        path: "dashboard",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Dashboard />
          },
          {
            path: "scan",
            element: <Scan />
          }
        ]
      }
    ]
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
