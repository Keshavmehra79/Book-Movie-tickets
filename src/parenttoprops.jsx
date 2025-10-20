import React from "react";
import Movies1 from "./movies.jsx"
const Propsparent=()=>{
    const coolie={
        movie:"Coolie",
        rating:4.0,
    }
    const war={
        movie:"War2",
        rating:4.3,
    }
    return(
        <>
        <Movies1 data1={coolie} data2={war}/>
        
        </>
    )
}
export default Propsparent