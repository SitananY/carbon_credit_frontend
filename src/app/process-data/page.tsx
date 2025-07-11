"use client"
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import ListItem from "@/components/ListItem";
import SectionBelowHeader from "@/components/SectionBelowHeader";
import SectionHeader from "@/components/SectionHeader";
import Icons from "@/components/svgs/SvgExports";
import ProcessDataCard from "@/app/process-data/components/ProcessDataCard";
import { useState } from "react";
import DataTableGeneral from "@/components/DataTableGeneral";


export default function ProcessData() {
  const [textTitle,setTextTitle] = useState("เลือกกลุ่มสูตร")
  const [isDisabled,setIsDisabled] = useState(false)
  const [formulaTitle,setFormulaTitle] = useState("ระบุชื่อสูตร")
  const [formulaText,setFormulaText] = useState("ระบุสูตร")
  const processHandle = (textTitle?:string , isDisabled?:boolean 
    ,formulaTitle?:string , formulaText?:string)=>{
      if(textTitle)setTextTitle(textTitle);
      if(isDisabled)setIsDisabled(isDisabled);
      if(formulaText){
          setFormulaText(formulaText);
      }
      if(formulaTitle){
          setFormulaTitle(formulaTitle);
      }
      
      
  }
  // const formulaHandle = (formulaTitle:string , formulaText:string)=>{
  //     setFormulaText(formulaText);
  //     setFormulaTitle(formulaTitle);
  // }
  const [isDescrip,setIsDescrip] = useState(false)
 
console.log(isDisabled);
  return (
     <div className="flex flex-col justify-center">
      <div className="w-full flex flex-col items-center py-[32px] xl:px-[148px] px-[32px] gap-7">
                                
                <SectionHeader title="ประมวลผลข้อมูล" backHref />
                <SectionBelowHeader isEditProcess={true} process processTextTitle={textTitle} processHandle={processHandle}/>                
                <ProcessDataCard isDisabled={isDisabled} processHandle={processHandle} />
                
                <div  className="h-[auto] w-full flex flex-col  gap-[20px]" >
                  <Button text="คำอธิบายตัวแปร" variant="tonal" className="w-full h-[40px] rounded-lg pl-[15px] " alignment="" onClick={()=>{setIsDescrip(!isDescrip)}}>
                  {isDescrip ? 
                  <>
                      <Icons.Down className="w-[18px] h-[18px]"/> 
                  </>
                  
                  :   <Icons.Forward className="w-[18px] h-[18px]"/>}
                  </Button>
                  {isDescrip && <DataTableGeneral data={[]} selectedIds={[]} setSelectedIds={()=>{}} isPage={false} progress />}
                </div>          
            
            </div>
            
            </div>
  );
}
