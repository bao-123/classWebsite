//import { useEffect, useState } from 'react'
//import {baseURL} from "./constants.js";
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Home from './pages/Home.tsx';
import MatchSetting from "./pages/MatchSetting.tsx";
import './App.css';

const router = createBrowserRouter([
  { path: "/", element: <Home />},
  {path: "/set-match", element: <MatchSetting />}
]);


function App() {
  return <RouterProvider router={router}/>
}

export default App;
