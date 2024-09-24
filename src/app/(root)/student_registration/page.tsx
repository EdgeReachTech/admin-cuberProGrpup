import Image from 'next/image'
import React from 'react'

const StudentRegistrationPage = () => {
    return (
        <div>
            <div className='p-10'>
                <p>
                    Dashboard <br />
                    Welcome Back! Rwigara Rodrigue
                </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center py-10 space-y-7'>
                <div className='flex flex-col items-center justify-center'>
                    <Image src="https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg" alt="" width={250} height={250} className='h-[60px] lg:h-[100px] w-[60px] lg:w-[100px] bg-[#D9D9D9] border-[2px] border-yellow-500 rounded-full object-cover' />
                    <button className='text-[#F39C12] cursor-pointer mt-3'>Upload new image</button>
                </div>
                <div className='grid grid-cols-2 space-y-5 items-center pl-5'>
                    <div>
                        <p>Full Name</p>
                        <p className='text-black/50 text-sm'>Rwigara Rodrigue</p>
                    </div>
                    <div>
                        <p>National Id</p>
                        <p className='text-black/50 text-sm'>12345678901234567</p>
                    </div>
                    <div>
                        <p>Gender</p>
                        <p className='text-black/50 text-sm'>Male</p>
                    </div>
                    <div>
                        <p>Date of Birth</p>
                        <p className='text-black/50 text-sm'>2002-09-15</p>
                    </div>
                    <div>
                        <p>Email</p>
                        <p className='text-black/50 text-sm'>rwigararodrique@gmail.com</p>
                    </div>
                    <div>
                        <p>Phone number</p>
                        <p className='text-black/50 text-sm'>12345678901234567</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentRegistrationPage