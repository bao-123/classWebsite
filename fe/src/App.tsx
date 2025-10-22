//import { useEffect, useState } from 'react'
//import {baseURL} from "./constants.js";
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Home from './pages/Home.tsx';
import './App.css';

const router = createBrowserRouter([
  { path: "/", element: <Home />}
]);


function App() {
  return <RouterProvider router={router}/>
}

export default App;
