'use client'
import Button from "@/components/Button";
import ListItem from "@/components/ListItem";
import Icons from "@/components/svgs/SvgExports";
import { useState } from "react";


type ExportDropDownProps = {
    // isOpen?:boolean,
    // onClick?:()=>void,

}

export default function ExportDropDown({
    // isOpen,
    // onClick,


}:ExportDropDownProps){
    const fileType = ["pdf","jpg","png","csv"];
    const [isOpen,setIsOpen] = useState(false);
    const [selectedType,setSelectedType] = useState<string|null>(null);

    const handleSelected = (type:string)=>{
        setSelectedType(type);
    }

    return(
        <div className=" relative flex flex-col items-center justify-center">
            <Button text="export"  className="w-[100px] h-[40px] rounded-lg " onClick={()=>setIsOpen(!isOpen)}><Icons.Export/></Button>
             <div
                className={`
                absolute top-full right-0  w-[203px] 
                transition-all duration-300 ease-in-out
                ${isOpen ? "opacity-100  pointer-events-auto" : "opacity-0  pointer-events-none"}
                `}
            >
                {fileType.map((type, index) => (
                <ListItem  key={index} className="h-[32px] w-[203px]  " textPxGap="pl-[16px]" item={type} onClick={()=>handleSelected(type)} selected={selectedType===type}/>
                ))}
            </div>
        </div>
    );
}