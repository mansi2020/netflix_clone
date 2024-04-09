import React from 'react';
import Login from './Login';
import Browse from './Browse';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import MainContainer from './MainContainer';


const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default Body;
