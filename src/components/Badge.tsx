import Icons from "@/components/svgs/SvgExports"


type Badgeprops = {
    text?:string
}
export default function Badge({text}:Badgeprops){
    return(
        <div className="h-[29px] w-[auto] p-[4px] bg-neutral-500 text-neutral-700  font-prompt text-sm rounded-lg flex items-center justify-center">
            <div className="flex flex-row gap-[8px]  items-center justify-center ">
                <Icons.Backward className="w-[18px] h-[18px] "/>
                <div>{text}</div>
                <div></div>
                <Icons.Remove className="w-[18px] h-[18px] hover:bg-neutral-700 hover:text-neutral-500 rounded-sm"/>
                
            </div>

        </div>
    );
}