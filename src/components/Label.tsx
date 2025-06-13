type LabelProps ={
    label : string;
    required? : boolean;
    optional? : boolean;
    size?:string;
};


export default function Label({label,required,optional,size="base"}:LabelProps){
    return(
        <label className={` text-${size} font-prompt text-[#27272A] flex flex-row `}>
            {required && <div className="text-xl font-prompt text-[#E64341] pr-2">*</div>}
            {label}
            {optional && <div className="text-base font-prompt text-[#B6B6A8] pl-2">(optional)</div>}
            
        </label>
    );
}