import Link from "next/link";
import Icons from "./svgs/SvgExports";

type ViewButtonProps = {
  className?: string;
  
};

export default function ViewButton({ className = "", }: ViewButtonProps){
    return(
        <Link href={"/manage-data/forest/id/view"} >
        <Icons.Detail className={`h-[18px] w-[18px]  ${className}`} />
        </Link>
        
    );
}