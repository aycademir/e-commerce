import React from 'react'
import Link from 'next/link'

const Footer = () => {
    const footerData = [
        ["About Us", ["Who we are", "Careers", "Contact Us", "Sustainability"]],
        ["Discounts", ["Current Discounts", "Elite Membership", "Gift Ideas", "Showee Privilages"]],
        ["Help", ["FAQ's","Elite Memberships","Returns & Refunds"]],
        ["Social media", ["Facebook Page","Instagram Account"]]
    ]
    

  return (
    <footer className='bg-[#10022f] flex p-8'>
        {footerData.map((heading)=>{
            return (
                <div className='flex flex-col pr-[10vw]'>
                <Link href="/" className='hover:underline text-xl font-bold pb-4 text-white'>{heading[0]}</Link>
                {heading[1].map((subheading)=>{
                    return (
                        <Link href='/' className='hover:underline text-white'>{subheading}</Link>
                    )
                })}
                </div>
            )
        })}

    </footer>
  )
}

export default Footer