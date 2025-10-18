import React from "react";
const login=()=>{
    return(
        <>
        <div id="login">    
            
       <form onSubmit={""}>
        <h1>Login now</h1>
        <hr />
            <input type="email" placeholder="Email"/><br></br>
            <input type="password" placeholder="Password"/><br></br>
            <button type="submit" className="btn">Login</button>
        </form>
        
        </div>
 
        </>
    )
}
export default login