import React from "react";

const Buyticket=()=>{

    return(
        <>
        <div id="ticketbody">
            <div id="ticketform">
                <h1>Book Your Tickets</h1>
                <form action="">
                Category<br></br>
                <select name="" id="" placeholder="Select Category">
                    <option >Adult</option>
                    <option >Child</option>
                    <option >Senior</option>
                </select><br></br>
                Show Timing<br></br>
                <select name="" id="" value="Select Time">
                    <option value="">8:00am to 10:00am</option>
                    <option value="">12:00am to 03:00am</option>
                    <option value="">8:00pm to 10:00pm</option>
                </select><br></br>
                Name<br></br>
                <input type="text" placeholder="Enter name" /><br></br>
                Booking Date <br></br>
                <input type="date" placeholder="dd-mm-yyyy"/><br></br>

                People<br></br>
                <input type="text" placeholder="Enter number of people" />
<br></br><br></br>
                <button type="submit">Book Now </button>
                </form>
            </div>
        </div>
        
        </>
    )
}

export default Buyticket