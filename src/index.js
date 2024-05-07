import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import SingleBlog from './components/SingleBlog';
import Invite from './pages/Invite';
import Item1 from './item/Item1';
import Item2 from './item/Item2';
import Item3 from './item/Item3';




const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/blog",
        element:<Blog/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/products/:id",
        element:<SingleBlog/>,
        loader : ({params}) => fetch(`https://dummyjson.com/products/${params.id}`)
        
      },{
        path:"/invite",
        element:<Invite/>

      },{
        path:"/item/1",
        element: <Item1/>
      },{
        path:"/item/2",
        element: <Item2/>
      }
      ,{
        path:"/item/3",
        element: <Item3/>
      }
      
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
   <RouterProvider router={router} />
 </React.StrictMode>
);

reportWebVitals();

