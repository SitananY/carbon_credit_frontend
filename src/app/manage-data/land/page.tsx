'use client'
import { useRouter } from "next/navigation";
import DataTableCard from "@/app/manage-data/components/DataTableCard";
import { mockDataGroups } from "@/data/mockDataGroups";
import SectionBelowHeader from "@/components/SectionBelowHeader";
import SectionHeader from "@/components/SectionHeader";
import { useState } from "react";
import Popup from "@/components/Popup";



export default function Land() {
  const router = useRouter();
  const [isShow,setIsShow] = useState(false); 
  
  const handleClick = () => {
        const path = `/manage-data/land/new`;
        router.push(path);
  }
  return (
    <div className=" flex flex-col  justify-center">
    <div className="w-full  flex flex-col  py-[32px] xl:px-[148px] px-[32px]">
        <SectionHeader title="ระบบฐานข้อมูลการสำรวจศักยภาพการกักเก็บคาร์บอนในพื้นที่ป่าไม้" backHref/>
        <SectionBelowHeader viewSubGroup land handleClick={handleClick}/>
        <DataTableCard data={mockDataGroups} handleDeleteButton={()=>setIsShow(!isShow)} />
    </div>
        <Popup isShow={isShow} onCancle={()=>setIsShow(!isShow)} remove onConfirm={()=>setIsShow(!isShow)}/>
    </div>
    
  
  
  );
}
