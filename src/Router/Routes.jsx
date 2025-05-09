import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import Root from '../Pages/Root';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Pages/Home';
import MyBookings from '../Pages/MyBookings';
import Blogs from '../Pages/Blogs';
import ContactUs from '../Pages/ContactUs';
import DoctorDetails from '../Components/DoctorDetails/DoctorDetails';


const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement:<ErrorPage/>,
      children:[
        {
            index: true,
            path: '/',
            loader:()=> fetch('../doctorDetails.json'),
            Component: Home
        },
        {
            path: '/myBookings',
            Component: MyBookings
        },
        {
          path:'/blogs',
          Component: Blogs
        },
        {
          path: '/contactUs',
          Component: ContactUs
        },
        {
          path:'/doctorDetails/:reg',
          loader:()=> fetch('../doctorDetails.json'),
          Component: DoctorDetails
        }
      ]
    },
  ]);
  

export default router;