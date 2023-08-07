import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
export default function App({products}) {
  return (
    <>
      <Swiper
        style={{
            "--swiper-navigation-color": "white",
            "--swiper-pagination-color": "white",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
            marginTop: "100px",
            marginBottom: "100px"
          }}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
        }}
        slidesPerView={3}
        spaceBetween={30}
        /*pagination={{
          clickable: true,
        }}*/
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Pagination, Autoplay, Navigation, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {products.map((item,i)=>{
            if(i<15){
                return (
                <SwiperSlide key={item.id}>
                    <div className='flex flex-col justify-center items-center'>
                    <img src={item.images}/>
                    <h3 className=' font-semibold p-1'>{item.title}</h3>
                    <h3 className=' font-semibold text-[#D3825F] brightness-110'>${item.price}</h3>
                    </div>
                    
                </SwiperSlide>
                )
            }
        })}
        
       
      </Swiper>
    </>
  );
}
