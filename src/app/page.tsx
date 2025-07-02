"use client"
import Badge from "@/components/Badge";
import CheckBox from "@/components/CheckBox";
import DataTableGeneral from "@/components/DataTableGeneral";
import DataTableItem2 from "@/components/DataTableItem2";
import SortFilterDropdown from "@/components/SortFilterDropdown";
import TestCard from "@/components/Testcard";
import ToolTip from "@/components/ToolTip";
import { mockLandPlotGroups } from "@/mockDataGroups";
import { useState } from "react";



export default function Home() {
  const [isClick,setIsClick] = useState(false);
  const [data,setData]= useState(mockLandPlotGroups);
   const [filters, setFilters] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<string | null>(null);

  
  const applyFilters = (filters: string[], dataToFilter = mockLandPlotGroups) => {
    if (filters.length === 0) return dataToFilter;
    return dataToFilter.filter(item => filters.includes(item.groupType));
  };

  
  const applySort = (order: string | null, dataToSort: any[]) => {
    if (!order) return dataToSort;
    const sorted = [...dataToSort].sort((a, b) =>
      order === "น้อยไปมาก"
        ? a.itemCount - b.itemCount
        : b.itemCount - a.itemCount
    );
    return sorted;
  };

  
  const updateData = (newFilters = filters, newSortOrder = sortOrder) => {
    let filtered = applyFilters(newFilters);
    let sorted = applySort(newSortOrder, filtered);
    setData(sorted);
  };

  return (
    <main className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 gap-5 ">

      <SortFilterDropdown
        type="sort"
        options={["น้อยไปมาก", "มากไปน้อย"]}
        onSelect={(selected) => {
          console.log("Sort by", selected);
          setSortOrder(selected as string);
          updateData(filters, selected as string);
        }}
      />

      <SortFilterDropdown
        type="filter"
        options={["ป่าดงดิบ", "ป่าผสมผลัดใบ", "ป่าสนเขา"]}
        onSelect={(selectedFilters) => {
          console.log("Filter by", selectedFilters);
          setFilters(selectedFilters as string[]);
          updateData(selectedFilters as string[], sortOrder);
        }}
      />


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
