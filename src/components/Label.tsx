type LabelProps ={
    label : string;
    required? : boolean;
    optional? : boolean;
    size?:string;
    className?:string;
    children?:React.ReactNode;
};


export default function Label({label,required,optional,size="text-base",className,children}:LabelProps){
    return(
        <label className={` ${size} font-prompt text-text-800 flex flex-row py-[12px] `}>
            {required && <div className="text-xl font-prompt text-[#E64341] pr-2">*</div>}
            {label}
            {optional && <div className="text-base font-prompt text-[#B6B6A8] pl-2">(optional)</div>}
            {children}
        </label>
    );
}