import React, { useEffect } from 'react'
import useShop from './ShopContext'
import CartCard from '@/components/CartCard'
import dynamic from 'next/dynamic'

const Cart = () => {
  const {total, products, addToCart, removeFromCart, incrementCount, decreaseCount} = useShop()


  return (
    <div className=' p-14 flex justify-between'>
      <div className='w-[80%]'>
        
        {products.map((product) => {
          return <CartCard key={product.id} product={product}/>
        
        })}
      </div>
      {console.log(total)}
      <div className=' w-[17%] h-fit shadow-[rgba(149,157,165,0.2)_0px_8px_24px]'>
        <h3 className='p-5  font-medium'>Subtotal: </h3>
        <h3 className='text-center font-semibold text-4xl pb-8'>${total}</h3>
        <button className='bg-[#613a43] ease-in duration-100 h-[80px] rounded-b-[3px] w-[100%] text-xl text-white hover:shadow-[rgba(0,0,0,0.2)_0px_18px_50px_-10px] hover:brightness-110'>Complete Shopping</button>
      </div>
    </div>
  )
}

export default dynamic(()=>Promise.resolve(Cart), {ssr: false})