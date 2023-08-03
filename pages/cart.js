import React from 'react'
import useShop from './ShopContext'
import CartCard from '@/components/CartCard'

const Cart = () => {
  const {total, products, addToCart, removeFromCart, incrementCount, decreaseCount} = useShop()
  return (
    <div>Cart
      {products.map((product, i) => {
        return <CartCard key={i} product={product}/>
       
      })}
    </div>
  )
}

export default Cart