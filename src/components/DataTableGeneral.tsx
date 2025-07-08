import React, { useState } from "react";
import DataTableRow from "./DataTableRow";
import DataTableItem2 from "./DataTableItem2";
import Icons from "@/components/svgs/SvgExports"
import { GeoJSONFeature, GroupedLand } from "@/types/types";

type DataTableGeneralProps = {
  data: GroupedLand[] | GeoJSONFeature[];
  isGroup?: boolean;
  landPlot?: boolean;
  onSortSelected?: (column: string, order: "asc" | "desc" | null) => void;
  sortByColumn?: string | null; 
};

export default function DataTableGeneral({
  data,
  isGroup = false,
  landPlot = false,
  onSortSelected=()=>{},
  sortByColumn
}: DataTableGeneralProps) {

 
 

   const [currentPage , setCurrentPage] = useState(1);
  const pageSize = 7 ;
  const totalPages = Math.ceil(data.length/pageSize);
  
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
  const lastIndexInPage = Math.min(currentPage * pageSize, data.length);

  const paginateddata = data.slice(firstIndexInPage - 1, lastIndexInPage);


  return (
    <div className="flex flex-col w-full h-[auto] bg-white">
      {/* Header */}
      <div className="w-full h-[40px] flex-row flex">
        {isGroup && (
          <>
            <DataTableItem2 isCheckbox header parentClassName="w-[10%]  rounded-tl-xl " icon={false} />
            <DataTableItem2 isText text="หมวดข้อมูล" header parentClassName="w-[45%]  " columnKey="forestType"  onSortSelected={ onSortSelected} sortByColumn={sortByColumn}/>
            <DataTableItem2 isText text="จำนวนรายการ" header parentClassName="w-[20%]  "  columnKey="lands"  onSortSelected={ onSortSelected}  sortByColumn={sortByColumn}/>
            <DataTableItem2 isText text="อัพเดตล่าสุด" header parentClassName="w-[25%]   rounded-tr-xl"  columnKey="latestUpdate" onSortSelected={ onSortSelected} sortByColumn={sortByColumn}/>
          </>
        )}

        {landPlot && (
          <>
            <DataTableItem2 isCheckbox header parentClassName="w-[10%]"  />
            <DataTableItem2 isText text="เลขฉโนดที่ดิน" header parentClassName="w-[10%]  " columnKey=""  icon={false}  onSortSelected={ onSortSelected}  sortByColumn={sortByColumn}/>
            <DataTableItem2 isText text="จังหวัด" parentClassName="w-[45%]  "columnKey="" onSortSelected={ onSortSelected}  sortByColumn={sortByColumn}/>
            <DataTableItem2 isText text="เนื้อที่   (ไร่-งาน-ตารางวา)" header parentClassName="w-[20%]  "  columnKey="" onSortSelected={ onSortSelected}  sortByColumn={sortByColumn}/>
            <DataTableItem2 isText text="การกักเก็บคาร์บอน" header parentClassName="w-[25%]  rounded-tr-xl"columnKey="" onSortSelected={ onSortSelected}  sortByColumn={sortByColumn}/>
            <DataTableItem2 isText text="การจัดการ" header parentClassName="w-[25%]  rounded-tr-xl" icon={false} columnKey="" onSortSelected={ onSortSelected}  sortByColumn={sortByColumn}/>

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
          {paginateddata.map((group) => (
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
          {paginateddata.map((land) => (
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
