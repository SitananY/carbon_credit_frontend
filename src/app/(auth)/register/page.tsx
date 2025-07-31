'use client'
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import TestCard from "@/components/Testcard";
import Icons from "@/components/svgs/SvgExports"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";



export default function Register() {
  const [isVisible,setIsVisible] = useState(false);
  const router = useRouter();
   const handleClick = () => {
          const path = `/login`;
          router.push(path);
    }

  return (
    <div className="w-screen h-screen flex  items-center justify-center bg-[url('/LoginBG.png')] bg-cover bg-center">
        <div className="w-[40%] max-md:w-[70%] h-[70%] bg-white border border-neutral-700 flex items-center justify-center rounded-[56px] 
        pb-[62px] pt-[42px] pl-[80px] pr-[80px] 
        max-md:pb-[30px] max-md:pt-[38px]  max-md:pl-[40px] max-md:pr-[40px]
        font-prompt font-medium">
              <div className="w-full  h-full flex flex-col justify-between items-center gap-[20px]  ">
                    <div className="flex justify-center items-center text-[36px]  w-full h-full ">
                      สร้างบัญชี
                    </div>
                    <div className="flex flex-row gap-[30px] ">
                         <div className="flex flex-col w-full gap-[16px] text-[20px]  ">
                          <div className="flex flex-row text-error-500">* <div className="text-text-800">ชื่อ</div></div> 
                
                          <InputField className=" w-full h-[52px]" placeholder="เช่น สมชาย"/>  
                        </div>
                        <div className="flex flex-col w-full gap-[16px] text-[20px] ">
                          <div className="flex flex-row text-error-500">* <div className="text-text-800"> นามสกุล </div></div> 
                          
                         
                          <InputField className="w-full h-[52px]" placeholder="เช่น ใจดี" />  
                        </div>
                    </div>
                    <div className="flex flex-col gap-[20px]  w-full h-full items-center "> 
                        <div className="flex flex-col w-full gap-[16px] text-[20px]  ">
                          <div className="flex flex-row text-error-500">* <div className="text-text-800">อีเมล</div></div> 
                          <InputField className=" w-full h-[52px]" placeholder="เช่น example@domain.com"/>  
                        </div>
                        <div className="flex flex-col w-full gap-[16px] text-[20px] ">
              
                          <div className="flex flex-row text-error-500">* <div className="text-text-800">รหัสผ่าน</div></div> 
                          <InputField className="w-full h-[52px]" rightItem={isVisible ?<Icons.Visibility onClick={()=>setIsVisible(!isVisible)}/> :<Icons.Visibility_off onClick={()=>setIsVisible(!isVisible)}/>} canPoint="" placeholder="กรอกอย่างน้อย 8 ตัวอักษร"/>  
                        </div>
                    </div>
                    <div className="flex flex-col w-full h-full ">
                          <Button text="สร้างบัญชี" className="w-full h-[52px] rounded-[32px]" textClassName="text-[20px] " onClick={handleClick}/>
                          <div className="flex flex-row justify-end items-center text-[18px] ">
                                <Link href={"/login"} className="hover:underline text-primary-500" >มีบัญชีแล้ว?</Link>
                          </div>
                    </div>
              </div>
        </div>
    </div>
  );
}
