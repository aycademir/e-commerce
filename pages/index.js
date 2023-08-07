
import { Inter } from 'next/font/google'
import Slide from '@/components/Slide'
import MainProductSlide from '@/components/MainProductSlide'
import Breadcrumb from '@/components/Breadcrumb';
import BreadcrumbItem from "@/components/BreadcrumbItem";
import HomepagePictures from '@/components/HomepagePictures';



const inter = Inter({ subsets: ['latin'] })


export const getStaticProps = async () => {
  const res= await fetch("https://api.escuelajs.co/api/v1/categories");
  const data = await res.json()

  const res2= await fetch("https://api.escuelajs.co/api/v1/products");
  const data2 = await res2.json()
  
  console.log(data2);

  return {props: {categories: data, products: data2}}
} 


export default function Home({categories, products}) {
  return (
    <div className='px-[5vw] py-[5vh]' >
      <div className='w-[90vw]'>
       
        <Slide data={categories}/>
        <MainProductSlide products={products}/>
        <div className='w-[100%] absolute left-0 center h-[250px] bg-[#613a43]'>
          <p className=' font-semibold text-white text-5xl pl-28 pt-10'>
            Shop the Best at Showee!
          </p>
          <p className=' w-[90%] text-white text-xl pl-28 pt-10'>
          At Showee, we're dedicated to bringing you an exceptional shopping experience like no other. Step into a world where your desires meet convenience and style. With an extensive and thoughtfully curated selection of products, we're here to cater to your every need.
          </p>
        </div>
        <HomepagePictures/>
      </div>
    </div>
  )
}


 