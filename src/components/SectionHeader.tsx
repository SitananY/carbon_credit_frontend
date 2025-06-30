'use client'
import Link from "next/link";
import Icons from "@/components/svgs/SvgExports";
import { useRouter } from "next/navigation";


type SectionHeaderProps = {
  title: string;
  backHref?: boolean; 
};

export default function SectionHeader  ({ title, backHref }: SectionHeaderProps){
    
    const rounter = useRouter();

    const backHrefHandle = ()=>{
        if(window.history.length > 1){
            rounter.back()
        }else{
            rounter.push("/")
        }
    };
    
    return(
        <div className="w-full h-[40px] flex flex-row justify-between items-center">
            {backHref && (
            
                <Icons.Backward className="w-[40px] h-[40px] cursor-pointer" onClick={backHrefHandle} />
          
            )}
            <div className="w-full  h-[40px] font-prompt text-text-800 text-xl md:text-2xl font-medium flex justify-end whitespace-nowrap items-center justify-center">
            {title}
            </div>
        </div>
        );

}
