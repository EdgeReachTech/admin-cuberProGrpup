import React from 'react'
import LeftSideBar from '@/components/LeftSideBar'
import Navbar from '@/components/Navbar';
import MobileSidebar from '@/components/mobileSidebar';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex'>
            <LeftSideBar />
            <MobileSidebar />
            <div className='w-full pb-10'>
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default RootLayout;