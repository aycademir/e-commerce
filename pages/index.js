
import { Inter } from 'next/font/google'
import Slide from '@/components/Slide'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })


export const getStaticProps = async () => {
  const res= await fetch("https://api.escuelajs.co/api/v1/categories");
  const data = await res.json()

  return {props: {category: data}}
} 


export default function Home({category}) {
  return (
    <div className='px-[5vw] py-[5vh]' >
      <div className='w-[90vw]'>
       
        <Slide data={category}/>

      
      </div>
    </div>
  )
}


/* onClickThumb={(item, i) => {
          router.push(`/categories/${data.at(i).id}`)
        }}
        */ 