import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const Product = () => {
    const [Data, setData] = useState([])

    const router = useRouter();
    const id = router.query.id;

    useEffect(()=>{
        fetch(`https://api.escuelajs.co/api/v1/products/${id}`).then((res)=>res.json()).then((data)=>setData(data)).then(console.log(Data))
    })
  return (
    <div>
        <h1>this is product {Data.title} cnjsdlckn {id}</h1>
    </div>
  )
}

export default Product