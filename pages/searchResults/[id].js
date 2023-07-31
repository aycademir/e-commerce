import ProductCard from '@/components/ProductCard';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const searchResults = () => {
    const [data, setData] = useState([]);

    const router = useRouter();
    const id = router.query.id;
   

    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
        .then((res)=>res.json())
        .then((data)=>{setData(data)})
    },[id])
    
    const newData= data.filter((item)=> item.title.toLowerCase().includes(id))

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
                url={product.images[0]} 
                name={product.title} 
                price={product.price}/>
          })
        }
        
          
      </div>
      </div>
    )
}

export default searchResults