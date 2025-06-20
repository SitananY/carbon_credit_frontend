'use client'
import Button from "@/components/Button";
import Icons from "@/components/svgs/SvgExports";
import { mockDataGroups } from "../../.././components/mockDataGroups";
import Link from "next/link";
import ViewDataCard from "../../../components/ViewDataCard";
import { useParams, useRouter } from "next/navigation";
import { ForestData, LandData } from "../../../../../../types";
import SectionHeader from "@/app/manage-data/components/SectionHeader";
import SectionBelowHeader from "@/app/manage-data/components/SectionBelowHeader";
import { useState } from "react";
import Popup from "@/app/manage-data/components/Popup";



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
        
        <SectionHeader title="จัดการข้อมูลพรรณไม้" backHref="/manage-data/forest" />
        <SectionBelowHeader view data={matchedItem} handleClick={handleClick} handleDeleteButton={()=>setIsShow(!isShow)}/>
        <ViewDataCard data={matchedItem}/>

    </div>
        <Popup isShow={isShow} onCancle={()=>setIsShow(!isShow)} remove onConfirm={()=>setIsShow(!isShow)}/>
    
    </div>
    
  
  
  );
}
