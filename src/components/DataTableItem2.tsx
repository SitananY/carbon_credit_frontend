import CheckBox from "@/components/CheckBox";
import Icons from "@/components/svgs/SvgExports"
type DataTableItem2={
    isText?:boolean,
    isCheckbox?:boolean,
    isAction?:boolean,
    action?: React.ReactNode ,
    text?:string,
    parentClassName?:string,
    childClassName?:string,
    selected?:boolean,
    disabled?:boolean,
    header?:boolean,
    onClick?:()=> void,
    onHeaderClick?: ()=>void,
}

export default function DataTableItem2 ({
    isText,
    isCheckbox,
    isAction,
    action,
    text,
    parentClassName="flex flex-row items-center px-[16px] py-[10px] h-full w-full",
    childClassName="",
    selected,
    disabled,
    header,
    onClick,
    onHeaderClick,

}:DataTableItem2){
    const style = 
    selected
    ? "font-prompt text-base text-cancel-700 bg-nuetral-500 border-neutral-700  "
    :disabled 
    ? "font-prompt text-base text-cancel-700  bg-cancel-300 border-cancel-300  " 
    :header 
    ? "font-prompt font-medium text-base text-text-800 bg-gray-v1 border-cancel-700" 
    : "font-prompt text-base text-text-800 bg-neutral-300 border-neutral-700 hover:bg-gray-v1 " ;

    
    return(
        <div onClick={onClick} className={`  border-b-1 ${parentClassName} ${style}`}>
            <>
                {isText && text}
                {isCheckbox && <CheckBox isChecked={selected} disabled={disabled} onClick={onClick}/>}
                {isAction && action}
                {isCheckbox ?undefined : header ? <Icons.Down className="w-[18px] h-[18px]"  onClick={onHeaderClick}/> :undefined }
                
            </>        
        </div>
        
        
    );
}