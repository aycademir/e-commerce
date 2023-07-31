import React from 'react'


const ProductCard = ({url, name, price}) => {


  return (
   
    <div className='flex ease-in duration-100 bg-slate-50 hover:bg-white flex-col  w-[20vw] min-w-[150px] min-h-[200px] border-[1px] border-[#0000001c]  border-solid rounded m-2'>
        <div className='h-[20vw] w-[100%]  object-cover  min-h-[150px] object-center items-center justify-center'>
          <img className='object-cover h-auto w-auto  min-w-[150px] object-center text-lg' src={url}  alt='product'/>
        </div>
        <div className='pt-3 pb-3 '>
          <h2 className=' text-lg pb-4'>{name}</h2>
          <p className=' text-lg font-semibold text-[#ff5349]'>${price}</p>
        </div>
        
    </div>
 
  )
}

export default ProductCard