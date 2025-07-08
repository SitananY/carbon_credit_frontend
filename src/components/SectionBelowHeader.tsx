'use client'
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import Icons from "@/components/svgs/SvgExports";
import { ForestData, LandData } from "@/types/types";
import Switch from "@/components/Switch";
import { useState } from "react";
import ExportDropDown from "@/app/dashboard/components/ExportDropDown";import SortFilterDropdown from "./SortFilterDropdown";
import Link from "next/link";
 "@/app/dashboard/components/ExportDropDown";

type SectionBelowHeaderProps ={
    manageData?:boolean,
    viewSubGroup?:boolean,
    land?:boolean
    view?:boolean,
    edit?:boolean,
    data?:ForestData|LandData|null,
    handleClick?:()=>void,
    handleDeleteButton?:()=>void,
    add?:boolean,
    dashboard?:boolean,
    onFilterSelected?: (selected: string | string[]) => void,
    children?:React.ReactNode,
    selectedIds?: string[];
}

// const handleDeleteSelected={()=>{
//     console.log("Delete")
// }}
// const handleEditSelected={}

export default function SectionBelowHeader({
    manageData,
    viewSubGroup,
    land,
    view,
    edit,
    data,
    handleClick,
    add,
    handleDeleteButton,
    dashboard,
    onFilterSelected=()=>{},
    children,
    selectedIds=[""]
}:SectionBelowHeaderProps){
    const [isSwitchOpen,setSwitch] = useState(false);
    
    return(
     <>
        {manageData ?
            <div className=" w-full h-[auto]  font-prompt text-text-800  my-[24px] max-sm:flex-col flex flex-col gap-4  max-sm:gap-3 max-sm:h-[auto] ">
                        <div className="items-center  flex  flex-row justify-between">
                          <div className="w-auto h-[40px]  font-medium items-center flex text-xl">จัดการข้อมูล</div>
                          <div className="w-auto h-[40px] items-center flex"><Button text="เพิ่มข้อมูล" className="w-[113px] h-[40px] rounded-lg " onClick={handleClick}><Icons.Add /></Button></div>
                        </div>
                        <div className="flex w-full flex-row items-center justify-between ">
                          <div className="flex flex-row items-center gap-5">
                          <div className="w-[auto] h-[40px] items-center flex"><InputField iconSearch  className="w-[248px] h-[32px]" inputClassName="rounded-2xl pl-[35px]" placeholder="ค้นหาจากชื่อ" /></div>
                           <SortFilterDropdown
                                    type="filter"
                                    options={["ป่าดิบแล้ง", "ป่าเบญพรรณ", "ป่าเต็งรัง"]}
                                    onSelect={onFilterSelected}
                                  />
                          {children}
                          </div>
                          <div className="w-[auto] h-[40px]">
                            
                             {selectedIds.length > 0 && (
                              <div className="w-[224px] h-[50px] bg-neutral-300 rounded-2xl border border-neutral-700 flex flex-row items-center justify-center gap-5">
                                <div>{selectedIds.length} รายการถูกเลือก</div>
                                <div className="flex gap-4">
              
                                  <div onClick={(e) => e.stopPropagation()}>
                                  <Link href={`/manage-data/0/edit`} >
                                          <Icons.Import className={`h-[18px] w-[18px] text-primary-500 `} />
                                  </Link> 
                                  </div>
                                  <div onClick={(e) => e.stopPropagation()}>
                                  <Icons.Delete className={`h-[18px] w-[18px]  text-error-500`} onClick={handleDeleteButton}  />
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        
            </div>
        :
            viewSubGroup 
            ? <div className=" w-full h-[40px]  font-prompt text-text-800 items-center  flex  flex-row justify-between my-[24px]  
            max-md:flex-col max-md:gap-3 max-md:h-[auto] max-md:w-[auto] max-md:items-center   whitespace-nowrap ">
                          <div className="flex flex-row items-center md:text-base text-xl  ">
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
                      
                                <div className="text-base md:text-xl font-prompt font-medium text-text-800">
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
                      
                                <div className=" text-base md:text-xl font-prompt font-medium text-text-800 flex items-center ">
                                   {land ?"แก้ไขข้อมูลแปลงที่ " :"แก้ไขข้อมูลพรรณที่ " }  {data?.number}
                                </div>
                    
                                
                                <div className=" h-[30px] w-[201px] flex gap-[16px] max-md:gap-[6px] flex-row items-center justify-center     ">
                                  <div className="md:text-xl text-base font-prompt font-medium text-text-800 w-full h-[24px]">แสดงบนแผนที่</div>
                                  <Switch onClick={()=>setSwitch(!isSwitchOpen)} isOpen={isSwitchOpen}/>
                                  
                                </div>
                            </div>
                    
                
                :add
                ? <div className="w-full h-[32px]  flex flex-row md:justify-between md:items-center gap-4">
                      
                                <div className=" text-base md:text-xl font-prompt font-medium text-text-800 flex items-center ">
                                   นำเข้าข้อมูล
                                </div>
                    
                                
                                <div className=" h-[30px] w-[201px] flex gap-[16px] max-md:gap-[6px] flex-row items-center justify-center     ">
                                  <div className="md:text-xl text-base font-prompt font-medium text-text-800 w-full h-[24px]">แสดงบนแผนที่</div>
                                  <Switch onClick={()=>setSwitch(!isSwitchOpen)} isOpen={isSwitchOpen}/>
                                  
                                </div>
                            </div>
                :dashboard
                ? <div className="w-full h-[40px]  flex flex-row justify-between items-center gap-[auto]">
                      
                                <InputField iconSearch iconDown placeholder="รายงานตามปี" className="w-[320px] h-[32px] " inputClassName="rounded-2xl pl-[35px]"/>
                                <InputField iconSearch iconDown placeholder="รายงานตามพื้นที่" className="w-[320px] h-[32px] " inputClassName="rounded-2xl pl-[35px]"/>
                                <ExportDropDown/>
                  </div>
                :undefined

        }
    
    </>);
}