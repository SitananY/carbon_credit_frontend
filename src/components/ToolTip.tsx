
type ToolTipProps={
    className? : string,
    down? : boolean,
    up?:boolean,
    left?:boolean,
    right?:boolean,
    text?:string
}



export default function ToolTip(
    {   className,
        down ,
        up  ,
        left ,
        right ,
        text

    } 
    
:ToolTipProps){
    return(
        <div className=" relative inline-block ">
            <div className=" w-[60px] h-[33px] bg-secondary-500 rounded-xl font-medium text-text-800  text-sm items-center flex justify-center">
                {text}
            </div>
            {up && (
                <div className="
                absolute left-1/2 -translate-x-1/2 -top-[7px]
                w-0 h-0
                border-l-[6px] border-l-transparent
                border-r-[6px] border-r-transparent
                border-b-[8px] border-b-secondary-500
                "></div>
            )}

            {down && (
                <div className="
                absolute left-1/2 -translate-x-1/2 top-full
                w-0 h-0
                border-l-[6px] border-l-transparent
                border-r-[6px] border-r-transparent
                border-t-[8px] border-t-secondary-500
                "></div>
            )}

            {left && (
                <div className="
                absolute top-1/2 -translate-y-1/2 -left-[7px]
                w-0 h-0
                border-t-[6px] border-t-transparent
                border-b-[6px] border-b-transparent
                border-r-[8px] border-r-secondary-500
                "></div>
            )}

            {right && (
                <div className="
                absolute top-1/2 -translate-y-1/2 left-full
                w-0 h-0
                border-t-[6px] border-t-transparent
                border-b-[6px] border-b-transparent
                border-l-[8px] border-l-secondary-500
                "></div>
            )}  
        </div>
    );
}