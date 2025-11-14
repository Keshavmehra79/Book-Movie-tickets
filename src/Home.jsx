import React from "react";
import {  Swiper,SwiperSlide } from 'swiper/react';
import { useNavigate } from "react-router-dom";
import 'swiper/css';
import './styling/swipercss.css';
import { Autoplay, Navigation,Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import pic1 from "./assets/coolie2.jpeg"
import pic2 from "./assets/poster.jpg"
import pic3 from "./assets/kantara pro.jpg"
import pic4 from "./assets/poster2.webp"
import pic5 from "./assets/maa.webp"
const swiper=()=>{
  const navigateto=useNavigate()
  const gobuyticket=()=>{
    navigateto("/buyticket")
  }
    return(
        <>
         <Swiper navigation={true} modules={[Autoplay]} 
         autoplay={{delay:2000}}
         Pagination={{clickable:true}}
         loop={true}
         className="mySwiper">
        <SwiperSlide><div className="slidecontainer"><img src={pic1} alt=""/>
                       <button className="button" onClick={gobuyticket}>Get your ticket now</button>
          </div></SwiperSlide>
    
        <SwiperSlide><div className="slidecontainer"><img src={pic2} alt=""   />
          </div></SwiperSlide>


        <SwiperSlide><div className="slidecontainer"> <img src={pic3} alt=""   />
                       <button className="button" onClick={gobuyticket}>Get your ticket now</button>
          </div></SwiperSlide>


        <SwiperSlide><div className="slidecontainer"> <img src={pic4} alt=""   />
          </div></SwiperSlide>


        <SwiperSlide><div className="slidecontainer"> <img src={pic5} alt=""   />
                      <button className="button" onClick={gobuyticket}>Get your ticket now</button>
          </div></SwiperSlide>
       
       
      </Swiper>
        
        </>
    )
}
export default swiper 