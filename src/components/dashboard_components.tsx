import { useState,useEffect,  useRef} from "react";
import Image from "next/image";
import { Filterform } from "./forms";
import styles from "./dashboard.module.scss";
import Link from "next/link";



export default function Sidebar ()
{
  const [selected, setSelected] = useState<string | null>(null);


  const handleSelect = (link: string | null) => {
    setSelected(link);
  };
  
  
    const [isSidebarOpen, setSidebarOpen] = useState(false);
  
    const handleSidebarToggle = () => {
      setSidebarOpen(!isSidebarOpen);
    };
  
    const linkClass = (link: string | null) => `
      flex items-center px-4 py-2 text-custom2 text-[#213F7D]
      hover:bg-[#39CDCC] hover:bg-opacity-10 hover:text-[#213F7D]
      hover:text-opacity-100 text-opacity-60 
      ${selected === link ? 'border-l-4 border-[#39CDCC] bg-blue-50' : ''}
    `;

    return(

      <div>
          <div className={styles.mobileToggle}>
            <button onClick={handleSidebarToggle} className={styles.toggleButton}>
              <svg
                className={styles.icon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
            </button>
          </div>
            <div className="mb-3 flex justify-center lg:hidden">
              <Link href="/" className="bg-red-400 p-3 items-center w-[50%] text-center font-bold text-white rounded-xl hover:bg-red-600"> LogOut</Link>
            </div>
          <div className={styles.section}>
            <a href="#" className={styles.switchOrganization}>
              <div className={styles.iconContainer}>
                <Image src={"/icons/briefcase.png"} alt="no image" height={10} width={15} />
              </div>
              Switch organization
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </a>
          </div>

          <div className={styles.section}>
            <a href="#" className={styles.dashboardLink}>
              <div className={styles.iconContainer}>
                <Image src={"/icons/home.png"} alt="no image" height={10} width={15} />
              </div>
              Dashboard
            </a>
          </div>

          <p className={styles.sectionTitle}>CUSTOMERS</p>

          <div className={styles.section}>
            <a href="#" className={linkClass("Users")} onClick={() => handleSelect("Users")}>
              <div className={styles.iconContainer}>
                <Image src={"/icons/user-friends.png"} alt="no image" height={10} width={15} />
              </div>
              Users
            </a>
          </div>
            <div className={styles.section}>
              <a href="#" className={linkClass("Guarantors")} onClick={() => handleSelect("Guarantors")}>
              <div className={styles.iconContainer}>
              <Image src={"/icons/users.png"} alt='no image' height={10} width={15}/>
              </div>
              Guarantors</a>
            </div>
            <div className={styles.section}>
              <a href="#" className={linkClass("Loans")} onClick={() => handleSelect("Loans")}>
              <div className={styles.iconContainer}>
              <Image src={"/icons/sack.png"} alt='no image' height={10} width={15}/>
              </div>
              Loans</a>
            </div>
            <div className={styles.section}>
              <a href="#" className={linkClass("Decision_Models")} onClick={() => handleSelect("Decision_Models")}>
              <div className={styles.iconContainer}>
              <Image src={"/icons/handshake-regular.png"} alt='no image' height={10} width={15}/>
              </div>
                Decision Models</a>
            </div>
            <div className={styles.section}>
              <a href="#" className={linkClass("Savings")} onClick={() => handleSelect("Savings")}>
              <div className={styles.iconContainer}>
              <Image src={"/icons/piggy-bank.png"} alt='no image' height={10} width={15}/>
              </div>
                savings</a>
            </div>
            <div className={styles.section}>
              <a href="#" className={linkClass("Loan_Requests")} onClick={() => handleSelect("Loan_Requests")}>
              <div className={styles.iconContainer}>
              <Image src={"/icons/Group.png"} alt='no image' height={10} width={15}/>
              </div>
                Loan Requests</a>
            </div>
            <div className={styles.section}>
              <a href="#" className={linkClass("Whitelist")} onClick={() => handleSelect("Whitelist")}>
              <div className={styles.iconContainer}>
              <Image src={"/icons/user-check.png"} alt='no image' height={10} width={15}/>
              </div>
                Whitelist</a>
            </div>
            <div className={styles.section}>
              <a href="#" className={linkClass("Karma")} onClick={() => handleSelect("Karma")}>
              <div className={styles.iconContainer}>
              <Image src={"/icons/user-times.png"} alt='no image' height={10} width={15}/>
              </div>
                Karma</a>
            </div>

            <p className='text-custom px-4 mt-5 text-[#545F7D] font-medium'>BUSINESSES</p>

            <div className={styles.section}>
              <a href="#" className={linkClass("Organization")} onClick={() => handleSelect("Organization")}>
              <div className={styles.iconContainer}>
              <Image src={"/icons/briefcase.png"} alt='no image' height={10} width={15}/>
              </div>
                Organization</a>
            </div>
            <div className={styles.section}>
              <a href="#" className={linkClass("Loan_Products")} onClick={() => handleSelect("Loan_Products")}>
              <div className={styles.iconContainer}>
              <Image src={"/icons/Group.png"} alt='no image' height={10} width={15}/>
              </div>
                Loan Products</a>
            </div>
            <div className={styles.section}>
              <a href="#" className={linkClass("Savings_Products")} onClick={() => handleSelect("Savings_Products")}>
              <div className={styles.iconContainer}>
              <Image src={"/icons/Group2.png"} alt='no image' height={10} width={15}/>
              </div>
                Savings Products</a>
            </div>
            <div className={styles.section}>
              <a href="#" className={linkClass("Fees_and_charges")} onClick={() => handleSelect("Fees_and_charges")}>
              <div className={styles.iconContainer}>
              <Image src={"/icons/coins-solid.png"} alt='no image' height={10} width={15}/>
              </div>
                Fees and charges</a>
            </div>
            <div className={styles.section}>
              <a href="#" className={linkClass("Transactions")} onClick={() => handleSelect("Transactions")}>
              <div className={styles.iconContainer}>
              <Image src={"/icons/icon.png"} alt='no image' height={10} width={15}/>
              </div>
                Transactions</a>
            </div>
            <div className={styles.section}>
              <a href="#" className={linkClass("Services")} onClick={() => handleSelect("Services")}>
              <div className={styles.iconContainer}>
              <Image src={"/icons/galaxy.png"} alt='no image' height={10} width={15}/>
              </div>
                Services</a>
            </div>
            <div className={styles.section}>
              <a href="#" className={linkClass("Service_Account")} onClick={() => handleSelect("Service_Account")}>
              <div className={styles.iconContainer}>
              <Image src={"/icons/user-cog.png"} alt='no image' height={10} width={15}/>
              </div>
                Service Account</a>
            </div>
            <div className={styles.section}>
              <a href="#" className={linkClass("Settlements")} onClick={() => handleSelect("Settlements")}>
              <div className={styles.iconContainer}>
              <Image src={"/icons/scroll.png"} alt='no image' height={10} width={15}/>
              </div>
                Settlements</a>
            </div>
            <div className={styles.section}>
              <a href="#" className={linkClass("Reports")} onClick={() => handleSelect("Reports")}>
              <div className={styles.iconContainer}>
              <Image src={"/icons/chart-bar.png"} alt='no image' height={10} width={15}/>
              </div>
                Reports</a>
            </div>

            <p className='text-custom px-4 mt-5 text-[#545F7D] font-medium'>SETTINGS</p>

            <div className={styles.section}>
              <a href="#" className={linkClass("Preferences")} onClick={() => handleSelect("Preferences")}>
              <div className={styles.iconContainer}>
              <Image src={"/icons/sliders-h.png"} alt='no image' height={10} width={15}/>
              </div>
                Preferences</a>
            </div>
            <div className={styles.section}>
              <a href="#" className={linkClass("Fees_and_Pricing")} onClick={() => handleSelect("Fees_and_Pricing")}>
              <div className={styles.iconContainer}>
              <Image src={"/icons/badge-percent.png"} alt='no image' height={10} width={15}/>
              </div>
                Fees and Pricing</a>
            </div>
            <div className={styles.section}>
              <a href="#" className={linkClass("Audit_Logs")} onClick={() => handleSelect("Audit_Logs")}>
              <div className={styles.iconContainer}>
              <Image src={"/icons/clipboard-list.png"} alt='no image' height={10} width={15}/>
              </div>
                Audit Logs
                </a>
            </div>
            <div className="mb-10 justify-center mt-3 hidden lg:flex">
              <Link href="/" className="bg-red-400 p-3 items-center w-[90%] text-center font-bold text-white rounded-xl hover:bg-red-600"> LogOut</Link>
            </div>
        </div>
    )
}

type User = {
  id: string;
  organization: string;
  name: string;
  email: string;
  phone: string;
  date_joined: string;
  status: string;
  income:string;
  gender: string,
  marital_status: string,
  residence:string,
  education: string,
  employment_status: string,
  sector: string,
  duration_of_employment:string,
  office_email:string,
  loan_repaid_amount: string,
  twitter:string,
  facebook:string,
  instagram:string,
  guarantor: string,
  };
  type Main_contentProps = {
    user:{
      id: string;
      organization: string;
      name: string;
      email: string;
      phone: string;
      date_joined: string;
      status: "Active" | "Inactive" | "Blacklisted";
      income:string;
      gender: string,
      marital_status: string,
      residence:string,
      education: string,
      employment_status: string,
      sector: string,
      duration_of_employment:string,
      office_email:string,
      loan_repaid_amount: string,
      twitter:string,
      facebook:string,
      instagram:string,
      guarantor: string, 
    }    
  };

export const Main_content : React.FC<Main_contentProps> = ({}) =>
{
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setmenuopened(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

    const [users, setUsers] = useState<User[]>([]);
    const [isopened, setisopened] = useState(false)
    const [menuopened, setmenuopened] = useState<string | null>(null);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    const updateUserStatus = (userId: string, newStatus: string) => {
      setUsers(prevUsers =>
        prevUsers.map(user =>
          user.id === userId ? { ...user, status: newStatus } : user
        )
      );
    };
    useEffect(() => {
      async function fetchUsers() {
        try {
          const response = await fetch('https://run.mocky.io/v3/9d6974be-cd89-4281-9ea0-ccf9ba43d495');
          const data = await response.json();
          setUsers(data);
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      }
  
      fetchUsers();
    }, []);

    if (selectedUser) {
      return <Userdetails user={selectedUser} onBack={() => setSelectedUser(null)} />;
    }
    return(
        <div className='w-custom h-3/4  mt-10  '>
        <p className='text-2xl font-bold text-[#213F7D]'>Users</p>
        <div className='overflow-x-auto' >
        <div className='flex w-full mt-10 mb-10 justify-between min-w-[1000px]'>

          <div className='w-1/5 h-[170px] bg-white shadow-md rounded-md'>
            <div className='p-7'>
              <Image src={'/icons/icon2.png'} alt='no image' height={50} width={50}/>
              <p className=' text-[#213F7D] text-custom mt-3'>USERS</p>
              <p className='text-2xl font-bold text-[#213F7D] mt-1'>2,453</p>
            </div>
          </div>
          <div className='w-1/5 h-[170px] bg-white shadow-md rounded-md'>
            <div className='p-7'>
              <Image src={'/icons/icon1.png'} alt='no image' height={50} width={50}/>
              <p className=' text-[#213F7D] text-custom mt-3'>ACTIVE USERS</p>
              <p className='text-2xl font-bold text-[#213F7D] mt-1'>2,453</p>
            </div>
          </div>
          <div className='w-1/5 h-[170px] bg-white shadow-md rounded-md'>
            <div className='p-7'>
              <Image src={'/icons/icon3.png'} alt='no image' height={50} width={50}/>
              <p className=' text-[#213F7D] text-custom mt-3'>USERS WITH LOANS</p>
              <p className='text-2xl font-bold text-[#213F7D] mt-1'>12,453</p>
            </div>
          </div>
          <div className='w-1/5 h-[170px] bg-white shadow-md rounded-md'>
            <div className='p-7'>
              <Image src={'/icons/icon4.png'} alt='no image' height={50} width={50}/>
              <p className=' text-[#213F7D] text-custom mt-3'>USERS WITH SAVINGS</p>
              <p className='text-2xl font-bold text-[#213F7D] mt-1'>102,453</p>
            </div>
          </div>   
        </div>
      </div>
        <div className='w-full bg-white shadow-md mb-10 p-5'>
        <div className="overflow-auto h-[640px] mb-10">

        {isopened &&
              <div className="absolute z-50 m-3">
                <div className="">
                <button className='h-5 w-5 flex items-center justify-center font-bold text-xl float-right p-5 text-red-600 m-1' onClick={()=>setisopened(false)}>x</button>
                <Filterform/>
                </div>
                </div> 
                }
        <table className="min-w-screen w-[1100px] bg-white rounded-lg">
              <thead>
                <tr className="text-left text-gray-600 font-semibold">
                  <th className="px-4 py-2 border-b">
                  <div className='flex items-center'>
                      ORGANIZATION
                        <button className='ml-2' onClick={() => setisopened(true)} >
                        <Image className="min-w-5" src={"/icons/sort.png"} alt='no image' height={20} width={20}/>
                      </button>
                    </div>
                  </th>
                  <th className="px-4 py-2 border-b">
                    <div className='flex items-center'>
                      USERNAME
                        <button className='ml-2' onClick={() => setisopened(true)} >
                        <Image src={"/icons/sort.png"} alt='no image' height={20} width={20}/>
                      </button>
                    </div>
                  </th>
                  <th className="px-4 py-2 border-b">
                    <div className='flex items-center'>
                      EMAIL
                        <button className='ml-2' onClick={() => setisopened(true)} >
                        <Image src={"/icons/sort.png"} alt='no image' height={20} width={20}/>
                      </button>
                    </div>
                    </th>
                  <th className="px-4 py-2 border-b">
                    <div className='flex items-center'>
                      PHONE NUMBER
                        <button className='ml-2' onClick={() => setisopened(true)} >
                        <Image src={"/icons/sort.png"} alt='no image' height={20} width={20}/>
                      </button>
                    </div>
                  </th>
                  <th className="px-4 py-2 border-b">
                    <div className='flex items-center'>
                      DATE JOINED
                        <button className='ml-2' onClick={() => setisopened(true)} >
                        <Image src={"/icons/sort.png"} alt='no image' height={20} width={20}/>
                      </button>
                    </div>
                    </th>
                  <th className="px-4 py-2 border-b">
                  <div className='flex items-center'>
                      STATUS
                        <button className='ml-2' onClick={() => setisopened(true)} >
                        <Image src={"/icons/sort.png"} alt='no image' height={20} width={20}/>
                      </button>
                    </div>
                  </th>
                </tr>
              </thead>
                <tbody>
                {users.map((user)=>(
                <tr key={user.id} className="hover:bg-gray-100">
                <td className="px-4 py-4 border-b">{user.organization}</td>
                <td className="px-4 py-4 border-b">{user.name}</td>
                <td className="px-4 py-4 border-b">{user.email}</td>
                <td className="px-4 py-4 border-b">{user.phone}</td>
                <td className="px-4 py-4 border-b">{user.date_joined}</td>
                <td className="px-4 py-4 border-b">
                <span className={`py-1 px-3 rounded-full text-xs ${
                      user.status === "Active" ? "bg-green-100 text-green-600" :
                      user.status === "Inactive" ? "bg-gray-200 text-gray-600" :
                      user.status === "Blacklisted" ? "bg-red-100 text-red-600" :
                      ""
                    }`}>
                      {user.status}
                    </span>
                </td>
                <td className="relative px-4 py-4 border-b">
                <button 
                  className="flex items-center justify-center" 
                  onClick={() => setmenuopened(menuopened === user.id ? null : user.id)}
                >
                  <Image src="/icons/dots.png" alt="no image" height={30} width={40} className="min-w-5" />
                </button>
                
                {menuopened === user.id && (
                <div
                  ref={menuRef}
                  className="absolute z-50 bg-white shadow-md rounded-md mt-2 right-0 mr-5 w-40"
                >
                  <div className="px-4 py-2 cursor-pointer hover:bg-[#39CDCC] hover:bg-opacity-10 hover:text-[#213F7D] hover:text-opacity-100" onClick={() => setSelectedUser(user)}>
                    <a
                      href="#"
                      className="flex items-center text-custom2 text-[#213F7D]"
                    >
                      <div className="mr-2">
                        <Image src="/icons/view.png" alt="no image" height={10} width={15} />
                      </div>
                      View details
                    </a>
                  </div>

                  <div className="px-4 py-2 cursor-pointer  hover:bg-[#39CDCC] hover:bg-opacity-10 hover:text-[#213F7D] hover:text-opacity-100" onClick={() => updateUserStatus(user.id, "Blacklisted")}>
                    <a
                      href="#"
                      className="flex items-center text-custom2 text-[#213F7D]"
                    >
                      <Image src="/icons/blacklist.png" alt="no image" height={10} width={15} />
                      <span className="ml-2">Blacklist User</span>
                    </a>
                  </div>

                  <div className="px-4 py-2 cursor-pointer  hover:bg-[#39CDCC] hover:bg-opacity-10 hover:text-[#213F7D] hover:text-opacity-100" onClick={() => updateUserStatus(user.id, "Active")}>
                    <a
                      href="#"
                      className="flex items-center text-custom2 text-[#213F7D]"
                    >
                      <Image src="/icons/active.png" alt="no image" height={10} width={15} />
                      <span className="ml-2">Activate User</span>
                    </a>
                  </div>
                </div>
              )}
              </td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-[#545F7D]">
                Showing <select className="border border-gray-300 rounded-md px-2 py-1 w-20 bg-[#213F7D] bg-opacity-15 font-bold">
                  <option>100</option>
                  <option>50</option>
                  <option>25</option>
                </select> out of 100
              </div>
              <div className="flex space-x-2  text-[#545F7D]">
                <button className="px-5 py-1"><Image src={"/icons/prev_btn.png"} alt='no image' height={30} width={30}></Image></button>
                <button className="px-3 py-1 font-bold">1</button>
                <button className="px-3 py-1">2</button>
                <button className="px-3 py-1">3</button>
                <span className=''>...</span>
                <button className="px-3 py-1">16</button>
                <button className="px-5 py-1"><Image src={"/icons/next_btn.png"} alt='no image' height={30} width={30}></Image></button>
              </div>
            </div>
        </div>
        </div>
    )
}

type UserDetailsProps = {
  user: User;     
  onBack: () => void;
};

export const Userdetails: React.FC<UserDetailsProps> = ({ user, onBack }) =>
{
  return(
    <div className='w-custom h-3/4  mt-10'>
      <button className="w-full flex items-center" onClick={onBack}>
        <div className="mr-2 "><Image src={'/icons/back.png'} alt="no image" height={20} width={30}/></div>
        <p className='text-custom2 text-[#213F7D]'>Back to Users</p>
      </button>
      <div className="w-full h-20 mb-10 md:mb-0">
      <p className=' text-[#213F7D] text-2xl font-bold mt-3 float-start mb-5 '>User Details</p>
        <div className="flex float-end">
        <button className=" w-1/2 custom:w-56 custom:h-10 border border-[#E4033B] font-bold text-[#E4033B] flex items-center justify-center rounded-md mr-5 hover:bg-[#E4033B] hover:text-white text-[15]">
          BLACKLIST USER
        </button>
        <button className="w-52 h-10 border border-[#39CDCC] font-bold text-[#39CDCC] flex items-center justify-center rounded-md hover:bg-[#39CDCC] hover:text-white">
          ACTIVATE USER
        </button>
        </div>
      </div>

      <div className="w-full bg-white shadow-md overflow-x-scroll ">

        <div className="flex w-full items-center p-5 min-w-[1000px]">
          <div className="mr-5">
            <Image src={"/icons/avatar2.png"} alt="no image" width={120} height={50}/>
          </div>
          <div className="flex w-full">
            <div className="mr-5 border-r-2 border-[#545F7D]">
              <p className="text-[#213F7D] text-2xl font-bold mr-5">{user.name}</p>
              <p className="text-custom2 text-[#213F7D] mr-5">{user.id}</p>
            </div>
            <div className="mr-5 border-r-2 border-[#545F7D]">
              <p className="text-custom2 text-[#213F7D] mr-5">User`s Tier</p>
              <div className="flex">
                <div className="mr-1">
                  <Image src={"/icons/np_star_1.png"} alt="no image" width={20} height={50}/>
                </div>
                <div className="mr-1">
                  <Image src={"/icons/np_star_2.png"} alt="no image" width={20} height={50}/>
                </div>
                <div>
                  <Image src={"/icons/np_star_2.png"} alt="no image" width={20} height={50}/>
                </div>
              </div>
            </div>
            <div className="mr-5">
              <p className="text-[#213F7D] text-2xl font-bold mr-10">₦{user.income}</p>
              <p className="text-custom2 text-[#545F7D] mr-10">9912345678/providus Bank</p>
            </div>
          </div>
        </div>

        <div className="flex  w-full ml-6 min-w-[1000px] text-[#213F7D]">
            <a href="" className="mr-5 border-b-2 border-[#39CDCC] w-48 flex justify-center ">
              <p className="text-custom2 text-[#39CDCC]">General Details</p>
            </a>
            <a href="" className="mr-5 w-48 flex justify-center ">
              <p className="text-custom2 ">Documents</p>
            </a>
            <a href="" className="mr-5 w-48 flex justify-center ">
              <p className="text-custom2 ">Bank Details</p>
            </a>
            <a href="" className="mr-5  w-48 flex justify-center ">
              <p className="text-custom2 ">Loans</p>
            </a>
            <a href="" className="mr-5 w-48 flex justify-center ">
              <p className="text-custom2 ">savings</p>
            </a>
            <a href="" className="mr-5 w-48 flex justify-center ">
              <p className="text-custom2 ">App and System</p>
            </a>
        </div>
      </div>

      <div className="w-full bg-white shadow-md mt-5 p-5 mb-10 overflow-x-scroll">
      <p className="text-custom2 text-[#213F7D] mr-10 font-bold mb-5">Personal Information</p>
        <div className="flex flex-wrap border-b-2 border-[#ecedf0]">
          <table className="mb-5 w-full min-w-[1000px] ">
            <tbody className="">
              <tr className="">
              <td>
                <div className="">
                  <p className="text-custom2 text-[#545F7D] mr-10">FULL NAME</p>
                  <p className="text-custom2 text-[#545F7D] mr-10 font-bold">{user.name}</p>
                </div>
              </td>
              <td>
                <div className="">
                  <p className="text-custom2 text-[#545F7D] mr-10">PHONE NUMBER</p>
                  <p className="text-custom2 text-[#545F7D] mr-10 font-bold">{user.phone}</p>
                </div>
              </td>
              <td>
              <div className="">
                <p className="text-custom2 text-[#545F7D] mr-10">EMAIL ADDRESS</p>
                <p className="text-custom2 text-[#545F7D] mr-10 font-bold">{user.email}</p>
              </div>
              </td>
              <td>
              <div className="">
                  <p className="text-custom2 text-[#545F7D] mr-10">BVN</p>
                  <p className="text-custom2 text-[#545F7D] mr-10 font-bold">09016658406</p>
              </div>
              </td>
              <td>
              <div className="">
                <p className="text-custom2 text-[#545F7D] mr-10">GENDER</p>
                <p className="text-custom2 text-[#545F7D] mr-10 font-bold">{user.gender}</p>
              </div>
              </td>
              </tr>

              <tr>
              <td>
              <div className="mt-10">
                <p className="text-custom2 text-[#545F7D] mr-10">MARITAL STATUS</p>
                <p className="text-custom2 text-[#545F7D] mr-10 font-bold">{user.marital_status}</p>
              </div>
              </td>
              <td>
              <div className="mt-10">
                <p className="text-custom2 text-[#545F7D] mr-10">CHILDREN</p>
                <p className="text-custom2 text-[#545F7D] mr-10 font-bold">None</p>
              </div>
              </td>
              <td>
              <div className="mt-10">
                <p className="text-custom2 text-[#545F7D] mr-10">ADDRESS</p>
                <p className="text-custom2 text-[#545F7D] mr-10 font-bold">{user.residence}</p>
              </div>
              </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-custom2 text-[#213F7D] mr-10 font-bold mb-5 mt-5">Education and Employment</p>
        <div className="flex flex-wrap border-b-2 border-[[#ecedf0]]">
          <table className="w-full mb-5 min-w-[1000px] ">
            <tbody>
              <tr className="">
              <td>
                <div className="">
                  <p className="text-custom2 text-[#545F7D] mr-10">LEVEL OF EDUCATION</p>
                  <p className="text-custom2 text-[#545F7D] mr-10 font-bold">{user.education}</p>
                </div>
              </td>
              <td>
                <div className="">
                  <p className="text-custom2 text-[#545F7D] mr-10">EMPLOYMENT STATUS</p>
                  <p className="text-custom2 text-[#545F7D] mr-10 font-bold">{user.employment_status}</p>
                </div>
              </td>
              <td>
              <div className="">
                <p className="text-custom2 text-[#545F7D] mr-10">SECTOR OF EMPLOYMENT</p>
                <p className="text-custom2 text-[#545F7D] mr-10 font-bold">{user.sector}</p>
              </div>
              </td>
              <td>
              <div className="">
                  <p className="text-custom2 text-[#545F7D] mr-10">DURATION OF EMPLOYMENT</p>
                  <p className="text-custom2 text-[#545F7D] mr-10 font-bold">{user.duration_of_employment}</p>
              </div>
              </td>
              </tr>

              <tr>
              <td>
              <div className="mt-10">
                <p className="text-custom2 text-[#545F7D] mr-10">OFFICE EMAIL</p>
                <p className="text-custom2 text-[#545F7D] mr-10 font-bold">{user.office_email}</p>
              </div>
              </td>
              <td>
              <div className="mt-10">
                <p className="text-custom2 text-[#545F7D] mr-10">MONTHLY INCOME</p>
                <p className="text-custom2 text-[#545F7D] mr-10 font-bold">₦{user.income}</p>
              </div>
              </td>
              <td>
              <div className="mt-10">
                <p className="text-custom2 text-[#545F7D] mr-10">LOAN REPAYMENT</p>
                <p className="text-custom2 text-[#545F7D] mr-10 font-bold">{user.loan_repaid_amount}</p>
              </div>
              </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-custom2 text-[#213F7D] mr-10 font-bold mb-5 mt-5">Socials</p>
        <div className="flex flex-wrap border-b-2 border-[[#ecedf0]]">
          <table className="w-full mb-5">
            <tbody>
              <tr className="">
              <td>
                <div className="">
                  <p className="text-custom2 text-[#545F7D] mr-10">TWITTER</p>
                  <p className="text-custom2 text-[#545F7D] mr-10 font-bold">{user.twitter}</p>
                </div>
              </td>
              <td>
                <div className="">
                  <p className="text-custom2 text-[#545F7D] mr-10">FACEBOOK</p>
                  <p className="text-custom2 text-[#545F7D] mr-10 font-bold">{user.facebook}</p>
                </div>
              </td>
              <td>
              <div className="">
                <p className="text-custom2 text-[#545F7D] mr-10">INSTAGRAM</p>
                <p className="text-custom2 text-[#545F7D] mr-10 font-bold">{user.instagram}</p>
              </div>
              </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-custom2 text-[#213F7D] mr-10 font-bold mb-5 mt-5">Guarantor</p>
        <div className="flex flex-wrap border-b-2 border-[[#ecedf0]]">
          <table className="w-full mb-5 min-w-[1000px] ">
            <tbody>
              <tr className="">
              <td>
                <div className="">
                  <p className="text-custom2 text-[#545F7D] mr-10">FULL NAME</p>
                  <p className="text-custom2 text-[#545F7D] mr-10 font-bold">Debby Ogana</p>
                </div>
              </td>
              <td>
              <div className="">
                <p className="text-custom2 text-[#545F7D] mr-10">PHONE NUMBER</p>
                <p className="text-custom2 text-[#545F7D] mr-10 font-bold">07050780922</p>
              </div>
              </td>
              <td>
              <div className="">
                  <p className="text-custom2 text-[#545F7D] mr-10">EMAIL ADDRESS</p>
                  <p className="text-custom2 text-[#545F7D] mr-10 font-bold">Debby@gmail.com</p>
              </div>
              </td>
              <td>
              <div className="">
                  <p className="text-custom2 text-[#545F7D] mr-10">RELATIONSHIP</p>
                  <p className="text-custom2 text-[#545F7D] mr-10 font-bold">Sister</p>
              </div>
              </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-custom2 text-[#213F7D] mr-10 font-bold mb-5 mt-5"></p>
        <div className="flex flex-wrap border-b-2 border-[#ecedf0]">
          <table className="w-full mb-5 min-w-[1000px] ">
            <tbody>
              <tr className="">
              <td>
                <div className="">
                  <p className="text-custom2 text-[#545F7D] mr-10">FULL NAME</p>
                  <p className="text-custom2 text-[#545F7D] mr-10 font-bold">Debby Ogana</p>
                </div>
              </td>
              <td>
              <div className="">
                <p className="text-custom2 text-[#545F7D] mr-10">PHONE NUMBER</p>
                <p className="text-custom2 text-[#545F7D] mr-10 font-bold">07050780922</p>
              </div>
              </td>
              <td>
              <div className="">
                  <p className="text-custom2 text-[#545F7D] mr-10">EMAIL ADDRESS</p>
                  <p className="text-custom2 text-[#545F7D] mr-10 font-bold">Debby@gmail.com</p>
              </div>
              </td>
              <td>
              <div className="">
                  <p className="text-custom2 text-[#545F7D] mr-10">RELATIONSHIP</p>
                  <p className="text-custom2 text-[#545F7D] mr-10 font-bold">Sister</p>
              </div>
              </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}