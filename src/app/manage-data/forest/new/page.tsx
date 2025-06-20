'use client'
import {  useRouter } from "next/navigation";
import SectionBelowHeader from "@/app/manage-data/components/SectionBelowHeader";
import SectionHeader from "@/app/manage-data/components/SectionHeader";
import ViewDetailDataCard from "@/app/manage-data/components/ViewDetailDataCard";
import Popup from "@/app/manage-data/components/Popup";
import { useState } from "react";





export default function New( ) {


  const router = useRouter();
  const [isShow,setIsShow] = useState(false); 

  const handleClick = () => {
        const path = `/manage-data/forest`;
        router.push(path);
  }

  return (
    <div className="w-full h-full ">
        <div className=" flex flex-col  justify-center">
        <div className="w-full  flex flex-col  p-[32px]  ">
            
            <div className="mb-[24px] ">
                <SectionHeader title="จัดการข้อมูลพรรณไม้" backHref={`/manage-data/forest`}/> 
            </div>
            <div className="mb-[24px] ">
                <SectionBelowHeader add  />
            </div>

            <ViewDetailDataCard  isForest onConfirm={()=>setIsShow(!isShow)} onCancle={handleClick} add/>
                

        </div>
        </div>
        <Popup isShow={isShow} onCancle={()=>setIsShow(!isShow)} onConfirm={handleClick} add/>
    </div>
        
  
  
  );
}
