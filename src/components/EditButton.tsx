import Link from "next/link";
import Icons from "./svgs/SvgExports";

type EditButtonProps = {
  className?: string;
  
};

export default function EditButton({ className = "", }: EditButtonProps){
    return(
        <Link href={"/manage-data/forest/id/edit"} >
        <Icons.Edit className={`h-[18px] w-[18px]  ${className}`} />
        </Link>
    );
}