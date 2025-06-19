'use client'
import Button from "@/components/Button";
import Icons from "@/components/svgs/SvgExports";
import { mockDataGroups } from "../../.././components/mockDataGroups";
import Link from "next/link";
import ViewDataCard from "../../../components/ViewDataCard";
import { useParams } from "next/navigation";
import { ForestData, LandData } from "../../../../../../types";



export default function View() {
  const { fid } = useParams();
  const idFromParam = Number(fid);; // สมมุติได้มาจาก router.query หรือ useParams()

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

  return (
    <div className=" flex flex-col  justify-center">
    <div className="w-full  flex flex-col  py-[32px] xl:px-[148px] px-[32px]">
        <div className="w-full h-[40px] flex flex-row justify-between">
            <Link href={"/manage-data/land"} className=" w-[40px] h-[40px] ">
              <Icons.Backward className="w-[40px] h-[40px]"/>
            </Link>

            <div className=" w-full h-[40px]  font-prompt text-[#27272A] text-xl md:text-2xl font-medium flex  justify-end  whitespace-nowrap ">
                  จัดการข้อมูลแปลงที่ดิน
            </div>
        </div>
        
       <div className="w-full my-[24px] flex flex-col md:flex-row md:justify-between md:items-center gap-4">
  
            <div className="text-base md:text-xl font-prompt font-medium text-[#27272A]">
              แปลงที่ {matchedItem?.number}
            </div>

            
            <div className="flex gap-7 ">
              <Button text="แก้ไข" className="w-[86px] h-[40px] rounded-lg">
                <Icons.Edit />
              </Button>
              <Button text="ลบ" className="w-[86px] h-[40px] rounded-lg" variant="delete">
                <Icons.Delete />
              </Button>
            </div>
        </div>

        
        <ViewDataCard data={matchedItem}/>

    </div>
    </div>
    
  
  
  );
}
