import React, { useEffect, useState } from "react";
import swal from 'sweetalert2';
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const Tickets=()=>{
    const[mydata,setdata]=useState([])
    const getdata=()=>{
          axios.get(`http://localhost:3000/ticketdata`).then((res)=>{
            setdata(res.data)
        }).catch((err)=>{
            console.log(err);
            
        })
    }


    useEffect(()=>{
    getdata()
    }
   ,[])

const del=(id)=>{
    
    axios.delete(`http://localhost:3000/ticketdata/${id}`).then(()=>{
        alert("Deleted")
        getdata()
}).catch((err)=>{
    console.log(err)
})
}    


////////////////EDIT data
const[formdata,setformdata]=useState({
        category:"",
        selecttime:"",
        moviename:"",
        date:"",
        people:"",
        price:""

    })

     const handlechange=(e)=>{
           setformdata({...formdata,[e.target.name]:e.target.value})
           
    }





const [form,setedit]=useState(null)

let openform=(user)=>{
    setedit(user)
    setformdata({
        category:user.category,
        selecttime:user.selecttime,
        moviename:user.moviename,
        date:user.date,
        people:user.people,
        
    })
    
}

const putdata=(e)=>{
    e.preventDefault()
    axios.put(`http://localhost:3000/ticketdata/${form.id}`,{...formdata,price:250}).then(()=>{
        getdata()
        alert("Edited succefully")
    }).catch((err)=>(
        console.log(err)
        
    ))
    setedit(null)
}
    return(
        <>
        <table id="tb1">
            <thead id="head"><tr>
                <th>Movie</th>
                <th>Category</th>
                <th>Date</th>
                <th>Time</th>
                <th>Price</th>
                <th>People</th>
                <th>Total</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
               
            </thead>
            <tbody>
                {
                    mydata.map((e)=>(
                        <tr key={e.id} >
                            <td>{e.moviename}</td>
                            <td>{e.category}</td>
                            <td>{e.date}</td>
                            <td>{e.selecttime}</td>
                            <td>{e.price}</td>
                            <td>{e.people}</td>
                            <td>{e.people*e.price}</td>
                            <td onClick={()=>openform(e)} id="editbtn"><FaEdit/></td>
                            <td onClick={()=>{del(e.id)}} id="deletebtn"><MdDelete/></td>
                        </tr>
                    ))
                }
            </tbody>
            </table>  
            {
                (form && (
                     <form onSubmit={putdata}>
                Category<br></br>
                <select name="category" value={formdata.category} onChange={handlechange}>
                    <option value="" disabled selected hidden>select category</option>
                    <option >Adult</option>
                    <option >Child</option>
                    <option >Senior</option>
                </select><br></br>
                Select Time<br></br>
                <select name="selecttime" id="" value={formdata.selecttime} onChange={handlechange}>
                    <option value="" disabled selected hidden>select time</option>
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
                <button type="submit">Submit</button>
                </form>
                ))
            }      
        </>
    )
}
export default Tickets