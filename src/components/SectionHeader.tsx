'use client'
import Link from "next/link";
import Icons from "@/components/svgs/SvgExports";
import { useRouter } from "next/navigation";
import Dashboard from "@/app/dashboard/page";
import ExportDropDown from "@/app/dashboard/components/ExportDropDown";


type SectionHeaderProps = {
  title: string;
  backHref?: boolean; 
  dashBoard?: boolean;
};

export default function SectionHeader  ({ title, backHref,dashBoard }: SectionHeaderProps){
    
    const rounter = useRouter();

    const backHrefHandle = ()=>{
        if(window.history.length > 1){
            rounter.back()
        }else{
            rounter.push("/")
        }
    };
    
    return(
        <div className=" w-full h-[40px] flex flex-row justify-between  items-center">
           
            <div className="w-full  h-[40px] font-prompt text-text-800 text-xl gap-[15px] md:text-2xl font-medium flex justify-start  items-center justify-center">
             {backHref && (
            
                <Icons.Backward className="w-[40px] h-[40px] cursor-pointer" onClick={backHrefHandle} />
          
            )}
            {title}
            </div>
            <div>
                {dashBoard && ( 
                 <ExportDropDown/>

            )}
            </div>
            
        </div>
        );

}
