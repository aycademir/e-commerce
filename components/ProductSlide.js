import Link from 'next/link'
import React, { useState } from 'react'

const ProductSlide = ({images}) => {
    const [currentImage, setCurrentImage] = useState(images[0])

    const handleClick = (e) => {

        console.log(e);
        setTimeout(()=>{
            setCurrentImage(e)
        }, 100)
        
    }

  return (
    <div className='flex justify-between'>
        <div className='w-[18%]'>
            {images.map((image, i)=>{
                return <button key={i} onClick={()=>handleClick(image)} className='ease-in duration-100 focus:border-[2px] hover:border-[2px] focus:border-[#D3825F] hover:border-[#D3825F]'><img src={image} alt='product'/></button>
            })}
        </div>
        <div className='w-[80%]'>
            <img src={currentImage} alt='product' />
        </div>

        

    </div>
  )
}

export default ProductSlide