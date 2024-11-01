"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';

type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  role: string;
};

export default function Dashboard() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('https://run.mocky.io/v3/c54147e3-4771-45a2-a3d2-8cac9f8fbc02');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col h-screen">
        <div className=' w-full shadow-sm flex sticky z-1000 top-0 bg-white'>
            <div className='flex justify-center items-center'>
                <div className='p-10 '>
                <Image src={"/logo.png"} alt="no image" height={100} width={173.76}/>
                </div>
            </div>
            <div className='w-1/2 flex items-center'>
            <input placeholder='search for anything' type="search" name="" id="" className='p-2 h-12 w-2/3 ml-16 rounded-l-lg border-2 border-gray-300'/>
            <button type="submit" className='bg-[#39CDCC] h-12 w-14 rounded-r-lg items-center justify-center flex'>
                <Image src={"/search.png"} alt='no image' height={25} width={25}/>
            </button>
            </div>
            <div className='w-1/2 flex items-center justify-end '>
            <a href="" className='m-5'>
                <p>
                    <u>
                    Docs
                    </u>
                </p>
            </a>
            <div className='m-5 flex justify-center items-center'>
                <button>
                    <Image src={"/bell.png"} alt='no image' height={20} width={20}/>
                </button>
            </div>
            <div className='flex'>
                <div className="w-full flex justify-center items-center">
                    <Image
                        src="/ofe.png"
                        alt=""
                        width={112}
                        height={112}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                </div>
                <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" className=" font-medium text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">Adeleji 
                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>
            </div>
            </div>
        </div>
        
        <div className='flex flex-grow h-full'>
            <div className='w-[283px]  shadow-md overflow-y-auto '>
                <div className="py-2">
                  <a href="#" className="px-4 py-2 text-sm text-[#213F7D] hover:bg-[#39CDCC] hover:text-white flex items-center font-medium">
                  <div className='mr-2'>
                    <Image src={"/icons/briefcase.png"} alt='no image' height={10} width={15}/>
                  </div>
                    Switch organization
                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg>
                  </a>
                </div>
                <div className="py-2">
                  <a href="#" className="flex items-center px-4 py-4 text-md text-[#213F7D] hover:bg-[#39CDCC] hover:text-white opacity-60">
                  <div className='mr-2'>
                    <Image src={"/icons/home.png"} alt='no image' height={10} width={15}/>
                  </div>
                    Dashboard</a>
                </div>

                <p className='text-sm px-4 text-[#545F7D] font-medium '>CUSTOMERS</p>

                <div className="">
                  <a href="#" className="flex items-center px-4 py-2 text-md text-[#213F7D] hover:bg-[#39CDCC] hover:text-white opacity-60">
                  <div className='mr-2'>
                    <Image src={"/icons/user-friends.png"} alt='no image' height={10} width={15}/>
                  </div>
                    Users</a>
                </div>
                <div className="">
                  <a href="#" className="flex items-center px-4 py-2 text-md text-[#213F7D] hover:bg-[#39CDCC] hover:text-white opacity-60">
                  <div className='mr-2'>
                  <Image src={"/icons/users_1.png"} alt='no image' height={10} width={15}/>
                  </div>
                  Guarantors</a>
                </div>
                <div className="">
                  <a href="#" className="flex items-center px-4 py-2 text-md text-[#213F7D] hover:bg-[#39CDCC] hover:text-white opacity-60">
                  <div className='mr-2'>
                  <Image src={"/icons/sack.png"} alt='no image' height={10} width={15}/>
                  </div>
                  loans</a>
                </div>
                <div className="">
                  <a href="#" className="flex items-center px-4 py-2 text-md text-[#213F7D] hover:bg-[#39CDCC] hover:text-white opacity-60">
                  <div className='mr-2'>
                  <Image src={"/icons/handshake-regular.png"} alt='no image' height={10} width={15}/>
                  </div>
                    Decision Models</a>
                </div>
                <div className="">
                  <a href="#" className="flex items-center px-4 py-2 text-md text-[#213F7D] hover:bg-[#39CDCC] hover:text-white opacity-60">
                  <div className='mr-2'>
                  <Image src={"/icons/piggy-bank.png"} alt='no image' height={10} width={15}/>
                  </div>
                    savings</a>
                </div>
                <div className="">
                  <a href="#" className="flex items-center px-4 py-2 text-md text-[#213F7D] hover:bg-[#39CDCC] hover:text-white opacity-60">
                  <div className='mr-2'>
                  <Image src={"/icons/group.png"} alt='no image' height={10} width={15}/>
                  </div>
                    Loan requests</a>
                </div>
                <div className="">
                  <a href="#" className="flex items-center px-4 py-2 text-md text-[#213F7D] hover:bg-[#39CDCC] hover:text-white opacity-60">
                  <div className='mr-2'>
                  <Image src={"/icons/user-check.png"} alt='no image' height={10} width={15}/>
                  </div>
                    Whitelist</a>
                </div>
                <div className="">
                  <a href="#" className="flex items-center px-4 py-2 text-md text-[#213F7D] hover:bg-[#39CDCC] hover:text-white opacity-60 ">
                  <div className='mr-2'>
                  <Image src={"/icons/user-times.png"} alt='no image' height={10} width={15}/>
                  </div>
                    Karma</a>
                </div>

                <p className='text-sm px-4 mt-5 text-[#545F7D] font-medium'>BUSINESSES</p>

                <div className="">
                  <a href="#" className="flex items-center px-4 py-2 text-md text-[#213F7D] hover:bg-[#39CDCC] hover:text-white opacity-60 ">
                  <div className='mr-2'>
                  <Image src={"/icons/briefcase.png"} alt='no image' height={10} width={15}/>
                  </div>
                    Organization</a>
                </div>
                <div className="">
                  <a href="#" className="flex items-center px-4 py-2 text-md text-[#213F7D] hover:bg-[#39CDCC] hover:text-white opacity-60 ">
                  <div className='mr-2'>
                  <Image src={"/icons/group.png"} alt='no image' height={10} width={15}/>
                  </div>
                    Loan Products</a>
                </div>
                <div className="">
                  <a href="#" className="flex items-center px-4 py-2 text-md text-[#213F7D] hover:bg-[#39CDCC] hover:text-white opacity-60 ">
                  <div className='mr-2'>
                  <Image src={"/icons/group2.png"} alt='no image' height={10} width={15}/>
                  </div>
                    Savings Products</a>
                </div>
                <div className="">
                  <a href="#" className="flex items-center px-4 py-2 text-md text-[#213F7D] hover:bg-[#39CDCC] hover:text-white opacity-60 ">
                  <div className='mr-2'>
                  <Image src={"/icons/coins-solid.png"} alt='no image' height={10} width={15}/>
                  </div>
                    Fees and charges</a>
                </div>
                <div className="">
                  <a href="#" className="flex items-center px-4 py-2 text-md text-[#213F7D] hover:bg-[#39CDCC] hover:text-white opacity-60 ">
                  <div className='mr-2'>
                  <Image src={"/icons/icon.png"} alt='no image' height={10} width={15}/>
                  </div>
                    Transactions</a>
                </div>
                <div className="">
                  <a href="#" className="flex items-center px-4 py-2 text-md text-[#213F7D] hover:bg-[#39CDCC] hover:text-white opacity-60 ">
                  <div className='mr-2'>
                  <Image src={"/icons/galaxy.png"} alt='no image' height={10} width={15}/>
                  </div>
                    Services</a>
                </div>
                <div className="">
                  <a href="#" className="flex items-center px-4 py-2 text-md text-[#213F7D] hover:bg-[#39CDCC] hover:text-white opacity-60 ">
                  <div className='mr-2'>
                  <Image src={"/icons/user-cog.png"} alt='no image' height={10} width={15}/>
                  </div>
                    Service Account</a>
                </div>
                <div className="">
                  <a href="#" className="flex items-center px-4 py-2 text-md text-[#213F7D] hover:bg-[#39CDCC] hover:text-white opacity-60 ">
                  <div className='mr-2'>
                  <Image src={"/icons/scroll.png"} alt='no image' height={10} width={15}/>
                  </div>
                    Settlements</a>
                </div>
                <div className="">
                  <a href="#" className="flex items-center px-4 py-2 text-md text-[#213F7D] hover:bg-[#39CDCC] hover:text-white opacity-60 ">
                  <div className='mr-2'>
                  <Image src={"/icons/chart-bar.png"} alt='no image' height={10} width={15}/>
                  </div>
                    Reports</a>
                </div>

                <p className='text-sm px-4 mt-5 text-[#545F7D] font-medium'>SETTINGS</p>

                <div className="">
                  <a href="#" className="flex items-center px-4 py-2 text-md text-[#213F7D] hover:bg-[#39CDCC] hover:text-white opacity-60 ">
                  <div className='mr-2'>
                  <Image src={"/icons/sliders-h.png"} alt='no image' height={10} width={15}/>
                  </div>
                    Preferences</a>
                </div>
                <div className="">
                  <a href="#" className="flex items-center px-4 py-2 text-md text-[#213F7D] hover:bg-[#39CDCC] hover:text-white opacity-60 ">
                  <div className='mr-2'>
                  <Image src={"/icons/badge-percent.png"} alt='no image' height={10} width={15}/>
                  </div>
                    Fees and Pricing</a>
                </div>
                <div className="">
                  <a href="#" className="flex items-center px-4 py-2 text-md text-[#213F7D] hover:bg-[#39CDCC] hover:text-white opacity-60 ">
                  <div className='mr-2'>
                  <Image src={"/icons/clipboard-list.png"} alt='no image' height={10} width={15}/>
                  </div>
                    Audit Logs</a>
                </div>


            </div>
            <div className='w-full h-full bg-[#FBFBFB]'>

            </div>
        </div>
    </div>
  );
}
