import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'



export const getStaticPaths = async () => {
    const res= await fetch('https://api.escuelajs.co/api/v1/categories');
    const data = await res.json()
    const paths = data.map((item)=>(
        {params: {id: item.id.toString(),}}
    ))
    return {
        paths, 
        fallback:true,
    }
}



export const getStaticProps = async (context) => {
    const id = context.params.id
    const res= await fetch(`https://api.escuelajs.co/api/v1/categories/${id}`);
    const data = await res.json()

    return {props: {category: data}}
} 



const CategoryPage = ({category}) => {


    const [Data, setData] = useState([]);

    useEffect(()=>{
        
        fetch(`https://api.escuelajs.co/api/v1/categories/${category.id}/products`).then((res)=>res.json()).then((data)=>{setData(data)})
        
    }, [category.id])
    

  return (
    
    <div className=' align-middle justify-center text-center pt-20 text-4xl'>
    
    
        <h1 className='pb-20  underline-offset-8 underline'>{category.name}</h1>
    <div className=' justify-center flex flex-row flex-wrap'>
        {Data.map((product)=>{

            return(
                
                    <ProductCard 
                        id={product.id}
                        key={product.id}
                        url={product.images[0]} 
                        name={product.title} 
                        price={product.price}
                        description={product.description}
                    />
               
            ) 
            
            
            /*if (product.category.name===category.name) {
                return <ProductCard 
                                key={product.id}
                                url={product.images[0]} 
                                name={product.title} 
                                price={product.price}/>
            } */
        })}
    </div>
       
   
    
    </div>
  )
}



export default CategoryPage