import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import Root from '../Pages/Root';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Pages/Home';
import MyBookings from '../Pages/MyBookings';

const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement:<ErrorPage/>,
      children:[
        {
            index: true,
            path: '/',
            loader:()=> fetch('doctorDetails.json'),
            Component: Home
        },
        {
            path: '/myBookings',
            Component: MyBookings
        }
      ]
    },
  ]);
  

export default router;