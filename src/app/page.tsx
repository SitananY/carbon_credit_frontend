"use client";
import Badge from "@/components/Badge";
import CheckBox from "@/components/CheckBox";
import DataTableGeneral from "@/components/DataTableGeneral";
import SortFilterDropdown from "@/components/SortFilterDropdown";
import TestCard from "@/components/Testcard";
import ToolTip from "@/components/ToolTip";
import { useEffect, useState } from "react";
import { GeoJSONData, GeoJSONFeature, GroupedLand } from "@/types/types";

export default function Home() {
  
  return (
    <main className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 gap-5 ">

      

      <CheckBox />
      <Badge text="Badge" />
      <ToolTip down text="Hello everyone" />
      <TestCard link="/api/auth/signin" text="Signin" />
      <TestCard link="/dashboard" text="Dashboard" />
      <TestCard link="/map" text="Map" />
      <TestCard link="/manage-data" text="Manage Data" />
      <TestCard link="/process-data" text="Process Data" />
    </main>
  );
}
