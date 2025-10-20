import React from "react";
import { useRef,useEffect } from "react";
import Typed from "typed.js"
import offer from "./assets/poster50.png"
import cardimg from "./assets/cardimg.jpg"
import cardimg2 from "./assets/cardimg2.jpg"
const Movies=(props)=>{

    const {data1,data2}=props;
    
    const textref=useRef(null)
    useEffect(()=>{
        const typed=new Typed(textref.current,{
            strings:["50% discount on two or more tickets","Quick fast","Offer for students Only"],
            typeSpeed:80,
            backSpeed:50,
            loop:true,
            
        });
        
    
    return ()=>{
        typed.destroy();
    }
},[]);
    return(
        <>
        {/* section1 */}
        <div id="textoffer" >
       <div className="offer" >
         <h1  ref={textref}></h1>
        <h3>Quick fast and get cashback on refrrel bank cards or payment</h3>
         <p>
            Pay and buy two or more tickets to save 50% amount <br></br>of total price of one ticket 
            don't miss this chance or refer to earn coins with your friends 
         </p>
       </div>

       <div  className="offer">
        <img src={offer} alt="" id="offeriimg" />
       </div>
            </div>
                                        {/* section2 */}

                <h1 id="head1">Top movies</h1>
               <center><hr style={{"width":"30%"}}/></center> 
            <div id="movies">
                <div className="thismovies">
                    <img src={cardimg} alt="" className="cardimg"/>
                    <p>action/thriller</p>
                    <h2>{data1.movie}</h2>
                    <p>rating-4.0</p>
                    <p>screen time- 2h50m</p>
                    <button className="btn11">Book now</button>
                </div>

                <div className="thismovies">
                    <img src={cardimg2} alt="" className="cardimg"/>
                    <p>action/thriller</p>
                    <h2>War 2</h2>
                    <p>rating-4.3</p>
                    <p>screen time= 2h50m</p>
                    <button className="btn11">Book now</button>
                    
                </div>
            </div>


        </>
    )
}
export default Movies