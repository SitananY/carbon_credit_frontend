import Button from "@/components/Button";
import InputField from "@/components/InputField";
import TestCard from "@/components/Testcard";
import Link from "next/link";
import Icons from "@/components/svgs/SvgExports";
import DataTableCard from "./components/DataTableCard";
import { DataGroup } from "../../../types";
import { mockDataGroups } from "./components/mockDataGroups";



export default function ManageData() {

  return (
    <div className=" flex flex-col  justify-center">
    <div className="w-full  flex flex-col  py-[32px] px-[148px]">
        <div className=" w-full h-[40px]  font-prompt text-[#27272A] text-2xl font-medium flex  justify-end  whitespace-nowrap ">
              ระบบฐานข้อมูลการสำรวจศักยภาพการกักเก็บคาร์บอนในพื้นที่ป่าไม้
        </div>
        <div className=" w-full h-[40px]  font-prompt text-[#27272A] items-center font-medium flex  flex-row justify-between my-[24px] whitespace-nowrap ">
              <div className="text-xl">จัดการข้อมูล</div>
              <div ><InputField iconSearch  className="h-[32px] w-[287px] rounded-2xl" /></div>
              <div><Button text="เพิ่มข้อมูล" className="w-[113px] h-[40px] rounded-lg "><Icons.Add /></Button></div>
        </div>
        <DataTableCard data={mockDataGroups} group/>
    </div>
    </div>
    
  
  
  );
}
