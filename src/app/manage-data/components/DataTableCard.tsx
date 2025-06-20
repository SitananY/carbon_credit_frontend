
import DataTableItem from "./DataTableItem";
import { DataGroup } from "../../../../types";
import DataTableGroupItem from "./DataTableGroupItem";
import Icons from "@/components/svgs/SvgExports";

type DataTableCardProps ={
    data:DataGroup[],
    group?:boolean,
    forest?:boolean,
    handleDeleteButton?:()=>void
}


export default function DataTableCard({data,group=false,forest=false,handleDeleteButton}:DataTableCardProps){

    return(
        <div className="w-full h-[600px] bg-[#7C7C77] flex flex-col rounded-3xl font-propmt">
                <div className="w-full h-[40px]  flex flex-row justify-between items-center text-base font-prompt px-[31px]">
                    <div className="">ชื่อข้อมูล</div>
                    <div className="flex flex-row justify-between items-center gap-8 ">
                        <div>ดู</div>
                        <div>แก้ไข</div>
                        <div>ลบ</div>
                    </div>
                </div>
            
               <div className="w-full h-[520px] bg-[#DDDDDC]">
                    {data?.map((dataGroupItem) => {
                return group ? (
                    <DataTableGroupItem
                    key={dataGroupItem.id}
                    group_data={dataGroupItem}
                    handleDeleteButton={handleDeleteButton}
                    />
                ) : (
                    forest
                    ?
                        dataGroupItem.forestData?.length 
                        ? 
                        <DataTableItem
                            key={dataGroupItem.id}
                            land_data={dataGroupItem.LandData?.length ? dataGroupItem.LandData : undefined}
                            forest_data={
                                !dataGroupItem.LandData?.length && dataGroupItem.forestData?.length
                                ? dataGroupItem.forestData
                                : undefined
                            }
                            handleDeleteButton={handleDeleteButton}
                        /> 
                        : undefined
                        
                    :

                        dataGroupItem.LandData?.length 
                        ? 
                        <DataTableItem
                            key={dataGroupItem.id}
                            land_data={dataGroupItem.LandData?.length ? dataGroupItem.LandData : undefined}
                            forest_data={
                                !dataGroupItem.LandData?.length && dataGroupItem.forestData?.length
                                ? dataGroupItem.forestData
                                : undefined
                            }
                            handleDeleteButton={handleDeleteButton}
                        /> 
                        : undefined
                    
                );
                })}
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