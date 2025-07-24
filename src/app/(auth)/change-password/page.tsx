'use client'
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import TestCard from "@/components/Testcard";
import Icons from "@/components/svgs/SvgExports"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";



export default function ChangePassword() {
  const [isVisible,setIsVisible] = useState(false);
  const router = useRouter();
   const handleClick = () => {
          const path = `/login`;
          router.push(path);
    }

  return (
    <div className="w-screen h-screen flex  items-center justify-center bg-[url('/LoginBG.png')] bg-cover bg-center ">
        <div className="w-[40%] max-md:w-[70%] h-[70%] bg-[#DDDDDC] flex items-center justify-center rounded-[56px] 
        pb-[62px] pt-[42px] pl-[80px] pr-[80px] 
        max-md:pb-[30px] max-md:pt-[38px]  max-md:pl-[40px] max-md:pr-[40px]
        font-prompt font-medium">
              <div className="w-full  h-full flex flex-col justify-between items-center gap-[20px]  ">
                    <div className="flex justify-center items-center text-[36px]  w-full h-full ">
                      เปลี่ยนรหัสผ่าน
                    </div>
                  
                    <div className="flex flex-col gap-[20px]  w-full h-full items-center "> 
                        <div className="flex flex-col w-full gap-[16px] text-[20px]  ">
                          อีเมลสำหรับรับรหัสยืนยัน 
                          <InputField className=" w-full h-[52px]"/>  
                        </div>
                        <div className="flex flex-col w-full gap-[16px] text-[20px]  ">
                          รหัสยืนยัน 
                          <InputField className=" w-full h-[52px]"/>  
                        </div>
                        <div className="flex flex-col w-full gap-[16px] text-[20px] ">
                          รหัสผ่านใหม่ 
                          <InputField className="w-full h-[52px]" rightItem={isVisible ?<Icons.Visibility onClick={()=>setIsVisible(!isVisible)}/> :<Icons.Visibility_off onClick={()=>setIsVisible(!isVisible)}/>} canPoint=""/>  
                        </div>
                    </div>
                    <div className="flex flex-col w-full h-full ">
                          <Button text="เปลี่ยนรหัสผ่าน" className="w-full h-[52px] rounded-[32px]" textClassName="text-[20px] " onClick={handleClick}/>
                          
                    </div>
              </div>
        </div>
    </div>
  );
}
