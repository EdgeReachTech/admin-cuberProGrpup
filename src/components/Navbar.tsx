import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div className='p-10 flex items-center justify-between w-full'>
            <input type="text" className='border-[1px] border-black rounded-md outline-none p-[6px] w-[200px] lg:w-[400px] bg-transparent text-[18px]' placeholder='Search' />
            <div className='flex items-center gap-5'>
                <div className='flex flex-col items-end'>
                    <p className='font-bold text-xl'>R. Rodrigue</p>
                    <p>Student</p>
                </div>
                <Image src="" alt="" width={250} height={250} className='h-[60px] lg:h-[100px] w-[60px] lg:w-[100px] bg-[#D9D9D9] border-[2px] border-yellow-500 rounded-full' />
            </div>
        </div>
    )
}

export default Navbar;