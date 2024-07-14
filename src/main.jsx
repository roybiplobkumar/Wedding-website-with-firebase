
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './assets/components/MainLayout/MainLayout.jsx'
import Home from './assets/components/Pages/Home/Home.jsx'
import React from 'react'
import Login from './assets/components/Pages/Login/Login.jsx'
import AuthProviders from './Providers/AuthProviders'
import Register from './assets/components/Pages/Register/Register'
import NotFound from './assets/components/Pages/NotFound/NotFound'
import EventDetails from './assets/components/EventDetails/EventDetails'
import PrivateRoute from './assets/components/PrivateRoute/PrivateRoute'
import Blog from './assets/components/Pages/Blog/Blog'
import ContactUs from './assets/components/Pages/Home/Contact/ContactUs'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<NotFound></NotFound>,
   children :[
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/eventdetails/:id',
      element:(<PrivateRoute><EventDetails></EventDetails></PrivateRoute>),
      loader:()=>fetch('/services.json')
    },
    {
      path:'/login',
      element:<Login></Login>
    },
   
    {
      path:'/register',
      element:<Register></Register>
    },
    {
      path:'/blog',
      element:(<PrivateRoute> <Blog></Blog></PrivateRoute>)
    },
    {
      path:'/contact',
      element:(<PrivateRoute> <ContactUs></ContactUs></PrivateRoute>)
    },
   
   ]
  },
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(

 
  <React.StrictMode>
         <AuthProviders>
      <RouterProvider router={router}>
        
      </RouterProvider>
    </AuthProviders>
  </React.StrictMode>,
)
