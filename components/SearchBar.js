import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'


const SearchBar = () => {
    const router = useRouter()
    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        router.push("/searchResults/"+search.toLowerCase())
    }
  return (
    <div >
        <form onSubmit={handleClick} className=' flex items-center justify-end '>
        
        <input 
            onChange={handleChange}
            value={search} 
            placeholder='Search...'
            id='search'
            type="text" 
            className='border h-10 w-[30vw] bg-slate-100 border-none rounded-[2px] text-slate-700 p-3 ease in duration-200  outline-none focus:outline-[#D3825F] focus:brightness-110 focus:bg-white '
        />
        <button href="/"  disabled={search===""} className='absolute items-end mr-5'>
        <Image src="/icons8-search-50.png" width={25} height={25}  alt='search'/>
        </button>
        </form>
    </div>
  )
}

export default SearchBar