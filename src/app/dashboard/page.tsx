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
        const response = await fetch('https://run.mocky.io/v3/822d0f62-064c-4b2e-a789-0b77e8609c28');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchUsers();
  }, []);

  const [selected, setSelected] = useState(null);
  const [menuopen , setmenuopen] = useState(null)

  const handleSelect = (link:any) => {
    setSelected(link);
  };

  const linkClass = (link:any) => `
    flex items-center px-4 py-2 text-custom2 text-[#213F7D]
    hover:bg-[#39CDCC] hover:bg-opacity-10 hover:text-[#213F7D]
    hover:text-opacity-100 text-opacity-60 
    ${selected === link ? 'border-l-4 border-[#39CDCC] bg-blue-50' : ''}
  `;

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
                  <a href="#" className="px-4 py-2 text-custom2 text-[#213F7D] hover:bg-[#39CDCC] hover:bg-opacity-10 hover:text-[#213F7D] flex items-center font-medium">
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
                  <a href="#" className="flex items-center px-4 py-4 text-custom2 text-[#213F7D] hover:bg-[#39CDCC] hover:bg-opacity-10 hover:text-[#213F7D] hover:text-opacity-100 text-opacity-60">
                  <div className='mr-2'>
                    <Image src={"/icons/home.png"} alt='no image' height={10} width={15}/>
                  </div>
                    Dashboard</a>
                </div>

                <p className=' px-4 text-custom text-[#545F7D] font-medium '>CUSTOMERS</p>

                <div className="">
                  <a href="#" className={linkClass("Users")} onClick={() => handleSelect("Users")} >
                  <div className='mr-2'>
                    <Image src={"/icons/user-friends.png"} alt='no image' height={10} width={15}/>
                  </div>
                    Users</a>
                </div>
                <div className="">
                  <a href="#" className={linkClass("Guarantors")} onClick={() => handleSelect("Guarantors")}>
                  <div className='mr-2'>
                  <Image src={"/icons/users_1.png"} alt='no image' height={10} width={15}/>
                  </div>
                  Guarantors</a>
                </div>
                <div className="">
                  <a href="#" className={linkClass("Loans")} onClick={() => handleSelect("Loans")}>
                  <div className='mr-2'>
                  <Image src={"/icons/sack.png"} alt='no image' height={10} width={15}/>
                  </div>
                  Loans</a>
                </div>
                <div className="">
                  <a href="#" className={linkClass("Decision_Models")} onClick={() => handleSelect("Decision_Models")}>
                  <div className='mr-2'>
                  <Image src={"/icons/handshake-regular.png"} alt='no image' height={10} width={15}/>
                  </div>
                    Decision Models</a>
                </div>
                <div className="">
                  <a href="#" className={linkClass("Savings")} onClick={() => handleSelect("Savings")}>
                  <div className='mr-2'>
                  <Image src={"/icons/piggy-bank.png"} alt='no image' height={10} width={15}/>
                  </div>
                    savings</a>
                </div>
                <div className="">
                  <a href="#" className={linkClass("Loan_Requests")} onClick={() => handleSelect("Loan_Requests")}>
                  <div className='mr-2'>
                  <Image src={"/icons/group.png"} alt='no image' height={10} width={15}/>
                  </div>
                    Loan Requests</a>
                </div>
                <div className="">
                  <a href="#" className={linkClass("Whitelist")} onClick={() => handleSelect("Whitelist")}>
                  <div className='mr-2'>
                  <Image src={"/icons/user-check.png"} alt='no image' height={10} width={15}/>
                  </div>
                    Whitelist</a>
                </div>
                <div className="">
                  <a href="#" className={linkClass("Karma")} onClick={() => handleSelect("Karma")}>
                  <div className='mr-2'>
                  <Image src={"/icons/user-times.png"} alt='no image' height={10} width={15}/>
                  </div>
                    Karma</a>
                </div>

                <p className='text-custom px-4 mt-5 text-[#545F7D] font-medium'>BUSINESSES</p>

                <div className="">
                  <a href="#" className={linkClass("Organization")} onClick={() => handleSelect("Organization")}>
                  <div className='mr-2'>
                  <Image src={"/icons/briefcase.png"} alt='no image' height={10} width={15}/>
                  </div>
                    Organization</a>
                </div>
                <div className="">
                  <a href="#" className={linkClass("Loan_Products")} onClick={() => handleSelect("Loan_Products")}>
                  <div className='mr-2'>
                  <Image src={"/icons/group.png"} alt='no image' height={10} width={15}/>
                  </div>
                    Loan Products</a>
                </div>
                <div className="">
                  <a href="#" className={linkClass("Savings_Products")} onClick={() => handleSelect("Savings_Products")}>
                  <div className='mr-2'>
                  <Image src={"/icons/group2.png"} alt='no image' height={10} width={15}/>
                  </div>
                    Savings Products</a>
                </div>
                <div className="">
                  <a href="#" className={linkClass("Fees_and_charges")} onClick={() => handleSelect("Fees_and_charges")}>
                  <div className='mr-2'>
                  <Image src={"/icons/coins-solid.png"} alt='no image' height={10} width={15}/>
                  </div>
                    Fees and charges</a>
                </div>
                <div className="">
                  <a href="#" className={linkClass("Transactions")} onClick={() => handleSelect("Transactions")}>
                  <div className='mr-2'>
                  <Image src={"/icons/icon.png"} alt='no image' height={10} width={15}/>
                  </div>
                    Transactions</a>
                </div>
                <div className="">
                  <a href="#" className={linkClass("Services")} onClick={() => handleSelect("Services")}>
                  <div className='mr-2'>
                  <Image src={"/icons/galaxy.png"} alt='no image' height={10} width={15}/>
                  </div>
                    Services</a>
                </div>
                <div className="">
                  <a href="#" className={linkClass("Service_Account")} onClick={() => handleSelect("Service_Account")}>
                  <div className='mr-2'>
                  <Image src={"/icons/user-cog.png"} alt='no image' height={10} width={15}/>
                  </div>
                    Service Account</a>
                </div>
                <div className="">
                  <a href="#" className={linkClass("Settlements")} onClick={() => handleSelect("Settlements")}>
                  <div className='mr-2'>
                  <Image src={"/icons/scroll.png"} alt='no image' height={10} width={15}/>
                  </div>
                    Settlements</a>
                </div>
                <div className="">
                  <a href="#" className={linkClass("Reports")} onClick={() => handleSelect("Reports")}>
                  <div className='mr-2'>
                  <Image src={"/icons/chart-bar.png"} alt='no image' height={10} width={15}/>
                  </div>
                    Reports</a>
                </div>

                <p className='text-custom px-4 mt-5 text-[#545F7D] font-medium'>SETTINGS</p>

                <div className="">
                  <a href="#" className={linkClass("Preferences")} onClick={() => handleSelect("Preferences")}>
                  <div className='mr-2'>
                  <Image src={"/icons/sliders-h.png"} alt='no image' height={10} width={15}/>
                  </div>
                    Preferences</a>
                </div>
                <div className="">
                  <a href="#" className={linkClass("Fees_and_Pricing")} onClick={() => handleSelect("Fees_and_Pricing")}>
                  <div className='mr-2'>
                  <Image src={"/icons/badge-percent.png"} alt='no image' height={10} width={15}/>
                  </div>
                    Fees and Pricing</a>
                </div>
                <div className="">
                  <a href="#" className={linkClass("Audit_Logs")} onClick={() => handleSelect("Audit_Logs")}>
                  <div className='mr-2'>
                  <Image src={"/icons/clipboard-list.png"} alt='no image' height={10} width={15}/>
                  </div>
                    Audit Logs</a>
                </div>


            </div>
            <div className='w-full h-full bg-[#FBFBFB] flex justify-center'>

              <div className='w-custom h-3/4 border-2 mt-10 '>
              <p className='text-2xl font-bold text-[#213F7D]'>Users</p>

              <div className='flex min-w-full mt-10 mb-10 justify-between overflow-x-auto'>
                <div className='w-1/5 h-[170px] bg-white shadow-md rounded-md'>
                  <div className='p-7'>
                    <Image src={'/icons/icon2.png'} alt='no image' height={50} width={50}/>
                    <p className=' text-[#213F7D] mt-3'>Users</p>
                    <p className='text-2xl font-bold text-[#213F7D] mt-1'>2,453</p>
                  </div>
                </div>
                <div className='w-1/5 h-[170px] bg-white shadow-md rounded-md'>
                  <div className='p-7'>
                    <Image src={'/icons/icon2.png'} alt='no image' height={50} width={50}/>
                    <p className=' text-[#213F7D] mt-3'>Users</p>
                    <p className='text-2xl font-bold text-[#213F7D] mt-1'>2,453</p>
                  </div>
                </div>
                <div className='w-1/5 h-[170px] bg-white shadow-md rounded-md'>
                  <div className='p-7'>
                    <Image src={'/icons/icon2.png'} alt='no image' height={50} width={50}/>
                    <p className=' text-[#213F7D] mt-3'>Users</p>
                    <p className='text-2xl font-bold text-[#213F7D] mt-1'>2,453</p>
                  </div>
                </div>
                <div className='w-1/5 h-[170px] bg-white shadow-md rounded-md'>
                  <div className='p-7'>
                    <Image src={'/icons/icon2.png'} alt='no image' height={50} width={50}/>
                    <p className=' text-[#213F7D] mt-3'>Users</p>
                    <p className='text-2xl font-bold text-[#213F7D] mt-1'>2,453</p>
                  </div>
                </div>   
              </div>

              <div className='w-full bg-white'>
              <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead>
                      <tr className="text-left text-gray-600 font-semibold">
                        <th className="px-4 py-2 border-b">ORGANIZATION</th>
                        <th className="px-4 py-2 border-b">USERNAME</th>
                        <th className="px-4 py-2 border-b">EMAIL</th>
                        <th className="px-4 py-2 border-b">PHONE NUMBER</th>
                        <th className="px-4 py-2 border-b">DATE JOINED</th>
                        <th className="px-4 py-2 border-b">STATUS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user:any)=>(
                      <tr key={user.id} className="hover:bg-gray-100">
                      <td className="px-4 py-2 border-b">{user.organization}</td>
                      <td className="px-4 py-2 border-b">{user.name}</td>
                      <td className="px-4 py-2 border-b">{user.email}</td>
                      <td className="px-4 py-2 border-b">{user.phone}</td>
                      <td className="px-4 py-2 border-b">{user.date_joined}</td>
                      <td className="px-4 py-2 border-b"><span className={`py-1 px-3 rounded-full text-xs ${user.status === "Active"? "bg-green-100 text-green-600": user.status === "Inactive"? "bg-gray-200 text-gray-600": "bg-red-100 text-red-600"}`}>{user.status}</span></td>
                      <td className="px-4 py-2 border-b">
                        <button
                          onClick={() => setmenuopen(menuopen === user.id ? null : user.id)}
                          className="absolute bottom-2 right-16 inline-flex items-center p-2 text-sm font-medium  bg-white rounded-full text-black"
                          type="button"
                        >
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 4 15"
                          >
                            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                          </svg>
                        </button>
                      </td>

                      </tr>
                      ))}
                    </tbody>
                  </table>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="text-sm text-gray-600">
                      Showing <select className="border border-gray-300 rounded-md px-2 py-1">
                        <option>100</option>
                        <option>50</option>
                        <option>25</option>
                      </select> out of 100
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 border border-gray-300 rounded">1</button>
                      <button className="px-3 py-1 border border-gray-300 rounded">2</button>
                      <button className="px-3 py-1 border border-gray-300 rounded">3</button>
                      <span>...</span>
                      <button className="px-3 py-1 border border-gray-300 rounded">16</button>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
        </div>
    </div>
  );
}
