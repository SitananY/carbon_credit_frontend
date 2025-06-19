
import DataTableCard from "./components/DataTableCard";
import { mockDataGroups } from "./components/mockDataGroups";
import SectionBelowHeader from "./components/SectionBelowHeader";
import SectionHeader from "./components/SectionHeader";



export default function ManageData() {

  return (
    <div className=" flex flex-col  justify-center">
    <div className="w-full  flex flex-col  py-[32px] xl:px-[148px] px-[32px]">
        
        <SectionHeader title="ระบบฐานข้อมูลการสำรวจศักยภาพการกักเก็บคาร์บอนในพื้นที่ป่าไม้"/>
        <SectionBelowHeader manageData/>
        <DataTableCard data={mockDataGroups} group/>
    </div>
    </div>
    
  
  
  );
}
