'use client'
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import Label from "@/components/Label";
import TestCard from "@/components/Testcard";
import Icons from "@/components/svgs/SvgExports"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";



export default function Login() {
  const [isVisible,setIsVisible] = useState(false);
  const router = useRouter();
   const handleClick = () => {
          const path = `/manage-data`;
          router.push(path);
    }

  return (
    <div className="w-screen h-screen flex  items-center justify-center bg-[url('/LoginBG.png')] bg-cover bg-center  ">
        <div className="w-[40%] max-md:w-[70%] h-[70%] bg-white border border-neutral-700  flex items-center justify-center rounded-[56px] 
        pb-[62px] pt-[42px] pl-[80px] pr-[80px] 
        max-md:pb-[30px] max-md:pt-[38px]  max-md:pl-[40px] max-md:pr-[40px]
        font-prompt font-medium">
              <div className="w-full  h-full flex flex-col justify-between items-center  ">
                    <div className="flex justify-center items-center text-[36px]  w-full h-[auto] ">
                      ลงชื่อเข้าใช้
                    </div>
                    <div className="flex flex-col gap-[40px]  w-full h-[auto] items-center "> 
                      {/* <Label label="อีเมล" required size="text-2xl font-medium"/> */}
                        <div className="flex flex-col w-full gap-[16px] text-[20px]  ">
                          <div className="flex flex-row text-error-500">* <div className="text-text-800">อีเมล </div></div>
                          
                          <InputField type="email" className=" w-full h-[52px]" placeholder="เช่น example@domain.com"/>  
                        </div>
                        <div className="flex flex-col w-full gap-[16px] text-[20px] ">
                          
                          <div className="flex flex-row text-error-500">* <div className="text-text-800">รหัสผ่าน  </div></div>
                          <InputField type="password" className="w-full h-[52px]" rightItem={isVisible ?<Icons.Visibility onClick={()=>setIsVisible(!isVisible)}/> :<Icons.Visibility_off onClick={()=>setIsVisible(!isVisible)}/>} canPoint="" placeholder="รหัสผ่านของคุณ"/>  
                        </div>
                    </div>
                    <div className="flex flex-col w-full h-[auto]">
                          <Button text="ลงชื่อเข้าใช้" className="w-full h-[52px] rounded-[32px]" textClassName="text-[20px] " onClick={handleClick}/>
                          <div className="flex flex-row justify-between items-center text-[18px] ">
                                <Link href={"/change-password" } className="hover:underline text-primary-500">ลืมรหัสผ่าน?</Link>
                                <Link href={"/register"} className="hover:underline text-primary-500" >ยังไม่มีบัญชี?</Link>
                          </div>
                    </div>
              </div>
        </div>
    </div>
  );
}
