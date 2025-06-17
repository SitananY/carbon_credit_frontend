'use client'
import { useState } from "react";
import IconButton from "./IconButton";
import Icons from "./svgs/SvgExports";
import Link from "next/link";
import ListItem from "./ListItem";
import SideBarItem from "./SideBarItem";
import Button from "./Button";

type SideBarCardProps ={
    children?:React.ReactNode
    
    
}


export default function SideBarCard({children}:SideBarCardProps){
    
    const [isCollapsed,setIsCollapsed] = useState(false);
   

    return(
        <div className={` h-full bg-[#B6B6A8] transition-all duration-150 ease-in-out   ${
                        isCollapsed ? 'w-[117px]' : 'w-[352px]'
                        }`}>
            {isCollapsed ?
                <div className=" h-full flex flex-col justify-between  items-center p-5  ">
                        <div className="w-[36px] h-[308px] flex flex-col justify-between ">
                            <div className="w-[36px] h-[36px] flex  justify-center items-center cursor-pointer hover:scale-110"  onClick={()=>{setIsCollapsed(!isCollapsed)}}>
                                <Icons.Dehaze className="w-[36px] h-[36px] text-[#1C1B1F]"/>
                            </div>
                            <Link href={"/manage-data"} className="w-[36px] h-[36px] flex  justify-center items-center cursor-pointer hover:scale-110">
                                <Icons.Data_table className="w-[36px] h-[36px] text-[#1C1B1F]"/>
                            </Link>
                            <Link href={"/process-data"} className="w-[36px] h-[36px] flex  justify-center items-center cursor-pointer hover:scale-110">
                                <Icons.Process className="w-[36px] h-[36px] text-[#1C1B1F]"/>
                            </Link>
                            <Link href={"/map"} className="w-[36px] h-[36px] flex  justify-center items-center cursor-pointer hover:scale-110">
                                <Icons.Map className="w-[36px] h-[36px] text-[#1C1B1F]"/>
                            </Link>
                            <Link href={"/dashboard"} className="w-[36px] h-[36px] flex  justify-center items-center cursor-pointer hover:scale-110">
                                <Icons.Chart className="w-[36px] h-[36px] text-[#1C1B1F]"/>
                            </Link>
                        </div>

                        <div>
                            <Link href={"/dashboard"} className="w-[36px] h-[36px] flex  justify-center items-center cursor-pointer hover:scale-110">
                                <Icons.Logout className="w-[36px] h-[36px] text-[#1C1B1F]"/>
                            </Link>
                        </div>

                        
                </div>
            
            :
                <div className=" flex flex-col  h-full  ">
                        <div className="w-full h-[96px] bg-[#7C7C77] flex items-center justify-between p-[24px]">
                                <div className="w-[48px] h-[48px]"> 
                                    <Icons.Color_png1 className="w-[48px] h-[48px]"/>
                                </div>
                                
                                <div className="w-[32px] h-[32px] flex flex-row items-center cursor-pointer"  onClick={()=>{setIsCollapsed(!isCollapsed)}}>
                                    <Icons.Left_panel_close className="w-[32px] h-[32px] text-[#FAFCFE]"/>
                                </div>
                                
                        </div>
                        <div className="w-full h-[928px] flex flex-col justify-between">
                                <div className=" w-full h-[224px] ">
                                <SideBarItem pageRef="/manage-data" className="w-full h-[56px]">
                                    <div className="flex flex-row items-center"> 
                                        <div className="h-[30px] flex flx-col items-center justify-center">
                                            <Icons.Data_table className="w-[18px] h-[18px] items-center "/>
                                        </div>
                                        <div className={`text-container transition-all duration-300 ease-in-out
                                                            overflow-hidden whitespace-nowrap
                                                            ${isCollapsed ? 'w-0 opacity-0' : 'w-auto opacity-100'} 
                                                        `} >
                                            <span className="pl-[10px] font-prompt font-medium text-xl">
                                                    จัดการข้อมูล
                                            </span>
                                        </div>
                                    </div>
                                </SideBarItem>
                                <SideBarItem pageRef="/process-data" className="w-full h-[56px]">
                                    <div className="flex flex-row items-center"> 
                                        <div className="h-[30px] flex flx-col items-center justify-center">
                                            <Icons.Process className="w-[18px] h-[18px] items-center "/>
                                        </div>
                                        <div className={`text-container transition-all duration-300 ease-in-out
                                                            overflow-hidden whitespace-nowrap
                                                            ${isCollapsed ? 'w-0 opacity-0' : 'w-auto opacity-100'} 
                                                        `} >
                                            <span className="pl-[10px] font-prompt font-medium text-xl">
                                                    ประมวลผลข้อมูล
                                            </span>                    
                                        
                                        </div>
                                    </div>
                                </SideBarItem>
                                <SideBarItem pageRef="/map" className="w-full h-[56px]">
                                    <div className="flex flex-row items-center"> 
                                        <div className="h-[30px] flex flx-col items-center justify-center">
                                            <Icons.Map className="w-[18px] h-[18px] items-center "/>
                                        </div>
                                        <div className={`text-container transition-all duration-300 ease-in-out
                                                            overflow-hidden whitespace-nowrap
                                                            ${isCollapsed ? 'w-0 opacity-0' : 'w-auto opacity-100'} 
                                                        `} >
                                            <span className="pl-[10px] font-prompt font-medium text-xl">
                                                    แสดงผลบนแผนที่
                                            </span>
                                        </div>
                                    </div>
                                </SideBarItem>
                                <SideBarItem pageRef="/dashboard" className="w-full h-[56px]">
                                    <div className="flex flex-row items-center"> 
                                        <div className="h-[30px] flex flx-col items-center justify-center">
                                            <Icons.Chart className="w-[18px] h-[18px] items-center "/>
                                        </div>
                                        <div className={`text-container transition-all duration-300 ease-in-out
                                                            overflow-hidden whitespace-nowrap
                                                            ${isCollapsed ? 'w-0 opacity-0' : 'w-auto opacity-100'} 
                                                        `} >
                                            <span className="pl-[10px] font-prompt font-medium text-xl">
                                                    แสดงผล Dashboard
                                            </span>
                                        </div>
                                    </div>
                                </SideBarItem>
                        
                                </div>
                                <div className="w-full h-[130px] flex flex-col justify-center items-center">
                                     <div className="w-[286px] h-[32px] text-xl font-prompt   pl-[10px] font-medium">ชื่อผู้ใช้</div> 
                                     <Button variant="primary" text="ออกจากระบบ" type="button" className="w-[286px] h-[40px] rounded-2xl" textClassName="text-xl font-medium"> <Icons.Logout> </Icons.Logout></Button>  
                                </div>
                        </div>
                        
                        
                </div>
            
            }
            
        </div>
      
    );
}