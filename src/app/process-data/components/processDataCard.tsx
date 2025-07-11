"use client"
import ListItem from "@/components/ListItem";
import { DataGroup } from "@/types/types";
import Icons from "@/components/svgs/SvgExports";
import { useState } from "react";
import IconButton from "@/components/IconButton";

type ProcessDataCardProps ={
    isDisabled?:boolean
    processHandle?:()=>void
}

type BlockProps={
    labelText:string,
    itemText:string,
    
}
export function Block({
    labelText
    ,itemText,
    
}:BlockProps){
    
    return(
        <div className="font-prompt text-sm w-full h-[77px]  ">
            <div className="text-text-800 ">{labelText}</div>
            <div className="flex flex-row gap-5 ">
                    <ListItem item={itemText} className="w-full h-[44px]"/>
                    <IconButton size="w-[44px] h-[44px]"rounded="rounded-lg"  newIconColor="text-text-800" outlined> <Icons.Edit className="w-[24px] h-[24px]"/></IconButton>
                    <IconButton size="w-[44px] h-[44px]"rounded="rounded-lg" outlineColor="border-error-500" newIconColor="text-text-800"  outlined> <Icons.Delete className="w-[24px] h-[24px]"/></IconButton>
                    
            </div>
        </div>
    );
}


export default function ProcessDataCard(
    { isDisabled ,
        processHandle
      }:ProcessDataCardProps
){
    const [isSelected,setIsSelected] = useState("1");
    const handleSelected=(key:string)=>{
        return (isSelected===key) ? isDisabled ? "bg-cancel-500 text-white" : "bg-primary-500 text-white" : "bg-cancel-300 text-text-800"
    }
    const ButtonClassName = "w-[auto] h-full px-[8px]  rounded-tl-2xl rounded-tr-2xl  font-prompt  items-center justify-center flex"
    
    return(
        <div className="w-full h-auto  flex flex-col font-propmt">
              <div className="w-full h-[40px] flex flex-row cursor-pointer">
                    <div key={1} className={`${ButtonClassName} ${handleSelected("1")}`} onClick={()=>{isDisabled ? undefined :setIsSelected("1")}}>ทั่วไป</div>
                    <div key={2} className={`${ButtonClassName} ${handleSelected("2")}`} onClick={()=>{isDisabled ? undefined :setIsSelected("2")}}>ป่าเต็งรัง</div>
                    <div key={3} className={`${ButtonClassName} ${handleSelected("3")}`} onClick={()=>{isDisabled ? undefined :setIsSelected("3")}}>ป่าดิบแล้ง</div>
                    <div key={4} className={`${ButtonClassName} ${handleSelected("4")}`} onClick={()=>{isDisabled ? undefined :setIsSelected("4")}}>ดูจากปริมาณน้ำฝน</div>
              </div>  
            <div className="w-full h-full flex flex-col bg-white border border-neutral-700  rounded-bl-2xl rounded-br-2xl rounded-tr-2xl px-[24px] py-[16px]  gap-3">
                    {isSelected=="1"  ? 
                    <>
                        <Block labelText="น้ำหนักแห้ง (กิโลกรัม)" itemText="Y = WS + WB + WL"/>
                        <Block labelText="เส้นผ่านศูนย์กลางตรงสูงเพียงอก (1.30 เมตร เหนือพื้นดิน) (เซนติเมตร)" itemText="DBH = GBH / π"/>
                        <Block labelText="ปริมาณคาร์บอน (ตันคาร์บอน)" itemText="C = 0.5 × Y"/>
                        <Block labelText="การกักเก็บคาร์บอน (ตันคาร์บอนไดออกไซด์)" itemText="CC = C × (44 / 12)"/>
                        <Block labelText="ความสามารถในการผลิตออกซิเจน (ตันออกซิเจน)" itemText="O2 = C × (32 / 12)"/>
                    </>    
                    : isSelected=="2"  ?
                    <>
                        <Block labelText="ความสูง (เมตร)" itemText="H = (121.8 × DBH0.638) / (38.8 + 3.14 × DBH0.638)"/>
                        <Block labelText="น้ำหนักแห้งของลำต้น (กิโลกรัม)" itemText="WS = 0.0396 × (DBH2 × H)0.933  "/>
                        <Block labelText="น้ำหนักแห้งของกิ่ง (กิโลกรัม)" itemText="WB = 0.00349 × (DBH2 × H)1.03 "/>
                        <Block labelText="น้ำหนักแห้งของใบ (กิโลกรัม)" itemText="WL = WS / (22.5 + 0.025 × WS)"/>
                    </>
                    :isSelected=="3" ? 
                    <>
                        <Block labelText="ความสูง (เมตร)" itemText="H = (85.6 × DBH0.916) / (46.8 + 1.83 × DBH0.916)"/>
                        <Block labelText="น้ำหนักแห้งของลำต้น (กิโลกรัม)" itemText="WS = 0.0509 × (DBH2 × H)0.919"/>
                        <Block labelText="น้ำหนักแห้งของกิ่ง (กิโลกรัม)" itemText="WB = 0.00893 × (DBH2 × H)0.977"/>
                        <Block labelText="น้ำหนักแห้งของใบ (กิโลกรัม)" itemText="WI = 0.014 × (DBH2 × H)0.669"/>
                    
                    </>
                    : isSelected=="4" ? 
                    <>
                        <div className="font-prompt h-[48px] pt-[4px] ">ถ้าเส้นผ่านศูนย์กลางตรงสูงเพียงอกมีค่าเกิน 5 เซนติเมตร</div>
                        <Block labelText="น้ำหนักแห้ง หากมีปริมาณน้ำฝน < 1,500 มิลลิเมตร (กิโลกรัม)" itemText="Y = 34.4703 − 8.071 × DBH + 0.6589 × DBH2 "/>
                        <Block labelText="น้ำหนักแห้ง หากมีปริมาณน้ำฝนระหว่าง 1,500 - 4,000 มิลลิเมตร (กิโลกรัม)" itemText="Y = 38.4908 − 11.7883 × DBH + 1.1926 × DBH2  "/>
                        <Block labelText="น้ำหนักแห้ง หากมีปริมาณน้ำฝน > 4,000 มิลลิเมตร (กิโลกรัม)" itemText="Y = 13.2579 − 4.8945 × DBH + 0.6713 × DBH2"/>
                    </>
                    :undefined
                    
                    
                    
                    } 
                    
            </div>

            
        </div>
    );
}