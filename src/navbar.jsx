import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Nav=()=>{
    const navigate=useNavigate()
    let checksignup=(e,path)=>{
         let storage=localStorage.getItem('Userdata')
        if(!storage){
            e.preventDefault()
            alert("Please login or signup first")
            navigate("/signup")
        } 
        else {
            navigate(path)
        }
    }
       
    return(
        <>
        <nav id="nav">
            <ul className="content">
                <li className="deco"><Link to="/" >Home</Link></li>
                <li className="deco"><Link to="/movies" onClick={(e)=>(checksignup(e,"/movies"))}>Movies</Link> </li>
                <li className="deco"><Link to="/tickets" onClick={(e)=>(checksignup(e,"/tickets"))}>View tickets</Link></li>
                <li className="deco"><Link to="/contact" onClick={(e)=>(checksignup(e,"/contact"))}>Help</Link></li>
            </ul>
        </nav>
        </>
    )
}
export default Nav