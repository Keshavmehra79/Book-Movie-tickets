import React, { useEffect, useState } from "react";
import axios from "axios";
const Tickets=()=>{
    const[mydata,setdata]=useState([])
    const getdata=()=>{
          axios.get(`http://localhost:3000/ticketdata`).then((res)=>{
            setdata(res.data)
            alert("Data fetched ...........")
        }).catch((err)=>{
            console.log(err);
            
        })
    }


    useEffect(()=>{
        axios.get(`http://localhost:3000/ticketdata`).then((res)=>{
            setdata(res.data)
            alert("Data fetched ...........")
        }).catch((err)=>{
            console.log(err);
            
        })
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
    return(
        <>
        <table >
            <thead><tr>
                 <th>Id</th>
                <th>Movie</th>
                <th>Date</th>
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
                        <tr>
                            <td>{e.id}</td>
                            <td>{e.moviename}</td>
                            <td>{e.date}</td>
                            <td>{e.price}</td>
                            <td>{e.people}</td>
                            <td>{e.people*e.price}</td>
                            <td>Edit</td>
                            <td onClick={()=>{del(e.id)}}>Delete</td>
                        </tr>
                    ))
                }
            </tbody>
            </table>        
        </>
    )
}
export default Tickets