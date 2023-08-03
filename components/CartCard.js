import React, { use } from 'react'
import useShop from '@/pages/ShopContext'
import { useState, useEffect } from 'react';

const CartCard = ({product}) => {

    const id = product.id
    const name = product.title
    const url = product.images
    const price = product.price
    const description = product.description
    
    const {total, products, addToCart, removeFromCart, incrementCount, decreaseCount} = useShop()
    const [count, setCount] = useState(product.count)
    const [clicked, setClicked] = useState("")
    

    useEffect(() => {
        console.log("now the count is: ", count);
        const product = {id, name, url, price, description, count}
        if (clicked==="plus") {
            incrementCount(product)
        } else {
            decreaseCount(product)
        }
        
      }, [count, clicked])

    const handleClickPlus = () => {
        setClicked("plus")
        setCount(count+1);
    }
    

    const handleClickMinus = () => {
        setClicked("minus")
        if (count>1) {
            setCount(count-1);
        } else {
            removeFromCart(product)
        }
    }


  return (
    <div className='flex'>
        {/*<img src={product.url[0]} alt="product" className='h-auto w-[15%]' />*/}
        
        <div>
            <h3>{product.name}</h3>
            <div className="w-[30%] flex text-center justify-center h-[60px]   border-[#000000] rounded-[3px] border-[1px]">
                <button className="w-[30%] font-bold  flex items-center justify-center text-4xl"  onClick={handleClickMinus}><img src="/minus.png" className="w-[50%]"/></button>
                    <div className="flex justify-center items-center text-3xl w-[40%]">
                        <p className="mb-[5px]">{count}</p>
                    </div>
                <button className="  w-[30%] flex items-center  justify-center text-4xl" onClick={handleClickPlus}><img src="/plus.png" className="w-[50%]"/></button>
            </div>
            
            {/*<h3>{product.url[0]}</h3>*/}
            <h3>Quantity: {product.count}</h3>
            

        </div>
        <h3>Price: {product.price*product.count}</h3>
        
    </div>
  )
}

export default CartCard