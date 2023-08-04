import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';

/*
export const getStaticPaths = async () => {
    const res= await fetch('https://api.escuelajs.co/api/v1/categories');
    const data = await res.json()
    const paths = data.map((item)=>(
        {params: {id: item.id.toString()}}
    ))
    return {
        paths, 
        fallback:true,
    }
}


export const getStaticProps = async ({params}) => {
    const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${params.id}`);
    const data = await res.json();

    return {
        props: {categories: data}
    }
}
*/

// export const getStaticProps = async () => {
//     const res = await fetch('https://api.escuelajs.co/api/v1/categories');
//     const data = await res.json();

//     return {
//         props: {categories: data}
//     }
// }



const Navbar = () => {
    const [scrollDirection, setScrollDirection] = useState(null);
    const [Data, setData] = useState([])

    useEffect(()=>{
        // const res =  fetch('https://api.escuelajs.co/api/v1/categories');
        // const data = res.json();
        // setData(data)

        fetch('https://api.escuelajs.co/api/v1/categories').then((res)=>res.json()).then((data)=>{
           setData(data);
        })
    },[])

   
    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollDirection = () => {
        const scrollY = window.scrollY;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
            setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
        };
        window.addEventListener("scroll", updateScrollDirection); // add event listener
        return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
        }
    }, [scrollDirection]);

    // console.log(categories);

  return (
    <>
    <nav className={`bg-[white] w-full block transition-[top] duration-[0.3s] sticky ${ scrollDirection === "down" ? "-top-20" : "top-0"} h-20 flex justify-between pr-[5vw] pl-[1vw] align-middle border-b z-[100]`}>
      
        <div className='pl-5'>
            <Link href='/'>
                <Image src='/bf4b71a8b1424968b754f2e89ce4826f (1).png' width={70} height={70} className='object-cover object-center pt-1' alt='logo'/>
            </Link>
        </div>

        <div className='flex items-center'>
            <SearchBar/>
        </div>
        
        <div className=' items-center justify-center flex '>
            {Data.map((item, i) =>{
                if (i<5) {
                    return <Link href={`/categories/${item.id}`} className='float-left  block text-[black] ease-in-out duration-400 text-center no-underline text-[17px] p-[15px] hover:underline hover:underline-offset-2 ' key={item.id}>{item.name}</Link>
                }
            })}
        </div>

        <div className='flex items-center'>
            <Link href="/cart" ><img src='/cart.png' alt='cart' className='h-[30px]'/></Link>
        </div>


        
            
        
    </nav>
    
  </>
  
  )
}

export default Navbar