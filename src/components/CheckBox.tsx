import Icons from "@/components/svgs/SvgExports"
type CheckBoxProps={
    disabled?:boolean,
    isChecked?:boolean,
    onClick?: ()=>void
}

export default function CheckBox({
    isChecked = false ,
    disabled = true ,
    onClick
}:CheckBoxProps){
    return(
        <div className={`w-[20px] h-[20px] border-[1px]  rounded-md  flex items-center justify-center
                ${isChecked ? 
                    "bg-secondary-500 border-secondary-500 text-neutral-300 cursor-pointer"
                : disabled ? 
                    "bg-cancel-300 border-neutral-700  "
                : "bg-neutral-300  border-neutral-700 hover:border-secondary-300 cursor-pointer"
                }
             `} onClick={onClick}>
             {isChecked && <Icons.Check/>}
            <div></div>
        </div>
    );
}