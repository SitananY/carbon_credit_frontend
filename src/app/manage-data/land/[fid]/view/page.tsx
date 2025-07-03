'use client'
import { mockDataGroups } from "@/mockDataGroups";
import ViewDataCard from "@/app/manage-data/components/ViewDataCard";
import { useParams, useRouter } from "next/navigation";
import { ForestData, LandData } from "@/types/types";
import SectionBelowHeader from "@/components/SectionBelowHeader";
import SectionHeader from "@/components/SectionHeader";
import { useState } from "react";
import Popup from "@/components/Popup";



export default function View() {
  const { fid } = useParams();
  const idFromParam = Number(fid);; // สมมุติได้มาจาก router.query หรือ useParams()
  const [isShow,setIsShow] = useState(false); 

  let matchedItem: ForestData | LandData | null = null;

  for (const group of mockDataGroups) {
    if (group.forestData) {
      matchedItem = group.forestData.find(item => item.id === idFromParam)??null;
      if (matchedItem) break;
    }
    if (group.LandData) {
      matchedItem = group.LandData.find(item => item.id === idFromParam)??null;
      if (matchedItem) break;
    }
  }
  if(!matchedItem) return null;
    const isForest = "tree_type" in matchedItem;
    const router = useRouter();
        
    const handleClick = () => {
        const path = `/manage-data/${isForest ? "forest":"land"}/${matchedItem.id}/edit`;
        router.push(path);
        
    }
  return (
    <div className=" flex flex-col  justify-center">
    <div className="w-full  flex flex-col  py-[32px] xl:px-[148px] px-[32px]">
        <SectionHeader title="จัดการข้อมูลแปลงที่ดิน" backHref/>
        <SectionBelowHeader  view land handleClick={handleClick} data={matchedItem} handleDeleteButton={()=>setIsShow(!isShow)}/>
        <ViewDataCard data={matchedItem}/>

    </div>
        <Popup isShow={isShow} onCancle={()=>setIsShow(!isShow)} remove onConfirm={()=>setIsShow(!isShow)}/>
    </div>
    
  
  
  );
}
