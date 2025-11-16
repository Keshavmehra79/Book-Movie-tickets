import React from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert2";
const Nav=()=>{
    const navigate=useNavigate()
    let checksignup=(e,path)=>{
         let storage=localStorage.getItem('Userdata')
        if(!storage){
            e.preventDefault()
            swal.fire("Information!","Please login or signup first","info");
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