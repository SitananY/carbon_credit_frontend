type SwitchProps={
    isOpen:boolean ,
    disabled?:boolean,
    onClick:()=>void
}


export default function Switch({isOpen,disabled=false,onClick}:SwitchProps){
    return(
        <div onClick={onClick} className="relative cursor-pointer scale-100">
            <div className={` w-[58px] h-[30px] rounded-full 
                ${disabled ? "bg-[#DDDDDC]" : isOpen ? "bg-[#F6E96B]" : "bg-[#7C7C77]" }
                `} ></div>
            <div className={` w-[24px] h-[24px] rounded-full absolute top-[3px] left-[3px]
                 transition-all duration-300 ease-in-out
                ${disabled ? "bg-[#B6B6A8]" : isOpen ? "bg-[#FAFCFE] translate-x-[28px]" : " bg-[#FAFCFE] translate-x-0" }
                  `}></div>

        </div>
    );
}