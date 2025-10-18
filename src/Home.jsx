import React from "react";
import {  Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './styling/swipercss.css';
import { Autoplay, Navigation,Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import pic1 from "./assets/chaava.webp"
import pic2 from "./assets/coolie2.jpeg"
import pic3 from "./assets/kantara pro.jpg"
import pic4 from "./assets/maa.webp"
import pic5 from "./assets/sitare Zameen par 2.avif"
import pic6 from "./assets/war22.jpg"
const swiper=()=>{
    return(
        <>
         <Swiper navigation={true} modules={[Autoplay]} 
         autoplay={{delay:1000}}
         Pagination={{clickable:true}}
         loop={true}
         className="mySwiper">
        <SwiperSlide><div className="slidecontainer"><img src={pic1} alt=""/>
                       <button className="button">Get your ticket now</button>
          </div></SwiperSlide>
        <SwiperSlide><div className="slidecontainer"><img src={pic2} alt="" />
                        <button className="button">Get your ticket now</button>      
          </div></SwiperSlide>
        <SwiperSlide><div className="slidecontainer"><img src={pic3} alt=""   />
                       <button className="button">Get your ticket now</button>
          </div></SwiperSlide>
        <SwiperSlide><div className="slidecontainer"> <img src={pic4} alt=""   />
                       <button className="button">Get your ticket now</button>
          </div></SwiperSlide>
        <SwiperSlide><div className="slidecontainer"> <img src={pic5} alt=""   />
                      <button className="button">Get your ticket now</button>
          </div></SwiperSlide>
        <SwiperSlide><div className="slidecontainer"><img src={pic6} alt=""   />
                      <button className="button">Get your ticket now</button>
          </div></SwiperSlide>
        <SwiperSlide><div className="slidecontainer"><img src={pic1} alt=""   />
                     <button className="button">Get your ticket now</button>
          </div></SwiperSlide>
        <SwiperSlide><div className="slidecontainer"> <img src={pic2} alt=""   />
                     <button className="button">Get your ticket now</button>
          </div></SwiperSlide>
        <SwiperSlide><div className="slidecontainer"> <img src={pic3} alt=""   />
                      <button className="button">Get your ticket now</button>
          </div></SwiperSlide>
      </Swiper>
        
        </>
    )
}
export default swiper 