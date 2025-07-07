import CheckBox from "@/components/CheckBox";
import Icons from "@/components/svgs/SvgExports"
import SortFilterDropdown from "./SortFilterDropdown";
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
    icon?:boolean,
    columnKey?: string, 
    onSortSelected?: (column: string, order: "asc" | "desc") => void,
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
    icon=true,
    columnKey="",
    onSortSelected=()=>{},
    

}:DataTableItem2){
    const style = 
    selected
    ? "font-prompt text-base text-cancel-700 bg-neutral-500 border-neutral-700  "
    :disabled 
    ? "font-prompt text-base text-cancel-700  bg-cancel-300 border-cancel-300  " 
    :header 
    ? "font-prompt font-medium text-base text-text-800 bg-gray-v1 border-cancel-700" 
    : "font-prompt text-base text-text-800 border-neutral-700 " ;

    const isCenter = 
    isCheckbox 
    ? " justify-center      py-[10px]"
    : "justify-between   pl-[16px] pr-[12px] py-[10px]"
    
    return(
        <div  className={`  h-full flex flex-row items-center border-b-1 ${parentClassName} ${style} ${isCenter}`}>
            <>
                {isText && text}
                {isCheckbox && <CheckBox isChecked={selected} disabled={disabled} onClick={onClick}/>}
                {isAction && action}
                {header? icon ? <SortFilterDropdown
                                    type="sort"
                                    options={["เรียงจากน้อยไปมาก", "เรียงจากมากไปน้อย"]}
                                    onSelect={(selected) => {
                                        if (!columnKey) {
                                            console.warn("No columnKey specified for sorting");
                                            return;
                                        }
                                        if (onHeaderClick) onHeaderClick();
                                        const ord: "asc" | "desc" = selected.includes("น้อยไปมาก") ? "asc" : "desc";
                                        console.log("Sort Selected:", columnKey, ord);
                                        onSortSelected(columnKey, ord);
                                        }
                                    
                                }
                                /> 
                :undefined  :undefined }
                
            </>        
        </div>
        
        
    );
}