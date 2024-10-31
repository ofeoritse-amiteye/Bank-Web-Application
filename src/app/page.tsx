"use client"
import Loginform from "@/components/forms";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full flex">
      <div className=" hidden h-screen w-1/2 md:block">
        <div className="h-1/3 w-full items-center flex">
          <div className="m-10">
            <Image src={"/logo.png"} alt="no image" height={100} width={173.76}></Image>
          </div>
        </div>
        <div className=" h-2/3 justify-center flex">
          <div>
            <Image src={"/lendsqr_img.png"} alt="no image" height={100} width={600}/>
          </div>
        </div>
      </div>
      <div className="h-screen w-full items-center justify-center md:flex md:w-1/2 shadow-lg">
      <Loginform/>
      </div>
    </div>
  );
}
