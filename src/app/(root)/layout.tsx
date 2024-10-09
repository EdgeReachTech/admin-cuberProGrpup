import React from 'react'
import LeftSideBar from '@/components/LeftSideBar'
import MobileSidebar from '@/components/mobileSidebar';
import AuthContextAPI from '@/context/AuthContext';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex'>
        <AuthContextAPI>
            <LeftSideBar />
            <MobileSidebar />
            <div className='w-full pb-10'>
                {children}
            </div>
            </AuthContextAPI>
        </div>
    )
}

export default RootLayout;