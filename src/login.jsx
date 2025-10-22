import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const login=()=>{

    const[logindata,setdata]=useState({
        email:"",
        password:"",
    })

    const handledata=(e)=>{
        setdata({...logindata,[e.target.name]:e.target.value})
    }
    

       let navigt=useNavigate()

    const loginsubmit=(e)=>{
        e.preventDefault()
        if(logindata.email==""){
            alert("Please Enter your email")
            return
        }
        else if(logindata.password==""){
            alert("Please Enter your password")
            return 
        }
        let userdata=JSON.parse(localStorage.getItem('Userdata'))
         if(logindata.email!=userdata.email){
            alert("User Not found ! please enter correct email")
            return
         }
         else if(logindata.password!=userdata.password){
            alert("User Not found ! please enter correct password")
            return
         }

       alert("You have logged in succefully")
         navigt("/")
        
    }
    return(
        <>
        <div id="login">    
            
       <form onSubmit={loginsubmit}>
        <h1>Login now</h1>
        <hr />
            <input type="email" placeholder="Email" name="email" value={logindata.email} onChange={handledata}/><br></br>
            <input type="text" placeholder="Password" name="password" value={logindata.password}  onChange={handledata}/><br></br>
            <button type="submit" className="btn">Login</button>
        </form>
        
        </div>
 
        </>
    )
}
export default login