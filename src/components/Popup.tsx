import Button from "@/components/Button";
import { Children } from "react";

type PopupProps={
    children?:React.ReactNode,
    isShow:boolean
    onCancle?:()=>void
    onConfirm?:()=>void
    add?:boolean,
    remove?:boolean,
    edit?:boolean,
    warning?:boolean
}



export default function Popup({isShow,children,onCancle,onConfirm,add,remove,edit,warning}:PopupProps){

    return(
        <div className={` absolute inset-0 flex items-center justify-center transition-all duration-150 ease-in-out
                ${isShow ? "visible bg-black/20" : "invisible"}
        `}>
            <div className="w-[350px] h-[200px]  rounded-[40px] bg-[#FAFCFE] shadow-xl px-[40px] items-center justify-center flex ">
                    <div className="w-[246px] h-[118px]  flex flex-col gap-[16px] items-center justify-center">
                        <div className="w-full h-[54px]   font-medium font-prompt text-xl flex flex-col items-center justify-center  " >
                               <span className="whitespace-nowrap w-auto">
                                    {add && "คุณต้องการเพิ่มข้อมูลนี้หรือไม่"}
                                    {remove && "คุณต้องการลบข้อมูลนี้หรือไม่"}
                                    {edit && "คุณต้องการแก้ไขข้อมูลนี้หรือไม่"}
                                    {warning && "ข้อมูลไม่ถูกต้อง โปรดตรวจสอบก่อนทำการยืนยัน"}
                                </span>

                        </div>
                        <div className={`w-[246px] h-[48px]  flex flex-row gap-[30px] px-[32px] items-center justify-center 
                                ${isShow ? "visible " : "invisible"}
                            `} >
                                <Button text="ยืนยัน" className="w-[61px] h-[48px] rounded-2xl" onClick={onConfirm}/>
                                <Button text="ยกเลิก" className="w-[61px] h-[48px] rounded-2xl" variant="cancle" onClick={onCancle}/>

                        </div>
                    </div>
            </div>
            {children}
        </div>
    );
}