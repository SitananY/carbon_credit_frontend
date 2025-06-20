import InputField from "@/components/InputField";
import { useState } from "react";

type ViewDetailDataItemProps ={
    text:string,
    defaultValue?:string,
    textClass?:string,
    boxClass?:string
}

export default function ViewDetailDataItem({
    text,
    defaultValue,
    textClass="w-[45%] ",
    boxClass="w-[55%]"

}:ViewDetailDataItemProps){
     const [someValue, setSomeValue] = useState(defaultValue);
    return(
        <div className="w-[100%]    h-[32px] flex flex-row  items-center font-prompt text-base ">
            <div className={` ${textClass} h-[32px] items-center  flex`}>{text}</div>
            <div className={` ${boxClass} h-[32px] items-center justify-center flex`}>
            <InputField className="w-full h-full   " 
            value={someValue}
            inputClassName="rounded-lg  pl-[10px] "
            onChange={(e) => setSomeValue(e.target.value)}
             />

            </div>

        </div>
    );

}