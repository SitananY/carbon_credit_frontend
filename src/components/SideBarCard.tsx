'use client'
import { useEffect, useState } from "react";
import Icons from "./svgs/SvgExports";
import Link from "next/link";
import SideBarItem from "./SideBarItem";
import Button from "./Button";


type SideBarCardProps ={
    children?:React.ReactNode,
    forcedCollapsed?:boolean  ,   
    
}

export default function SideBarCard({ children, forcedCollapsed }: SideBarCardProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (forcedCollapsed) {
      setIsCollapsed(true);
    }
  }, [forcedCollapsed]);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <div
      className={`h-full bg-[#FAFCFE] transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-[96px]" : "w-[352px]"
      }`}
    >
      {/* Header */}
      <div className={`w-full h-[88px] bg-[#10490A] flex items-center justify-between p-[24px] ${isCollapsed ? "justify-center":"justify-between"}`}>
        
        <div className={`w-[48px] h-[48px] ${isCollapsed ? "hidden" : ""}`}>
            <Icons.Color_png1 className="w-full h-full" />
        </div>

       

        <div
          className="w-[32px] h-[32px] flex flex-row items-center cursor-pointer"
          onClick={toggleCollapse}
        >
          {isCollapsed ? (
            <Icons.Dehaze className="w-full h-full text-[#FAFCFE]" />
          ) : (
            <Icons.Left_panel_close className="w-full h-full text-[#FAFCFE]" />
          )}
        </div>
      </div>

      {/* Menu Items */}
      <div className="w-full flex flex-col justify-between items-center pt-[16px] pb-[32px] pl-[6px] h-[calc(100%-88px)]">
        <div className={`${isCollapsed ? "w-[64px]" : "w-[336px]"} transition-all duration-300`}>
          <SideBarItem
            pageRef="/manage-data"
            className="w-full h-[56px]"
            text="จัดการข้อมูล"
            icon={<Icons.Data_table className="w-[32px] h-[32px]" />}
            isCollapsed={isCollapsed}
          />
          <SideBarItem
            pageRef="/process-data"
            className="w-full h-[56px]"
            text="ประมวลผลข้อมูล"
            icon={<Icons.Process className="w-[32px] h-[32px]" />}
            isCollapsed={isCollapsed}
          />
          <SideBarItem
            pageRef="/map"
            className="w-full h-[56px]"
            text="แสดงผลบนแผนที่"
            icon={<Icons.Map className="w-[32px] h-[32px]" />}
            isCollapsed={isCollapsed}
          />
          <SideBarItem
            pageRef="/dashboard"
            className="w-full h-[56px]"
            text="แสดงผล Dashboard"
            icon={<Icons.Chart className="w-[32px] h-[32px]" />}
            isCollapsed={isCollapsed}
          />
        </div>

        {/* User Section */}
        <div className="w-full flex flex-col justify-center items-center">
         
            <div className={`w-[304px] h-[48px] text-xl font-prompt pl-[10px] font-medium transition-all duration-300 ease-in-out ${isCollapsed ? "hidden" : "" } `}>
              ชื่อผู้ใช้
            </div>
          <div className={` h-[48px] border-2 bg-[#FAFCFE] text-[#397832] border-[#397832] hover:bg-[#F8F8EF] rounded-2xl
            flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out
            ${isCollapsed ?"w-[48px]" : "w-[304px]" }`}>
            <Icons.Logout className="w-[32px] h-[32px]"/>
            <div className={`${isCollapsed ? "hidden" : "pl-[10px] font-medium font-prompt text-lg " } overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out`}>ออกจากระบบ</div>
          </div>
         
        </div>
      </div>
    </div>
  );
}
