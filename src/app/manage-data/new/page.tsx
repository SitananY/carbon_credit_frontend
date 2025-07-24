'use client'
import {  useRouter } from "next/navigation";
import SectionBelowHeader from "@/components/SectionBelowHeader";
import SectionHeader from "@/components/SectionHeader";
import ViewDetailDataCard from "@/app/manage-data/components/ViewDetailDataCard";
import Popup from "@/components/Popup";
import { useState } from "react";
import NewDataCard from "../components/NewDataCard";
import Button from "@/components/Button";





export default function New( ) {


  const router = useRouter();
  const [isShow,setIsShow] = useState(false); 

  const handleClick = () => {
        const path = `/manage-data/`;
        router.push(path);
  }

  return (
    <div className="w-full h-full p-[32px] ">
        <div className=" flex flex-col  justify-center ">
        
                <SectionHeader title="จัดการข้อมูลแปลงที่ดิน" backHref/> 

                <div className="py-[24px]">
                <SectionBelowHeader add   />
                </div>
                <NewDataCard/>
                <div className="flex items-center justify-between mt-[24px]">
                    <div>ผู้บันทึกข้อมูล user1 วันที่ 12 มิถุนายน 2568 เวลา 9:18 น.</div>
                    <div className="flex items-center flex-row gap-[15px]"> 
                    <Button text="ยืนยัน"  className="w-[86px] h-[40px] rounded-xl"/>
                    <Button text="ยกเลิก" variant="secondary" className="w-[86px] h-[40px] rounded-xl" />

                    </div>

                </div>
        </div>
        <Popup isShow={isShow} onCancle={()=>setIsShow(!isShow)} onConfirm={handleClick} add/>

    </div>
        
  
  
  );
}
