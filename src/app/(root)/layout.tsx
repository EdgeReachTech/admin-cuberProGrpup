import React from 'react'
import LeftSideBar from '@/components/LeftSideBar'
import Navbar from '@/components/Navbar';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex'>
            <LeftSideBar />
            <div className='w-full'>
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default RootLayout;