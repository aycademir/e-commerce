import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "../styles/Responsive.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const images = [
  "https://wallpaperset.com/w/full/d/d/a/156225.jpg",
  "https://img2.wallspic.com/crops/8/7/9/9/29978/29978-technical_support-interior_design-desk-furniture-table-1920x1080.jpg",
  "https://wallpaperset.com/w/full/0/1/8/156429.jpg",
  "https://cdn.wallpapersafari.com/39/81/L4XZcH.jpg",
  "https://wallpaperaccess.com/full/1347458.jpg"
]


export default function ResponsiveCarousel({data}) {
  
  const router = useRouter();

  return (
    
      <Carousel
        showArrows={true}
        autoFocus = {true}
        autoPlay={true}
        interval={5000}
        swipeable={true}
        showIndicators={true}
        stopOnHover={true}
        infiniteLoop={true}
        dynamicHeight={false}
        emulateTouch={true}
        
        className={styles.mySwiper}
       
      >
      
        {images.map((item, i) => (
           
              <div key={i} className={styles.swipItem}>
                
                  
                  <img src={item} alt="slides" />
                  

                
                  
                
                 
                  <Link href={`/categories/${data.at(i).id}`}>
                  <div className={styles.backgroundd}></div>
                  
                  <div className={styles.background}></div>
                  <div className={styles.detail}>
                    <h2>{data.at(i).name}</h2>
                  </div>
                  </Link>
               </div>
               
              
            
                
           
        )
          
        )}
      
       
      </Carousel>
 
  );
}
