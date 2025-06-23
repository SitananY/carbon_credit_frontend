
import ListItem from "@/components/ListItem";
import { DataGroup } from "../../../../types";
import Icons from "@/components/svgs/SvgExports";

type ProcessDataCardProps ={
    
}


export default function ProcessDataCard(
    {   }:ProcessDataCardProps
){

    return(
        <div className="w-full h-[600px] bg-[#7C7C77] flex flex-col rounded-2xl font-propmt">
                <div className="w-full h-[40px]  flex flex-row justify-between items-center text-base font-prompt px-[16px]">
                    <div className="w-[50%]">ชื่อข้อมูล</div>
                    <div className="w-[50%] ">
                        การกักเก็บคาร์บอน   
                    </div>

                </div>
            
               <div className="w-full h-[520px] bg-[#DDDDDC] flex flex-row">
                   <div className="w-[50%] h-full flex flex-col ">
                        {Array.from({ length: 15 }).map((_, index) => (
                                <ListItem key={index} item="item"  className="w-full h-[37px]" textPxGap="pl-[16px]"/>
                    ))}
                   </div>
                  
                     <div className="w-[50%] h-full flex flex-col ">
                        {Array.from({ length: 15 }).map((_, index) => (
                                <ListItem key={index} item="item"  className="w-full h-[37px]" textPxGap="pl-[16px]"/>
                    ))}
                   </div>

               </div>
    
              

                <div className="w-full h-[40px] flex flex-row  justify-between items-center text-sm font-prompt px-[20px]  whitespace-nowrap">
                    <div className="max-md:hidden">แสดงรายการที่ 1 ถึง 38 จากทั้งหมด 127 รายการ</div>
                    <div className="flex flex-row justify-between items-center gap-8 max-md:gap-5 ">
                        <Icons.Double_arrow_left/>
                        <Icons.Backward/>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <Icons.Forward/>
                        <Icons.Double_arrow_right/>


                        
                    </div>
                </div>


        </div>
    );
}