import ProductCard from '@/components/ProductCard';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'



export const getServerSideProps = async ({query}) => {

    const res= await fetch('https://api.escuelajs.co/api/v1/products');
    const data = await res.json()

    return {props: {Data: data}}
} 


const searchResults = ({Data}) => {


    console.log("sdadsdas");
    const router = useRouter();
    //const id = router.asPath.substring(15, router.asPath.length);
    const id = router.query.text.toLowerCase()
    console.log(id);

   
    
    const newData= Data.filter((item)=> item.title.toLowerCase().includes(id))

    const arr = id.split(" ")
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase()+ arr[i].slice(1);
    }
    const newId = arr.join(" ")

    return (
      <div className=' align-middle justify-center text-center pt-20 text-4xl'>
      <h1 className='pb-20  underline-offset-8 underline'>{newId}</h1>
      <div className=' justify-center flex flex-row flex-wrap'>
        {newData.length===0 ? 
          <h3>No results were found... </h3>
          : newData.map((product)=>{
                return <ProductCard 
                key={product.id}
                id={product.id}
                url={product.images[0]} 
                name={product.title} 
                price={product.price}
                description={product.description}
                />
          })
        }
        
          
      </div>
      </div>
    )
}

export default searchResults