import Button from "@/components/Button";
import InputField from "@/components/InputField";
import Icons from "@/components/svgs/SvgExports";
import DataTableCard from ".././components/DataTableCard";
import { mockDataGroups } from ".././components/mockDataGroups";
import Link from "next/link";



export default function Forest() {

  return (
    <div className=" flex flex-col  justify-center">
    <div className="w-full  flex flex-col  py-[32px] xl:px-[148px] px-[32px]">
        <div className="w-full h-[40px] flex flex-row justify-between">
            <Link href={"/manage-data"} className=" w-[40px] h-[40px] ">
              <Icons.Backward className="w-[40px] h-[40px]"/>
            </Link>

            <div className=" w-full h-[40px]  font-prompt text-[#27272A] text-xl md:text-2xl font-medium flex  justify-end  whitespace-nowrap ">
                  ระบบฐานข้อมูลการสำรวจศักยภาพการกักเก็บคาร์บอนในพื้นที่ป่าไม้
            </div>
        </div>
        
        <div className=" w-full h-[40px] max-md:w-[50%] font-prompt text-[#27272A] items-center  flex  flex-row justify-between my-[24px] whitespace-nowrap ">
              <div className="flex flex-row items-center text-base md:text-xl ">
                  <div className=" md:pr-[12px] w-auto h-[24px]  font-medium items-center flex">จัดการข้อมูล</div>
                  <Icons.Forward className=" w-[28px] h-[28px]"/>
                  <div className="md:pl-[12px] w-auto h-[24px]  font-medium items-center flex">ข้อมูลพรรณไม้</div>                
              </div>
              <div className="w-auto h-[40px] items-center flex"><InputField iconSearch  className="h-[34px] w-[287px] rounded-2xl" /></div>
              <div className="w-auto h-[40px] items-center flex"><Button text="เพิ่มข้อมูล" className="w-[113px] h-[40px] rounded-lg "><Icons.Add /></Button></div>
        </div>
        <DataTableCard data={mockDataGroups} forest/>
    </div>
    </div>
    
  
  
  );
}
