import React from 'react'
import LeftSideBar from '@/components/LeftSideBar'
import MobileSidebar from '@/components/mobileSidebar';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex'>
            <LeftSideBar />
            <MobileSidebar />
            <div className='w-full pb-10'>
                {children}
            </div>
        </div>
    )
}

export default RootLayout;