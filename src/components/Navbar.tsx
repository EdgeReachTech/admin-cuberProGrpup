'use client';
import Image from 'next/image'
import React from 'react'
import { FaBars } from 'react-icons/fa';
import { useStateContext } from './stateContext';

const Navbar = () => {
    const { setShowSidebar } = useStateContext();
    return (
        <div className='p-10 flex flex-col md:flex-row space-y-3 items-center justify-between w-full'>
            <div className='flex items-center w-full md:w-fit justify-between'>
                <FaBars className='flex md:hidden cursor-pointer w-[30px] h-[30px]' onClick={() => setShowSidebar(true)} />
                <input type="text" className='border-[1px] border-black rounded-md outline-none p-[6px] w-[200px] lg:w-[400px] bg-transparent text-[18px]' placeholder='Search' />
            </div>
            <div className='flex items-center gap-5 min:w-fit'>
                <div className='flex flex-col items-end'>
                    <p className='font-bold text-xl text-nowrap'>R. Rodrigue</p>
                    <p>Student</p>
                </div>
                <Image src="https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg" alt="" width={250} height={250} className='h-[60px] lg:h-[100px] w-[60px] lg:w-[100px] bg-[#D9D9D9] border-[2px] border-yellow-500 rounded-full object-cover' />
            </div>
        </div>
    )
}

export default Navbar;