import React from 'react'
import { useState, useEffect } from 'react'

import Link from 'next/link'

const ProductCard = ({id, url, name, price, description}) => {


  return (
   
    <div className='flex ease-in duration-100 bg-slate-50 shadow-[0_4px_8px_0_rgba(0,0,0,0.1),0_6px_20px_0_rgba(0,0,0,0.1)] hover:shadow-[0_4px_8px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19)] hover:bg-white flex-col  w-[20vw] min-w-[150px] min-h-[200px] border-[1px] border-[#0000001c]  border-solid rounded m-2'>
      <Link href={`/products/${id}`}>
        <div className='h-[20vw] w-[100%]  object-cover  min-h-[150px] object-center items-center justify-center'>
          <img className='object-cover h-auto w-auto  min-w-[150px] object-center text-lg' src={url}  alt='product'/>
        </div>
        <div className='pt-3 pb-3 '>
          <h2 className=' text-lg pb-4'>{name}</h2>
          <p className=' text-lg font-semibold text-[#D3825F] brightness-110'>${price}</p>
        </div>
      </Link>
        
    </div>
 
  )
}

export default ProductCard