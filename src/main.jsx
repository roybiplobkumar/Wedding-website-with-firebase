import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './assets/components/MainLayout/MainLayout.jsx';
import Home from './assets/components/Pages/Home/Home.jsx';
import React from 'react';
import Login from './assets/components/Pages/Login/Login.jsx';
import AuthProviders from './Providers/AuthProviders';
import Register from './assets/components/Pages/Register/Register';
import NotFound from './assets/components/Pages/NotFound/NotFound';
import EventDetails from './assets/components/EventDetails/EventDetails';
import PrivateRoute from './assets/components/PrivateRoute/PrivateRoute';
import Blog from './assets/components/Pages/Blog/Blog';
import ContactUs from './assets/components/Pages/Home/Contact/ContactUs';
import Dashboard from './assets/components/Pages/Dashboard/Dashboard.jsx';
import AddGallary from './assets/components/Pages/Dashboard/componect/AddGallary.jsx';
import AddServices from './assets/components/Pages/Dashboard/componect/AddServices.jsx';
import AddBlog from './assets/components/Pages/Dashboard/componect/AddBlog.jsx';
import DashboardProtect from './assets/DashboardProtectRoute/DashboardProtect.jsx';
import DashboardLogin from './assets/components/Pages/Dashboard/componect/DashboardLogin.jsx';
import UpdateServices from './assets/components/Pages/Dashboard/componect/UpdateServices.jsx';
import UpdateServiceForm from './assets/components/Pages/Dashboard/componect/UpdateServiceForm.jsx';
import UpdateBlog from './assets/components/Pages/Dashboard/componect/UpdateBlog.jsx';
import UpdateBlogForm from './assets/components/Pages/Dashboard/componect/UpdateBlogForm.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/eventdetails/:id',
        element: (
          <PrivateRoute>
            <EventDetails></EventDetails>
          </PrivateRoute>
        ),
        loader: () => fetch('/services.json'),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/blog',
        element: (
          <PrivateRoute>
            <Blog></Blog>
          </PrivateRoute>
        ),
      },
      {
        path: '/contact',
        element: <ContactUs></ContactUs>,
      },
    ],
  },

  {
    path: "dashboard-login",
    element: <DashboardLogin></DashboardLogin>
  }
  ,
  {
    path: '/dashboard',
    element: (<DashboardProtect> <Dashboard></Dashboard></DashboardProtect>),
    children: [
      {
        path: 'add-gallery', //
        element: <AddGallary></AddGallary>,
      },
      {
        path: 'add-service',
        element: <AddServices></AddServices>,
      },
      {
        path: 'add-blog',
        element: <AddBlog></AddBlog>
      },
      {
        path: 'update-services',
        element: <UpdateServices></UpdateServices>
      },
      {
        path: 'update-services-form/:id',
        element: <UpdateServiceForm></UpdateServiceForm>
      },
      {
        path: 'update-blog',
        element: <UpdateBlog></UpdateBlog>
      },
      {
        path: 'update-blog-form/:id',
        element: <UpdateBlogForm></UpdateBlogForm>
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
