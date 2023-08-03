
import React from "react";
import ProductImages from "@/components/ProductImages"
import Link from "next/link";
import { useState, useEffect } from 'react'
import useShop from '@/pages/ShopContext'

export const getStaticPaths = async () => {
  const res= await fetch('https://api.escuelajs.co/api/v1/products');
  const data = await res.json()
  const paths = data.map((item)=>(
      {params: {id: item.id.toString()}}
  ))
  return {
      paths, 
      fallback:false,
  }
}


export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res= await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
  const data = await res.json()

  return {props: {category: data}}
} 




const Product = ({category}) => {
  const id = category.id
  const name = category.title
  const url = category.images
  const price = category.price
  const description = category.description

  const {total, products, addToCart, removeFromCart, incrementCount, decreaseCount} = useShop()
  const [count, setCount] = useState(1)
  


  const handleClickPlus = () => {
    setCount(count+1);
  }

  const handleClickMinus = () => {
    if (count >1) {
      setCount(count-1)
    } 
  }

  const handleAdd = () => {
    const product = {id, name, url, price, description, count}

    
      addToCart(product)
    
    
    setCount(1)
  }


  
  return (
    <>
      <div className="flex justify-between px-[6%] py-[8%]">
        {/*<ProductImages images={category.images}/>*/}
        <div className="w-[45vw] h-[70vh] bg-slate-500"></div>
        <div className="w-[35vw]">
          <h2 className=" font-bold text-5xl pb-[40px]">{ category?.title }</h2>
          <h3 className="pb-[20px] text-[20px]">{ category?.description }</h3>
          <h3 className=" font-medium text-2xl pb-[40px]">${ category?.price }</h3>
          <div className="flex items-center justify-between">
            <div className="w-[30%] flex text-center justify-center h-[60px]   border-[#000000] rounded-[3px] border-[1px]">
              <button className="w-[30%] font-bold  flex items-center justify-center text-4xl"  onClick={handleClickMinus}><img src="/minus.png" className="w-[50%]"/></button>
              <div className="flex justify-center items-center text-3xl w-[40%]">
                  <p className="mb-[5px]">{count}</p>
              </div>
                
              <button className="  w-[30%] flex items-center  justify-center text-4xl" onClick={handleClickPlus}><img src="/plus.png" className="w-[50%]"/></button>
            </div>
            <button onClick={handleAdd} className=" ease-in duration-100 bg-[#613a43] hover:bg-white hover:text-black hover:font-bold h-[60px] rounded-[3px]  hover:shadow-[0_4px_8px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.05)] w-[60%] uppercase text-xl font-semibold text-white">Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product
