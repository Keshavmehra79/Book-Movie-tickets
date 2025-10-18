import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const footer=()=>{
    return(
        <>
        
       <footer id="footer">
        <div className="sect">
            <div className="sec"><div className="iconfoot"><IoCall        /> </div><p style={{"fontSize":"medium"}}>49,New ashoka garden<br></br><h4>Bhopal,India</h4></p>  </div>
            <div className="sec"><div className="iconfoot"><FaLocationDot /></div><h4>+91 7909322992</h4> </div>
            <div className="sec"><div className="iconfoot"><MdEmail       /></div> <Link to="/" style={{"text-decoration":"none"}}><h4>mehrakeshav332@gmail.com</h4></Link> </div>
        </div>

            <div className="sect">
                <h1>About the company</h1>
                <p>Hello Guys, I am Keshav frontend developer<br></br> and i have made this web to showcase my frontend skills <br></br> so please feel free to ask me anything if you get anything or about any mistake <br></br>or error in layout of this project</p>
                <FaFacebookF />
                <FaGithub/>
                <FaLinkedin/>
                <RiInstagramFill/>
            </div>

       </footer>
        </>
    )
}
export default footer