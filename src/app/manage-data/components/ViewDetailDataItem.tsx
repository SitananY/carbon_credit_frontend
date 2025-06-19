import InputField from "@/components/InputField";

type ViewDetailDataItemProps ={
    text:string,
}

export default function ViewDetailDataItem({text}:ViewDetailDataItemProps){
    return(
        <div className=" w-[434px] h-[32px] flex flex-row justify-between items-center font-prompt text-base ">
            <div className="w-[auto] h-[32px] items-center flex ">{text}</div>
            <InputField className=" w-full h-[34px] rounded-lg "/>
        </div> 
    );

}