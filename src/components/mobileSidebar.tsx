"use client";
import { iconsBottom, iconsTop } from '@/constant';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BiX } from 'react-icons/bi';
import { useStateContext } from './stateContext';

const MobileSidebar = () => {
    const { showSidebar, setShowSidebar } = useStateContext();
    const pathname = usePathname();
    return (
        <div className='flex md:hidden bg-blue-700'>
            {showSidebar && (
                <div className='absolute top-0 left-0 right-0 bottom-0 bg-slate-400/30'>
                    <div className='flex md:hidden flex-col bg-[#1B396E] min-h-screen min-w-fit max-w-fit p-5 justify-between overflow-y-auto relative'>
                        <button onClick={() => setShowSidebar(false)} className='text-white absolute top-4 right-3 text-2xl cursor-pointer border-2 border-[#D9D9D9] rounded-full'><BiX /></button>
                        <div>
                            <div className='py-10 flex flex-col gap-10'>
                                <h1 className='text-white text-2xl text-center font-semibold'>CyberPro</h1>
                                <hr className='py-[2px] bg-white' />
                            </div>
                            {iconsTop.map((item) => {
                                const Icon = item.Icon;
                                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                                return (
                                    <Link onClick={() => setShowSidebar(false)} href={item.href} key={item.href} className={`h-[40px] text-white flex items-center justify-between gap-3 cursor-pointer md:w-fit lg:min-w-[250px] ${isActive ? "text-[#1ABC9C]" : "text-white"}`}>
                                        <div className='flex items-center gap-2 text-[15px] lg:text-[18px]'>
                                            <Icon />
                                            <span>{item.title}</span>
                                        </div>
                                        {isActive && <div className='hidden lg:flex h-[25px] w-[2px] bg-[#1ABC9C]' />}
                                    </Link>
                                )
                            })}
                        </div>
                        <div>
                            {iconsBottom.map((item) => {
                                const Icon = item.Icon;
                                return (
                                    <button key={item.title} className="h-[40px] text-white flex items-center justify-between gap-3 cursor-pointer md:w-fit lg:min-w-[250px]">
                                        <div className='flex items-center gap-2 text-[15px] lg:text-[18px]'>
                                            <Icon />
                                            <span className=''>{item.title}</span>
                                        </div>
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default MobileSidebar;

