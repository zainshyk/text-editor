import './App.css'
import React, {useState} from 'react'
import Navbar from './Navbar'
import Editor from './EditorBox'
import Alert from './Alert'
import Products from './Products'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const body = document.querySelector("body");

  const showAlert = (type, alert, message) => {
    setAlert({
      type: type,
      alert: alert,
      message: message,
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }
  
  const changeMode = () => {
    if(mode === "light"){
      setMode("dark");
      body.style.backgroundColor = "#2c2f33";
      showAlert("light", "Congratulations: ", "Dark Mode Has Been Enabled Successfully!")
    }else{
      setMode("light")
      body.style.backgroundColor = "white";
      showAlert("dark", "Congratulations: ", "Light Mode Has Been Enabled Successfully!")
    }
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar homeSelect="active" productsSelect="" mode={mode} changeMode={changeMode}/><Editor showAlert={showAlert} mode={mode}/></>
    },
    {
      path: "/products",
      element: <><Navbar homeSelect="" productsSelect="active" mode={mode} changeMode={changeMode}/><Products mode={mode}/></>
    },
  ]);
  
  return (
    <>
      <RouterProvider router={router} />
      <Alert alert={alert}/>
    </>
  )
}

export default App