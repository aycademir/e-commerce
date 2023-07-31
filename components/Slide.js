import React, { useRef,useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


const images = [
  "https://wallpaperset.com/w/full/f/3/6/156289.jpg",  
  "https://wallpaperset.com/w/full/e/7/b/156231.jpg",
  "https://wallpaperset.com/w/full/c/7/4/156276.jpg",
  "https://wallpaperset.com/w/full/2/7/c/156194.jpg",
  "https://wallpaperset.com/w/full/d/d/a/156225.jpg",
]

export default function App() {
    const [Data, setData] = useState([])
    useEffect(()=>{
        fetch("https://api.escuelajs.co/api/v1/categories").then((res)=> res.json()).then((data)=> setData(data))
    })

  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {Data.map((item,i)=>{
            if (i<5) {
                return(
                    <SwiperSlide >
                        <img className="w-[100%] h-auto" src={images[i]} alt={"slide"+i}></img>
                    </SwiperSlide>
                )
            }
        })}
       
      </Swiper>
    </>
  );
}
