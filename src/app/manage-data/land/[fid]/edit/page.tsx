'use client'
import { mockDataGroups } from "../../.././components/mockDataGroups";
import { useParams, useRouter } from "next/navigation";
import { ForestData, LandData } from "../../../../../../types";
import SectionBelowHeader from "@/app/manage-data/components/SectionBelowHeader";
import SectionHeader from "@/app/manage-data/components/SectionHeader";
import ViewDetailDataCard from "@/app/manage-data/components/ViewDetailDataCard";



export default function Edit() {
  const { fid } = useParams();
  const idFromParam = Number(fid);

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

  return (
    <div className=" flex flex-col  justify-center">
    <div className="w-full  flex flex-col  p-[32px]  ">
        
    <div className="mb-[24px] ">
        <SectionHeader title="จัดการข้อมูลแปลงที่ดิน" backHref="/manage-data/land"/> 
    </div>
    <div className="mb-[24px] ">
        <SectionBelowHeader edit land data={matchedItem} />
    </div>

    <ViewDetailDataCard data={matchedItem} isForest={isForest}/>
        

    </div>
    </div>
    
  
  
  );
}
