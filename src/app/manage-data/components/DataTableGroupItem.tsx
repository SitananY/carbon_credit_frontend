'use client'
import DeleteButton from "@/components/DeleteButton";
import EditButton from "@/components/EditButton";
import ListItem from "@/components/ListItem";
import ViewButton from "@/components/ViewButton";
import Link from "next/link";
import Icons from "@/components/svgs/SvgExports";
import { DataGroup } from "../../../../types";
import { useRouter } from "next/navigation";


type DataTableGroupItemProps ={
    group_data:DataGroup,
}

export default function DataTableGroupItem({group_data }:DataTableGroupItemProps){
    const router = useRouter();
    let isClick = false;
    const handleClick = () => {
        const path = `/manage-data/${group_data.forestData ? "forest":"land"}`;
        router.push(path);
        isClick = true;
    }
    return(
        <>
        
                <ListItem onClick={handleClick} selected={isClick} key={group_data.id} className="w-full h-[56px] " textClassName="text-base" item={group_data.name} childGap="gap-10">
                
                    <Link href={`/manage-data/${group_data.forestData ? "forest":"land"}/${group_data.id}/view`} >
                            <Icons.Detail className={`h-[18px] w-[18px]  `} />
                    </Link>

                    <Link href={`/manage-data/${group_data.forestData ? "forest":"land"}/${group_data.id}/edit`} >
                            <Icons.Edit className={`h-[18px] w-[18px]  `} />
                    </Link> 
                    
                    <Icons.Delete className={`h-[18px] w-[18px]  `} />
                
                </ListItem>

           
        </>      
    );
}