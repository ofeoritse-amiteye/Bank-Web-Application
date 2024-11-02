"use client"
import { useState } from 'react';
import Image from 'next/image';
import Sidebar, { Main_content ,Userdetails } from '@/components/dashboard_components';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };


  return (
    <div className="flex flex-col h-full">

        <div className=' w-full shadow-sm flex sticky z-1000 top-0 bg-white'>

        <div className="custom:hidden p-4">
          <button onClick={handleSidebarToggle} className="text-[#213F7D]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
         </div>
            <div className='flex justify-center items-center'>
                <div className='p-10 hidden custom:block '>
                <Image src={"/logo.png"} alt="no image" height={100} width={173.76}/>
                </div>
            </div>
            <div className='w-1/2 flex items-center'>
            <Image src={"/images/logo.png"} alt='no image' height={30} width={150} className='md:hidden'/>
            <input placeholder='search for anything' type="search" name="" id="" className='p-2 h-12 w-2/3 ml-16 rounded-l-lg border-2 border-gray-300 hidden md:block'/>
            <button type="submit" className='bg-[#39CDCC] h-12 w-14 rounded-r-lg items-center justify-center md:flex hidden'>
                <Image src={"/search.png"} alt='no image' height={25} width={25}/>
            </button>
            </div>
            <div className='w-1/2 flex items-center justify-end '>
            <a href="" className='m-5 hidden md:block'>
                <p className='text-[#213F7D]'>
                    <u>
                    Docs
                    </u>
                </p>
            </a>
            <div className='m-5 md:flex justify-center items-center hidden'>
                <button>
                    <Image src={"/bell.png"} alt='no image' height={20} width={20}/>
                </button>
            </div>
            <div className='flex'>
                <div className="w-full hidden lg:block">
                    <Image
                        src="/icons/avatar.png"
                        alt=""
                        width={112}
                        height={112}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                </div>
                <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" className=" text-[#213F7D] font-medium text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">Adeleji 
                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>
            </div>
          </div>
        </div>
        
        <div className='flex flex-grow h-full'>
          <div className='hidden custom:block w-[283px] h-full overflow-y-auto'>
            <Sidebar/>
          </div>

          <motion.div initial={{ x: -300 }} animate={{ x: isSidebarOpen ? 0 : -300 }} transition={{ duration: 0.3 }} className={`fixed inset-y-0 h-screen left-0 w-[283px] custom:hidden bg-white shadow-md overflow-y-auto z-50`}>
            <Sidebar/>
          </motion.div>
            {isSidebarOpen && (
          <div onClick={handleSidebarToggle} className="fixed inset-0 bg-black bg-opacity-30 lg:hidden z-40"></div>)}

          {/*<div className='w-full h-full bg-[#FBFBFB] flex justify-center'>
            <Main_content/>
          </div>*/}
          <div className='w-full h-full bg-[#FBFBFB] flex justify-center'>
            <Userdetails/>
          </div>
        </div>
    </div>
  );
}
