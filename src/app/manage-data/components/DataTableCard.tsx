import DeleteButton from "@/components/DeleteButton";
import EditButton from "@/components/EditButton";
import ListItem from "@/components/ListItem";
import ViewButton from "@/components/ViewButton";
import DataTableItem from "./DataTableItem";
import { DataGroup } from "../../../../types";
import DataTableGroupItem from "./DataTableGroupItem";

type DataTableCardProps ={
    data:DataGroup[],
    group?:boolean,
}


export default function DataTableCard({data,group=false}:DataTableCardProps){

    return(
        <div className="w-full h-[600px] bg-[#7C7C77] flex flex-col rounded-3xl font-propmt">
                <div className="w-full h-[40px] flex flex-row justify-between items-center text-base font-prompt px-[20px]">
                    <div className="">ชื่อข้อมูล</div>
                    <div className="flex flex-row justify-between items-center gap-8 ">
                        <div>ดู</div>
                        <div>แก้ไข</div>
                        <div>ลบ</div>
                    </div>
                </div>
            
               
              {data?.map((dataGroupItem) => {
                return group ? (
                    <DataTableGroupItem
                    key={dataGroupItem.id}
                    group_data={dataGroupItem}
                    
                    />
                ) : (
                    <DataTableItem
                    key={dataGroupItem.id}
                    land_data={dataGroupItem.LandData?.length ? dataGroupItem.LandData : undefined}
                    forest_data={
                        !dataGroupItem.LandData?.length && dataGroupItem.forestData?.length
                        ? dataGroupItem.forestData
                        : undefined
                    }
                    />
                );
                })}


        </div>
    );
}