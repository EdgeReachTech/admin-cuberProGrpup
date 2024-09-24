import React from 'react'
import LeftSideBar from '@/components/LeftSideBar'
import Navbar from '@/components/Navbar';
import MobileSidebar from '@/components/mobileSidebar';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex pb-10'>
            <LeftSideBar />
            <MobileSidebar />
            <div className='w-full'>
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default RootLayout;