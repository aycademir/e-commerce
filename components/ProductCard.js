import React from 'react'


const ProductCard = ({url, name, price}) => {
  return (
    <div className='flex flex-col h-54 w-54'>
        <img className='object-cover object-center' src={url} width={300} height={300} alt='product'/>
        <h2 className=''>{name}</h2>
        <p className=' font-semibold'>${price}</p>
    </div>
  )
}

export default ProductCard