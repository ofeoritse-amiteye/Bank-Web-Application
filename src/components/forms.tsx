"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

    if (storedUser.email === email && storedUser.password === password) {
      alert("Login successful!");
      router.push("/homepage"); 
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="md:w-1/2 w-2/3 bg-transparent">
      <Image src={"/logo.png"} alt="no image" height={100} width={173.76} className="md:hidden mb-10"/>
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
