import React, { useState } from "react";
import axios from "axios"
const Buyticket=()=>{
    const[formdata,setdata]=useState({
        category:"",
        selecttime:"",
        moviename:"",
        date:"",
        people:"",
        price:""

    })
    const handlechange=(e)=>{
           setdata({...formdata,[e.target.name]:e.target.value})
           
    }

    const senddata=(e)=>{
        e.preventDefault();
        axios.post(`http://localhost:3000/ticketdata`,{...formdata,price:250}).then(()=>{

            alert("Data sent succefully........")
        }).catch((err)=>{
            console.log(err);
            
        })
    }

    return(
        <>
        <div id="ticketbody">
            <div id="ticketform">
                <h1>Book Your Tickets</h1>
                <form onSubmit={senddata}>
                Category<br></br>
                <select name="category" id="" value={formdata.category} onChange={handlechange}>
                    <option value="" disabled selected hidden>select category</option>
                    <option >Adult</option>
                    <option >Child</option>
                    <option >Senior</option>
                </select><br></br>
                Select Time<br></br>
                <select name="selecttime" id="" value={formdata.selecttime} onChange={handlechange}>
                    <option value="" disabled selected hidden>select Time</option>
                    <option value="08am:00-10:00am">08am:00-10:00am</option>
                    <option value="12pm:00-03:00pm">12pm:00-03:00pm</option>
                    <option value="08:00pm-10:00pm">08:00pm-10:00pm</option>
                </select><br></br>
               Movie Name<br></br>
                <input type="text" name="moviename" value={formdata.moviename}  onChange={handlechange} placeholder="Enter movie name" /><br></br>
                Booking Date <br></br>
                <input type="date" name="date" value={formdata.date} placeholder="dd-mm-yyyy"  onChange={handlechange}/><br></br>

                People<br></br>
                <input type="text" name="people" value={formdata.people} placeholder="Enter number of people"  onChange={handlechange} />
<br></br><br></br>
                <button type="submit">Book Now </button>
                </form>
            </div>
        </div>
        
        </>
    )
}

export default Buyticket