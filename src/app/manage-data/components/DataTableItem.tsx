'use client'
import ListItem from "@/components/ListItem";
import Link from "next/link";
import Icons from "@/components/svgs/SvgExports";
import { ForestData } from "@/types/types";
import { LandData } from "@/types/types";
import { useRouter } from "next/navigation";

type DataTableItemProps ={
    forest_data?:ForestData[],
    land_data?:LandData[],
    handleDeleteButton?:()=>void
}

export default function DataTableItem({forest_data,land_data,handleDeleteButton}:DataTableItemProps){
    const dataToUse = forest_data?.length ? forest_data : land_data;
    const type = forest_data?.length ? "forest" : "land";
    return(
        <>
        {dataToUse?.map((item) =>{
            const router = useRouter();
            const handleClick = () => {
            const path = `/manage-data/${type}/${item.id}/view`;
            router.push(path);
        
    }
            
            return(
                <ListItem onClick={handleClick} key={item.id} className="w-full h-[56px] " textClassName="text-base" item={forest_data ? `พรรณไม้ ${item.number}` : `แปลงที่ ${item.number}`} childGap="gap-10">
                
                    <div onClick={(e) => e.stopPropagation()}>
                        <Link href={`/manage-data/${forest_data ? "forest":"land"}/${item.id}/view`} >
                                <Icons.Detail className={`h-[18px] w-[18px]  `} />
                        </Link>
                    </div>
                    <div onClick={(e) => e.stopPropagation()}>
                    <Link href={`/manage-data/${forest_data ? "forest":"land"}/${item.id}/edit`} >
                            <Icons.Edit className={`h-[18px] w-[18px]  `} />
                    </Link> 
                    </div>
                    <div onClick={(e) => e.stopPropagation()}>
                    <Icons.Delete className={`h-[18px] w-[18px]  `} onClick={handleDeleteButton}  />
                    </div>       
                
                </ListItem>
            );
                

            })
             
         }
        </>      
    );
}