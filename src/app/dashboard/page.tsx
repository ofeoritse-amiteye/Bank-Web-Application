"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Sidebar, { Main_content } from '@/components/dashboard_components';
import { motion } from 'framer-motion';

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const user ={
    id: '001',
    organization: 'ABC Corp',
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    date_joined: '2023-01-01',
    status: 'Active' as "Active" | "Inactive" | "Blacklisted",
    income: '50000',
    gender: 'Male',
    marital_status: "single",
    residence:"Apartment",
    education:"B.sc",
    employment_status:"Employed",
    sector:"fintech",
    duration_of_employment:"3,years",
    office_email:"officeemail@gmail.com",
    loan_repaid_amount: '40,000',
    twitter:"@twitter",
    facebook:"fb.com",
    instagram:"ig.com",
    guarantor: 'Jane Doe',

};


  return (
    <div className="flex flex-col h-full">

      <div className=' w-full shadow-sm flex sticky z-1000 top-0 bg-white h-24'>

        <div className="custom:hidden p-4 flex items-center">
          <button onClick={handleSidebarToggle} className="text-[#213F7D]">
            <svg className="w-6 h-6 m" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
         </div>
            <div className='flex justify-center items-center'>
                <div className='hidden custom:block '>
                <h1 className="text-black text-3xl font-bold flex ml-5">Walk <span className="text-red-400">Man</span></h1>
                </div>
            </div>
            <div className='w-1/2 flex items-center'>
              <h1 className="text-black text-3xl flex ml-5 font-bold md:hidden">Walk <span className="text-red-400">Man</span></h1>
            <input placeholder='search for anything' type="search" name="" id="" className='p-2 h-12 w-2/3 ml-16 rounded-l-lg border-2 border-gray-300 hidden md:block'/>
            <button type="submit" className='bg-[#39CDCC] h-12 w-14 rounded-r-lg items-center justify-center md:flex hidden'>
                <Image src={"/icons/search.png"} alt='no image' height={25} width={25}/>
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
                    <Image src={"/icons/bell.png"} alt='no image' height={20} width={20}/>
                </button>
            </div>
            <div className='flex'>
                <div className="w-full hidden lg:block">
                    <Image
                        src="/images/ofe.png"
                        alt=""
                        width={112}
                        height={112}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                </div>
                <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" className=" text-[#213F7D] font-medium text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">Ofeoritse 
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

          <div className='w-full h-full bg-[#FBFBFB] flex justify-center'>
            <Main_content user={user}/>
          </div>
        </div>
    </div>
  );
}
export default Dashboard;
