"use client"
import Badge from "@/components/Badge";
import CheckBox from "@/components/CheckBox";
import DataTableGeneral from "@/components/DataTableGeneral";
import DataTableItem2 from "@/components/DataTableItem2";
import TestCard from "@/components/Testcard";
import ToolTip from "@/components/ToolTip";
import { mockLandPlotGroups } from "@/mockDataGroups";
import { useState } from "react";



export default function Home() {
  const [isClick,setIsClick] = useState(false);
  const [data,setData]= useState(mockLandPlotGroups);
  return (
    <main className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 gap-5 ">
          
      <div className="mb-[50px]">
      <DataTableGeneral data={data} group />
      </div>
      
      
      <CheckBox/>
      <Badge text="Badge" />
      <ToolTip down text="Hello everyone"/>
      <TestCard link="/api/auth/signin" text="Signin"></TestCard>
      <TestCard link="/dashboard" text="Dashboard"/>
      <TestCard link="/map" text="Map"/>
      <TestCard link="/manage-data" text="Manage Data"/>
      <TestCard link="/process-data" text="Process Data"/>
    </main>
  );
}
