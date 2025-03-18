"use client";
import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { MdOutlineTravelExplore } from "react-icons/md";

type Props = {
    openNav: () => void
}

const Nav = ({openNav}:Props) => {
    const [navBg,setNavBg]=useState(false);

    useEffect(() => {
        const handler=()=>{
            if(window.scrollY>=90) setNavBg(true);
            if(window.scrollY<=90) setNavBg(false);
        }
        window.addEventListener('scroll',handler);
        return ()=>window.removeEventListener('scroll',handler);
        }, [])
               
  return (
    <div className={`${navBg?"bg-blue-950 shadow-md":"fixed"
    } transition-all duration-200 h-[12vh] z-[1000] fixed w-full`}
    >
      <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
        {/* Logo */}
        <div className='flex items-center '>
            <div className='w-11 h-11 bg-rose-500 rounded-full flex items-center justify-center flex-col'>
            <MdOutlineTravelExplore className='w-6 h-6 text-white '/>
            </div>
            <h1 className='text-xl md:text-2xl p-2 text-white uppercase font-bold'>Arnavut Kaldırımı</h1>
        </div>
            {/* Nav Links */}
            <div className='sm:hidden lg:flex lg:items-center lg:space-x-8 '>
                {navLinks.map((link) => {
                    return (<Link href={link.url} key={link.id}>
                        <p className='relative text-white text-base font-medium w-fit block after:block after:content-[""] after:absolute after:h-[1px] after:bg-amber-300 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 '>{link.label}</p>
                    </Link>
                    );
                })}
            </div>
            {/* Button */} 
            <div className='flex items-center space-x-4'>
                <button className='md:px-8 md:py-2.5 px-8  py-2 text-black text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg cursor-pointer'>
                    Book Now
                </button>
                {/* Hamburger */}
                <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden '/>
            </div>
      </div>
    </div>
  )
}

export default Nav
