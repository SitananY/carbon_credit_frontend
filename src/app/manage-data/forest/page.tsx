import Button from "@/components/Button";
import InputField from "@/components/InputField";
import Icons from "@/components/svgs/SvgExports";
import DataTableCard from ".././components/DataTableCard";
import { mockDataGroups } from ".././components/mockDataGroups";
import Link from "next/link";
import SectionHeader from "../components/SectionHeader";
import SectionBelowHeader from "../components/SectionBelowHeader";



export default function Forest() {

  return (
    <div className=" flex flex-col  justify-center">
    <div className="w-full  flex flex-col  py-[32px] xl:px-[148px] px-[32px]">
      
        <SectionHeader title="ระบบฐานข้อมูลการสำรวจศักยภาพการกักเก็บคาร์บอนในพื้นที่ป่าไม้"  backHref="/manage-data"/>
        <SectionBelowHeader viewSubGroup />
        <DataTableCard data={mockDataGroups} forest/>
    </div>
    </div>
    
  
  
  );
}
