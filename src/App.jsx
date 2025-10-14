import React, { useEffect, useState } from "react";
import Home from "./navbar.jsx"
import Login from "./Signup.jsx";
import Signup from "./login.jsx";
// import Login from "./login"
// import "./style.css"

const App = () => {

  const person = {
    name: "Naeem",
    age: 25
  }

  return (
    <>
      {/* <Home /> */}
      <Signup/>
      <Login/>

    </>
  )
}
export default App