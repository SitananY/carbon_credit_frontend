import React, { useState } from "react";
import DataTableRow from "./DataTableRow";
import DataTableItem2 from "./DataTableItem2";
import Icons from "@/components/svgs/SvgExports"
import { GeoJSONFeature, GroupedLand } from "@/types/types";

type DataTableGeneralProps = {
  data: GroupedLand[] | GeoJSONFeature[];
  isGroup?: boolean;
  landPlot?: boolean;
};

export default function DataTableGeneral({
  data,
  isGroup = false,
  landPlot = false
}: DataTableGeneralProps) {

 
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      // toggle order
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

    const sortedData = [...data].sort((a, b) => {
    if (!sortColumn) return 0;
        const getValue = (item: any, column: string) => {
    if (isGroup) {
      const group = item as GroupedLand;
      switch (column) {
        case "forestType": return group.forestType;
        case "landsCount": return group.lands.length;
        case "latestUpdate": return group.latestUpdate;
        default: return "";
      }
    } else {
      const land = item as GeoJSONFeature;
      switch (column) {
        case "landTitleNumber": return land.properties.landNumber;
        case "province": return land.properties.province;
        case "area": return land.properties.area;
        case "carbon-credit": return land.properties["carbon-credit"];
        default: return "";
      }
    }
  };

    const valA = getValue(a, sortColumn);
    const valB = getValue(b, sortColumn);

    if (typeof valA === "number" && typeof valB === "number") {
      return sortOrder === "asc" ? valA - valB : valB - valA;
    } else if (typeof valA === "string" && typeof valB === "string") {
      return sortOrder === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
    }
    return 0;
  });

 

   const [currentPage , setCurrentPage] = useState(1);
  const pageSize = 7 ;
  const totalPages = Math.ceil(sortedData.length/pageSize);
  
  const goToPage = (page: number) => {
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;
    setCurrentPage(page);
  };
  
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  } 
  const firstIndexInPage = (currentPage - 1) * pageSize + 1;
  const lastIndexInPage = Math.min(currentPage * pageSize, sortedData.length);

  const paginatedsortedData = sortedData.slice(firstIndexInPage - 1, lastIndexInPage);


  return (
    <div className="flex flex-col w-[792px] h-[auto] bg-white">
      {/* Header */}
      <div className="w-full h-[40px] flex-row flex">
        {isGroup && (
          <>
            <DataTableItem2 isCheckbox header parentClassName="w-[10%]  rounded-tl-xl " icon={false} />
            <DataTableItem2 isText text="หมวดข้อมูล" header parentClassName="w-[45%]  " onHeaderClick={()=>handleSort("forestType")} />
            <DataTableItem2 isText text="จำนวนรายการ" header parentClassName="w-[20%]  " onHeaderClick={()=>handleSort("landsCount")} />
            <DataTableItem2 isText text="อัพเดตล่าสุด" header parentClassName="w-[25%]   rounded-tr-xl"  onHeaderClick={()=>handleSort("latestUpdate")}/>
          </>
        )}

        {landPlot && (
          <>
            <DataTableItem2 isCheckbox header parentClassName="w-[10%]"  />
            <DataTableItem2 isText text="เลขฉโนดที่ดิน" header parentClassName="w-[10%]  " icon={false}  onHeaderClick={()=>handleSort("landTitleNumber")} />
            <DataTableItem2 isText text="จังหวัด" parentClassName="w-[45%]  "onHeaderClick={()=>handleSort("province")} />
            <DataTableItem2 isText text="เนื้อที่" header parentClassName="w-[20%]  "onHeaderClick={()=>handleSort("area")} />
            <DataTableItem2 isText text="การกักเก็บคาร์บอน" header parentClassName="w-[25%]  rounded-tr-xl"onHeaderClick={()=>handleSort("carbon-credit")} />
            <DataTableItem2 isText text="การจัดการ" header parentClassName="w-[25%]  rounded-tr-xl" />

          </>
        )}
      </div>

      {/* Data rows */}
      {/* <div className="w-full h-[auto] bg-red-500 ">
          {paginatedData.map((item, i) => (
        <DataTableRow
          key={i}
          data={item}
          group={group}
          landPlot={landPlot} className="w-full h-[40px] "
        />
      ))}
      </div> */}
      {isGroup && (
        <div className="w-full h-[auto] bg-red-500 ">
          {paginatedsortedData.map((group) => (
            <DataTableRow
              key={group.id}
              data={group}
              group={isGroup}
              landPlot={landPlot}
              className="w-full h-[40px]"
            />
          ))}
        </div>
      )}

      {landPlot && (
        <div className="w-full h-[auto] bg-red-500 ">
          {paginatedsortedData.map((land) => (
            <DataTableRow
              key={land.id}
              data={land}
              group={isGroup}
              landPlot={landPlot}
              className="w-full h-[40px]"
            />
          ))}
        </div>
      )}
     
      



      <div className="w-full h-[40px] flex-row flex justify-between items-center bg-gray-v1 rounded-bl-xl rounded-br-xl ">
        <div className="pl-[32px]">แสดงรายการที่ {firstIndexInPage} ถึง {lastIndexInPage} จากทั้งหมด {data.length} รายการ</div>
        <div className="flex flex-row gap-[16px] items-center pr-[32px]">

              <Icons.Double_arrow_left
                    onClick={() => goToPage(1)}
                    className={`w-[18px] h-[18px] ${currentPage === 1 ? "opacity-50 " : "cursor-pointer"}`}
                />
              <Icons.Backward
                    onClick={() => goToPage(currentPage - 1)}
                    className={`w-[18px] h-[18px] ${currentPage === 1 ? "opacity-50 " : "cursor-pointer"}`}
                />
                <div>
                  {pages.map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1 rounded text-sm font-prompt w-[37px] h-[37px] rounded-full cursor-pointer ${
                      page === currentPage ? "bg-primary-500 text-neutral-300  " : "hover:bg-primary-300 text-text-800 "
                    }`}
                  >
                    {page}
                  </button>
                ))}
                </div>
               
              <Icons.Forward
                onClick={() => goToPage(currentPage + 1)}
                className={`w-[18px] h-[18px] ${currentPage === totalPages ? "opacity-50 " : "cursor-pointer"}`}
              />
              <Icons.Double_arrow_right
                onClick={() => goToPage(totalPages)}
                className={`w-[18px] h-[18px] ${currentPage === totalPages ? "opacity-50 " : "cursor-pointer"}`}
              />
          
        </div>
      </div>

      
    </div>
  );
}
