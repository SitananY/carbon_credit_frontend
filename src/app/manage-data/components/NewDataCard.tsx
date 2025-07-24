"use client"
import ListItem from "@/components/ListItem";
import { DataGroup } from "@/types/types";
import Icons from "@/components/svgs/SvgExports";
import { useState } from "react";
import IconButton from "@/components/IconButton";
import InputField from "@/components/InputField";
import Button from "@/components/Button";

type NewDataCardProps ={
    isDisabled?:boolean
    processHandle?:()=>void
}

type BlockProps={
    labelText:string,
    itemText:string,
    isIconDown?:boolean,
}
export function Block({
    labelText
    ,itemText,
    isIconDown,
    
}:BlockProps){
    
    return(
        <div className="w-full h-full flex flex-col  gap-[5px]">
            <div className="w-full h-full flex  items-center font-prompt  ">{itemText}</div>
            <InputField  className="h-[32px] w-full" placeholder={labelText} inputClassName="rounded-lg pl-[10px]" iconDown={isIconDown}/>
        </div>
    );
}


export default function NewDataCard(
    { isDisabled ,
        processHandle
      }:NewDataCardProps
){
    const [isSelected,setIsSelected] = useState("1");
    const handleSelected=(key:string)=>{
        return (isSelected===key) ? isDisabled ? "bg-cancel-500 text-white" : "bg-primary-500 text-white" : "bg-cancel-300 text-text-800"
    }
    const ButtonClassName = "w-[auto] h-full px-[8px]  rounded-tl-2xl rounded-tr-2xl  font-prompt  items-center justify-center flex"
    
    return(
        <div className="w-full h-auto  flex flex-col font-propmt">
              <div className="w-full h-[40px] flex flex-row cursor-pointer justify-between">
                    <div className="w-full h-[40px] flex flex-row cursor-pointer ">
                        <div key={1} className={`${ButtonClassName} ${handleSelected("1")}`} onClick={()=>{isDisabled ? undefined :setIsSelected("1")}}>ข้อมูลแปลงที่ดิน</div>
                        <div key={2} className={`${ButtonClassName} ${handleSelected("2")}`} onClick={()=>{isDisabled ? undefined :setIsSelected("2")}}>ข้อมูลต้นไม้</div>
                        <div key={3} className={`${ButtonClassName} ${handleSelected("3")}`} onClick={()=>{isDisabled ? undefined :setIsSelected("3")}}>ข้อมูลสำรวจ</div>
                    </div>
                    <div className="">
                        <div key={4} className={`${ButtonClassName} bg-primary-500 text-white `} onClick={()=>{isDisabled ? undefined :setIsSelected("3")}}><Icons.Import className="w-[18px] h-[18px]"/>import</div>  
                    </div>                    
              </div>  
            <div className="w-full h-full flex flex-col bg-white border border-neutral-700  rounded-bl-2xl rounded-br-2xl  px-[24px] py-[16px]  gap-3">
                    {isSelected=="1"  ? 
                    <>
                       <div className="w-full h-full flex flex-col gap-[10px] ">
                            <div className="w-full h-full flex flex-row justify-between gap-[30px]">
                                <Block itemText="เลขโฉนดที่ดิน" labelText="ระบุเลขโฉนดที่ดิน"/>
                                <Block itemText="หน้าสำรวจ" labelText="ระบุหน้าสำรวจ"/>
                            </div>
                            <div className="w-full h-full flex flex-row justify-between gap-[30px]">
                                <Block itemText="เลขที่ดิน" labelText="ระบุเลขที่ดิน"/>
                                <Block itemText="ระวาง" labelText="ระบุระวาง"/>
                            </div>
                            <div className="w-full h-full flex flex-row justify-between gap-[30px]">
                                <Block itemText="จังหวัด" labelText="เลือกจังหวัด" isIconDown/>
                                <Block itemText="อำเภอ" labelText="เลือกอำเภอ" isIconDown/>
                                <Block itemText="ตำบล" labelText="เลือกตำบล" isIconDown/>
                            </div>
                            <div className="w-full h-full flex flex-row justify-between gap-[30px]">
                                <Block itemText="เนื้อที่ (ไร่-งาน-ตารางวา)" labelText="ระบุเนื้อที่ (ไร่-งาน-ตารางวา)" />
                                <Block itemText="ประเภทป่า" labelText="เลือกประเภทป่า" isIconDown/>
                                <Block itemText="ปริมาณน้ำฝน (มิลลิเมตร)" labelText="เช่น 1000" />
                            </div>

                       </div>
                    </>    
                    : isSelected=="2"  ?
                    <>
                         <div className="w-full h-full flex flex-col gap-[10px] ">
                            <div className="w-full h-full flex flex-row justify-between gap-[30px]">
                                <div className="font-prompt  font-medium w-[auto]">ชนิดที่ 1 </div>
                                <InputField  className="h-[32px] w-full" placeholder="ระบุชื่อทั่วไป" inputClassName="rounded-lg pl-[10px]" />

                            </div>
                            <div className="w-full h-full flex flex-row justify-between gap-[30px]">
                                <Block itemText="ชื่อวิทยาศาสตร์" labelText="ระบุชื่อวิทยาศาสตร์"/>
                                <Block itemText="ชื่อวงศ์" labelText="ระบุชื่อวงศ์"/>
                            </div>
                            <div className="w-full h-full flex flex-row justify-between gap-[30px]">
                                <Block itemText="ชื่อสามัญ" labelText="ระบุชื่อสามัญ"/>
                                <Block itemText="ชื่ออื่น" labelText="ระบุชื่ออื่น (ถ้ามี)"/>
                            </div>
                            <div className="w-full h-full flex flex-row justify-between gap-[30px]">
                                <Block itemText="เส้นรอบวง (GBH) (เซนติเมตร)" labelText="เช่น 10.1" isIconDown/>
                                <Block itemText="จำนวนต้น" labelText="เช่น 10" isIconDown/>
                            </div>
                            <div className="w-full h-full flex flex-row justify-between gap-[30px]">
                                <Block itemText="เนื้อที่ (ไร่-งาน-ตารางวา)" labelText="ระบุเนื้อที่ (ไร่-งาน-ตารางวา)" />
                                <Block itemText="ประเภทป่า" labelText="เลือกประเภทป่า" isIconDown/>
                                <Block itemText="ปริมาณน้ำฝน (มิลลิเมตร)" labelText="เช่น 1000" />
                            </div>
                                <Button text="เพิ่มต้นไม้" variant="tonal" className="w-full h-[40px] rounded-lg pl-[15px]  "  ><Icons.Add className="h-[18px] w-[18px]"/> </Button>

                       </div>
                    </>
                    :isSelected=="3" ? 
                    <>
                         <div className="w-full h-full flex flex-row gap-[10px] font-prompt ">
                               <div className="flex flex-col w-full h-full  ">
                                     รูปแปลงที่ดิน
                                     <div className="w-full h-[198px] border-dashed border-1 bg-neutral-300 flex flex-col items-center justify-center">
                                        <Icons.Add_photo_alternate className="text-primary-500"/>
                                        คลิกเพื่ออัพโหลดรูปภาพ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                </div>

                               </div>
                               
                               <div   className="flex flex-col w-full h-full ">
                                    รูปพรรณไม้ 
                                    <div className="w-full h-[198px] border-dashed border-1 bg-neutral-300 flex flex-col items-center justify-center">
                                            <Icons.Add_photo_alternate className="text-primary-500"/>
                                            คลิกเพื่ออัพโหลดรูปภาพ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                    </div>
                               </div>
                                
                               
                         </div>
                                
                    </>
                    :undefined
                    
                    
                    
                    } 
                    
            </div>

            
        </div>
    );
}