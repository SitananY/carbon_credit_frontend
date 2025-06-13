import Icons from "./svgs/SvgExports";

type DeleteButtonProps = {
  className?: string;
  
};

export default function DeleteButton({ className = "", }: DeleteButtonProps){
    return(
        
        <Icons.Delete className={`h-[18px] w-[18px]  ${className}`} />
       
        
    );
}