import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup=()=>{
    const[formdata,setdate]=useState({
        name:"",
        age:"",
        email:"",
        password:""

    })
    
    const nvgt=useNavigate()
    const loginpress=()=>{
        let data=localStorage.getItem('Userdata')
        if(!data){
            alert("Please create an account first then login")
            return
        }
        else{
            nvgt("/login")
        }
    }
    const handlechange=(e)=>{
        setdate({
            ...formdata,[e.target.name]:e.target.value
        })
    }


    const handlesubmit=(e)=>{
        e.preventDefault()
        if(formdata.name==""){
            alert("Please Enter your full name")
            return
        }
        else if(formdata.age==""){
            alert("Please enter your age")
            return
        }
        
        else if(formdata.age==""){
            alert("Please enter your age")
            return
        }
        else if(formdata.age==""){
            alert("Please enter your age")
            return
        }
        else if(formdata.age.length>3){
            alert("Enter Your valid Age")
            return
        }
        else if(formdata.email==""){
            alert("Enter Your email")
            return
        }
        else if(!(formdata.email.includes('@gmail.com' || '@yahoo.com'))){
            alert("Enter your valid email")
            return
        }
        else if(formdata.password==""){
            alert("Make your pssword")
            return
        }
        else if(!(formdata.password.match(/[!@#$%^&*]/))){
            alert("Please Make strong Paswword with include special symbol")
            return
        }
        localStorage.setItem('Userdata',JSON.stringify(formdata))
        alert("Submitted")
        nvgt("/login")

    }
    return(
        <>
       
        <div id="signup" >
            <h1>Register Now</h1>
           <hr />
        <form onSubmit={handlesubmit}>
             Name:<br></br>
            <input type="text" name="name" value={formdata.name} onChange={handlechange} placeholder="Enter your name" /><br></br>
             Age:<br></br>
            <input type="number" name="age" value={formdata.age}  onChange={handlechange}   placeholder="Enter your age" /><br></br>
             Email:<br></br>
            <input type="email" name="email" value={formdata.email} onChange={handlechange} placeholder="Enter your email" /><br></br>
             Password:<br></br>
            <input type="password" name="password" value={formdata.password} onChange={handlechange}placeholder="Create your password"/><br></br><br></br>
            <button className="btn" type="submit">Sign-Up</button><br></br>
            <p>Or</p>

        </form>
            <button className="btn"  onClick={loginpress}>Login</button>
        </div>
        
        </>
    )
}
export  default Signup