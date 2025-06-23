import Link from "next/link";
import Icons from "@/components/svgs/SvgExports";


type SectionHeaderProps = {
  title: string;
  backHref?: string; 
};

export default function SectionHeader  ({ title, backHref }: SectionHeaderProps){
    
    
    return(
        <div className="w-full h-[40px] flex flex-row justify-between items-center">
            {backHref && (
            <Link href={backHref} className="w-[40px] h-[40px]">
                <Icons.Backward className="w-[40px] h-[40px]" />
            </Link>
            )}
            <div className="w-full  h-[40px] font-prompt text-[#27272A] text-xl md:text-2xl font-medium flex justify-end whitespace-nowrap items-center justify-center">
            {title}
            </div>
        </div>
        );

}
