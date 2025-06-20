'use client'

import DataTableCard from ".././components/DataTableCard";
import { mockDataGroups } from ".././components/mockDataGroups";
import SectionHeader from "../components/SectionHeader";
import SectionBelowHeader from "../components/SectionBelowHeader";
import { useRouter } from "next/navigation";



export default function Forest() {
    const router = useRouter();
    const handleClick = () => {
          const path = `/manage-data/forest/new`;
          router.push(path);
    }
  return (
    <div className=" flex flex-col  justify-center">
    <div className="w-full  flex flex-col  py-[32px] xl:px-[148px] px-[32px]">
      
        <SectionHeader title="ระบบฐานข้อมูลการสำรวจศักยภาพการกักเก็บคาร์บอนในพื้นที่ป่าไม้"  backHref="/manage-data"/>
        <SectionBelowHeader viewSubGroup handleClick={handleClick}/>
        <DataTableCard data={mockDataGroups} forest />
    </div>
    </div>
    
  
  
  );
}
