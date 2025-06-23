'use client'
import {  useRouter } from "next/navigation";
import SectionBelowHeader from "@/components/SectionBelowHeader";
import SectionHeader from "@/components/SectionHeader";
import ViewDetailDataCard from "@/app/manage-data/components/ViewDetailDataCard";
import Popup from "@/components/Popup";
import { useState } from "react";





export default function New( ) {


  const router = useRouter();
  const [isShow,setIsShow] = useState(false); 

  const handleClick = () => {
        const path = `/manage-data/land`;
        router.push(path);
  }

  return (
    <div className="w-full h-full ">
        <div className=" flex flex-col  justify-center">
        <div className="w-full  flex flex-col  p-[32px]  ">
            
            <div className="mb-[24px] ">
                <SectionHeader title="จัดการข้อมูลแปลงที่ดิน" backHref={`/manage-data/land`}/> 
            </div>
            <div className="mb-[24px] ">
                <SectionBelowHeader add land  />
            </div>

            <ViewDetailDataCard   onConfirm={()=>setIsShow(!isShow)} onCancle={handleClick} add/>
                

        </div>
        </div>
        <Popup isShow={isShow} onCancle={()=>setIsShow(!isShow)} onConfirm={handleClick} add/>
    </div>
        
  
  
  );
}
