import React, { useState } from "react";
const login=()=>{

    const[logindata,setdata]=useState({
        email:"",
        password:"",
    })

    const handledata=(e)=>{
        setdata({...logindata,[e.target.name]:e.target.value})
    }
    
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
        let Userdata=localStorage.getItem('Userdata')
        console.log(Userdata.email);
        console.log(Userdata.password);
        
        
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