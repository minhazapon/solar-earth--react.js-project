import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import Solar from './Solar';
import Information from './Information';
import Login from './firebase/Login';
import SignUp from './firebase/SignUp';
import AuthContext from './firebase/AuthContext';
import PrivateRoute from './PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/system",
        element:   <PrivateRoute><Solar></Solar></PrivateRoute> ,
      },
      {
        path: "/info",
        element:   <PrivateRoute><Information></Information></PrivateRoute> ,
      },
      {
        path: "/in",
        element:  <Login></Login> ,
      },
      {
        path: "/up",
        element:   <SignUp></SignUp> ,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

     <AuthContext>
         
     <RouterProvider router={router} />

     </AuthContext>

      
  </React.StrictMode>,
)
