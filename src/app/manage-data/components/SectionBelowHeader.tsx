'use client'
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import Icons from "@/components/svgs/SvgExports";
import { ForestData, LandData } from "../../../../types";
import Switch from "@/components/Switch";
import { useState } from "react";

type SectionBelowHeaderProps ={
    manageData?:boolean,
    viewSubGroup?:boolean,
    land?:boolean
    view?:boolean,
    edit?:boolean,
    data?:ForestData|LandData|null,
    handleClick?:()=>void,
    handleDeleteButton?:()=>void,
    add?:boolean
}


export default function SectionBelowHeader({
    manageData,
    viewSubGroup,
    land,
    view,
    edit,
    data,
    handleClick,
    add,
    handleDeleteButton
}:SectionBelowHeaderProps){
    const [isSwitchOpen,setSwitch] = useState(false);
    
    return(
     <>
        {manageData ?
            <div className=" w-full h-[40px]  font-prompt text-[#27272A] items-center  flex  flex-row justify-between my-[24px] whitespace-nowrap ">
                          <div className="w-auto h-[40px]  font-medium items-center flex text-base md:text-xl">จัดการข้อมูล</div>
                          <div className="w-auto h-[40px] items-center flex"><InputField iconSearch  className="h-[34px] w-[287px] rounded-2xl" /></div>
                          <div className="w-auto h-[40px] items-center flex"><Button text="เพิ่มข้อมูล" className="w-[113px] h-[40px] rounded-lg " onClick={handleClick}><Icons.Add /></Button></div>
            </div>
        :
            viewSubGroup 
            ? <div className=" w-full h-[40px] max-md:w-[50%] font-prompt text-[#27272A] items-center  flex  flex-row justify-between my-[24px] whitespace-nowrap ">
                          <div className="flex flex-row items-center text-base md:text-xl ">
                              <div className=" md:pr-[12px] w-auto h-[24px]  font-medium items-center flex">จัดการข้อมูล</div>
                              <Icons.Forward className=" w-[28px] h-[28px]"/>
                              <div className="md:pl-[12px] w-auto h-[24px]  font-medium items-center flex">{land ? "ข้อมูลแปลงที่ดิน":"ข้อมูลพรรณไม้" }</div>                
                          </div>
                          <div className="w-auto h-[40px] items-center flex"><InputField iconSearch  className="h-[34px] w-[287px] rounded-2xl" /></div>
                          <div className="w-auto h-[40px] items-center flex"><Button text="เพิ่มข้อมูล" className="w-[113px] h-[40px] rounded-lg  " onClick={handleClick}><Icons.Add /></Button></div>
                    </div> 
            
            : 
                view 
                ?
                    <div className="w-full my-[24px] flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                      
                                <div className="text-base md:text-xl font-prompt font-medium text-[#27272A]">
                                  {land ? "แปลงที่ " :"พรรณที่ " } {data?.number}
                                </div>
                    
                                
                                <div className="flex gap-7 ">
                                  <Button onClick={handleClick} text="แก้ไข" className="w-[86px] h-[40px] rounded-lg">
                                    <Icons.Edit />
                                  </Button>
                                  <Button text="ลบ" className="w-[86px] h-[40px] rounded-lg" variant="delete" onClick={handleDeleteButton}>
                                    <Icons.Delete />
                                  </Button>
                                </div>
                            </div>
                    
                : edit
                ?
                    <div className="w-full h-[32px]  flex flex-row md:justify-between md:items-center gap-4">
                      
                                <div className=" text-base md:text-xl font-prompt font-medium text-[#27272A] flex items-center ">
                                   {land ?"แก้ไขข้อมูลแปลงที่ " :"แก้ไขข้อมูลพรรณที่ " }  {data?.number}
                                </div>
                    
                                
                                <div className=" h-[30px] w-[201px] flex gap-[16px] max-md:gap-[6px] flex-row items-center justify-center     ">
                                  <div className="md:text-xl text-base font-prompt font-medium text-[#27272A] w-full h-[24px]">แสดงบนแผนที่</div>
                                  <Switch onClick={()=>setSwitch(!isSwitchOpen)} isOpen={isSwitchOpen}/>
                                  
                                </div>
                            </div>
                    
                
                :add
                ? <div className="w-full h-[32px]  flex flex-row md:justify-between md:items-center gap-4">
                      
                                <div className=" text-base md:text-xl font-prompt font-medium text-[#27272A] flex items-center ">
                                   นำเข้าข้อมูล
                                </div>
                    
                                
                                <div className=" h-[30px] w-[201px] flex gap-[16px] max-md:gap-[6px] flex-row items-center justify-center     ">
                                  <div className="md:text-xl text-base font-prompt font-medium text-[#27272A] w-full h-[24px]">แสดงบนแผนที่</div>
                                  <Switch onClick={()=>setSwitch(!isSwitchOpen)} isOpen={isSwitchOpen}/>
                                  
                                </div>
                            </div>
                :undefined

        }
    
    </>);
}