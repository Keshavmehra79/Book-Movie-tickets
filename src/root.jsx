import React from "react";
import { Routes,Route } from "react-router-dom";

import Navbar from "./navbar.jsx"
import Home from "./Home.jsx"
import Signup from "./Signup.jsx"
import Login from "./login.jsx"
import Footer from "./footer.jsx"
import Contact from "./contact.jsx"
import Movies from "./movies.jsx"
import Tickets from "./tickets.jsx";

const root=()=>{
 
    return(
        <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/tickets" element={<Tickets/>}/>

        </Routes>
        
        <Footer/>
        </>
    )
}
export default root