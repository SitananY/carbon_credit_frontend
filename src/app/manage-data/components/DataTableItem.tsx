import DeleteButton from "@/components/DeleteButton";
import EditButton from "@/components/EditButton";
import ListItem from "@/components/ListItem";
import ViewButton from "@/components/ViewButton";
import Link from "next/link";
import Icons from "@/components/svgs/SvgExports";
import { ForestData } from "../../../../types";
import { LandData } from "../../../../types";

type DataTableItemProps ={
    forest_data?:ForestData[],
    land_data?:LandData[],
}

export default function DataTableItem({forest_data,land_data}:DataTableItemProps){
    const dataToUse = forest_data?.length ? forest_data : land_data;
    return(
        <>
        {dataToUse?.map((item) =>(
                <ListItem  key={item.id} className="w-full h-[56px] " textClassName="text-base" item={forest_data ? `พรรณไม้ ${item.number}` : `แปลงที่ดิน ${item.number}`} childGap="gap-10">
                
                    <Link href={`/manage-data/${forest_data ? "forest":"land"}/${item.id}/view`} >
                            <Icons.Detail className={`h-[18px] w-[18px]  `} />
                    </Link>

                    <Link href={`/manage-data/${forest_data ? "forest":"land"}/${item.id}/edit`} >
                            <Icons.Edit className={`h-[18px] w-[18px]  `} />
                    </Link> 
                    
                    <Icons.Delete className={`h-[18px] w-[18px]  `} />
                
                </ListItem>

            ))
             
         }
        </>      
    );
}