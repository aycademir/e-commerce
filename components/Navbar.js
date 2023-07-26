import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

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
    <nav className={`bg-[white] w-full block transition-[top] duration-[0.3s] sticky ${ scrollDirection === "down" ? "-top-20" : "top-0"} h-20 flex`}>
        <div className=''>
            <Link href='/'>
                <Image src='/bf4b71a8b1424968b754f2e89ce4826f (1).png' width={80} height={80} className='object-cover object-center' alt='logo'/>
            </Link>
        </div>
        
        <div>
            {Data.map((item) =>{
                return <Link href={`/categories/${item.id}`} className='float-left block text-[black] text-center no-underline text-[17px] p-[15px] hover:underline ' key={item.id}>{item.name}</Link>
            })}
        </div>
        
            
        
    </nav>
    
  </>
  
  )
}

export default Navbar