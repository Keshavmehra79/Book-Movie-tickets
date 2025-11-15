import React from "react";
import { IoMdHome } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
const Contact=()=>{
    return(
        <>
        <section id="sec1">

            <h1>Contact us</h1>
            <p>A "Contact Us" page is a crucial gateway for communication, serving as the bridge between a business and its website visitors,<br></br> potential leads, and existing customers. Its primary function is to foster transparency, build trust, and offer clear, accessible channels for inquiries, feedback, and support</p>

            <section id="sec2">
                <div id="divs">
                    <div className="icons"><IoMdHome/></div>
                        <h4 className="Add">Address</h4>
                      Pant nagar,semra road<br></br>Ashoka garden -Bhopal (M.p)
                     <div className="icons"><IoCall/></div>
                        <h4 className="Add">Phone</h4>
                        +917909322992
                     <div className="icons"><MdEmail/></div>
                        <h4 className="Add">Email</h4>
                        mehrakeshav332@gmail.com
                </div>
                 
            
            <div id="msgdiv">
                <h1>Send Message</h1>
                <input type="text" placeholder=" Title" />
                <input type="text" placeholder="Description" /><br></br>
                <button className="sendbtn">Send</button>
            </div>
            
            </section>
            
            </section>        
        </>
    )
}

export default Contact