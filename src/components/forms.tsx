"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Loginform() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(true); 
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      localStorage.setItem("user", JSON.stringify({
        email: "jamesjohn123@gmail.com",
        password: "12345USER",
      }));
    }
  }, []);

  const handleLogin = () => {
    router.push("/dashboard"); 
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

    if (storedUser.email === email && storedUser.password === password) {
      alert("Login successful!");
    } else {
      alert("Invalid credentials. Please try again.");
      setPassword("")
      setEmail("")
    }
  };

  setTimeout(() => {
    setShowPopup(false);
  }, 10000);

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="md:w-1/2 w-2/3 bg-transparent">
      {showPopup && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md mb-5">
            Email : jamesjohn123@gmail.com < br/>
            password: 12345USER
          </div>
        )}
      <Image src={"/images/logo.png"} alt="no image" height={100} width={173.76} className="md:hidden mb-10"/>
        <h2 className="text-[40px] font-bold text-[#213F7D]">Welcome!</h2>
        <p className="text-[#545F7D]">Enter details to Login</p>
        <div className="mt-10 mb-5 w-full">
          <input
            type="email"
            placeholder="Email"
            className="w-full h-10 p-4 rounded-md border-2 border-gray-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <input
            type="password"
            placeholder="Password"
            className="w-full h-10 p-4 rounded-md border-2 border-gray-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p className="text-[#39CDCC] text-sm font-bold">FORGOT PASSWORD?</p>
        <div className="mt-10 w-full">
          <button
            type="button"
            onClick={handleLogin}
            className="w-full h-10 text-white rounded-md bg-[#39CDCC]"
          >
            LOG IN
          </button>
        </div>

      </div>
    </div>
  );
}

export const Filterform = () =>
{

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow-md">
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Organization</label>
          <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            <option>Select</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input type="text" placeholder="User" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" placeholder="Email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input type="date" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input type="text" placeholder="Phone Number" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            <option>Select</option>
          </select>
        </div>

        <div className="flex justify-between mt-4">
          <button type="button" className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100">
            Reset
          </button>
          <button type="submit" className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-teal-500 border border-transparent rounded-md hover:bg-teal-600">
            Filter
          </button>
        </div>
      </form>
    </div>
  );
};
