import React from "react";
import Child from "./child.jsx"
const Parent=()=>{
    let data={
        name:"keshav",
        age:22,
    }
    return <>
    <Child Send={data}/>
    
    
    </>
}
export default Parent