
import { Inter } from 'next/font/google'
import Slide from '@/components/Slide'
import MainProductSlide from '@/components/MainProductSlide'
import Breadcrumb from '@/components/Breadcrumb';
import BreadcrumbItem from "@/components/BreadcrumbItem";



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
      </div>
    </div>
  )
}


 