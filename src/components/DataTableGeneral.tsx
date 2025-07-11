import React, { useState } from "react";
import DataTableRow from "./DataTableRow";
import DataTableItem2 from "./DataTableItem2";
import Icons from "@/components/svgs/SvgExports";
import { GroupedLand } from "@/types/types";

type DataTableGeneralProps = {
  data: GroupedLand[]; // ใช้ GroupedLand[] เป็นหลัก
  isGroup?: boolean;
  landPlot?: boolean;
  onSortSelected?: (column: string, order: "asc" | "desc" | null) => void;
  sortByColumn?: string | null;
  selectedIds: string[];
  setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
  progress?:boolean;
  isPage?:boolean;
};

export default function DataTableGeneral({
  data,
  isGroup = false,
  landPlot = false,
  onSortSelected = () => {},
  sortByColumn,
  selectedIds,
  setSelectedIds,
  progress=false,
  isPage=true,
}: DataTableGeneralProps) {
  const [isSelected, setIsSelected] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 7;
  const totalPages = Math.ceil(data.length / pageSize);
  const variableDescrib = [
    ["GBH","เส้นรอบวง","เซนติเมตร"],
    ["DBH","เส้นผ่านศูนย์กลางตรงสูงเพียงอก (1.30 เมตร เหนือพื้นดิน) ","เซนติเมตร"],
    ["H","ความสูง","เมตร"],
    ["Y","น้ำหนักแห้ง","กิโลกรัม"],
    ["WS","น้ำหนักแห้งของลำต้น","กิโลกรัม"],
    ["WB","น้ำหนักแห้งของกิ่ง","กิโลกรัม"],
    ["WL","น้ำหนักแห้งของใบ","กิโลกรัม"],
    ["C","ปริมาณคาร์บอน","ตันคาร์บอน"],
    ["CC","การกักเก็บคาร์บอน","ตันคาร์บอนไดออกไซด์"],
    ["O2","ความสามารถในการผลิตออกซิเจน","ตันออกซิเจน"],
  ]
  const goToPage = (page: number) => {
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;
    setCurrentPage(page);
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const firstIndexInPage = (currentPage - 1) * pageSize;
  const lastIndexInPage = Math.min(currentPage * pageSize, data.length);

  const paginatedData = data.slice(firstIndexInPage, lastIndexInPage);

  const [headerChecked, setHeaderChecked] = useState(false);

  const toggleHeaderCheckbox = () => {
    const idsOnPage = landPlot
      ? paginatedData.flatMap(group => group.lands.map(land => land.id))
      : paginatedData.map(group => group.id);

    if (headerChecked) {
      setSelectedIds(prev => prev.filter(id => !idsOnPage.includes(id)));
      setHeaderChecked(false);
    } else {
      setSelectedIds(prev => [...new Set([...prev, ...idsOnPage])]);
      setHeaderChecked(true);
    }
    setIsSelected(!isSelected);
  };

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header */}
      <div className="w-full h-[40px] flex flex-row">
        {isGroup && (
          <>
            <DataTableItem2
              isCheckbox
              selected={isSelected}
              header
              parentClassName="w-[10%] rounded-tl-xl"
              icon={false}
              onClick={toggleHeaderCheckbox}
            />
            <DataTableItem2
              isText
              text="หมวดข้อมูล"
              header
              parentClassName="w-[45%]"
              columnKey="forestType"
              onSortSelected={onSortSelected}
              sortByColumn={sortByColumn}
            />
            <DataTableItem2
              isText
              text="จำนวนรายการ"
              header
              parentClassName="w-[20%]"
              columnKey="lands"
              onSortSelected={onSortSelected}
              sortByColumn={sortByColumn}
            />
            <DataTableItem2
              isText
              text="อัพเดตล่าสุด"
              header
              parentClassName="w-[25%] rounded-tr-xl"
              columnKey="latestUpdate"
              onSortSelected={onSortSelected}
              sortByColumn={sortByColumn}
            />
          </>
        )}

        {landPlot && (
          <>
            <DataTableItem2
              isCheckbox
              selected={isSelected}
              header
              parentClassName="w-[10%]"
              icon={false}
              onClick={toggleHeaderCheckbox}
            />
            <DataTableItem2
              isText
              text="เลขฉโนดที่ดิน"
              header
              parentClassName="w-[20%]"
              columnKey="landTitleNumber"
              onSortSelected={onSortSelected}
              sortByColumn={sortByColumn}
            />
            <DataTableItem2
              isText
              text="จังหวัด"
              header
              parentClassName="w-[10%]"
              columnKey="province"
              onSortSelected={onSortSelected}
              sortByColumn={sortByColumn}
            />
            <DataTableItem2
              isText
              text="เนื้อที่ (ไร่-งาน-ตารางวา)"
              header
              parentClassName="w-[25%]"
              columnKey="area"
              onSortSelected={onSortSelected}
              sortByColumn={sortByColumn}
            />
            <DataTableItem2
              isText
              text="การกักเก็บคาร์บอน"
              header
              parentClassName="w-[20%]"
              columnKey="carbon-credit"
              onSortSelected={onSortSelected}
              sortByColumn={sortByColumn}
            />
            <DataTableItem2
              isText
              text="การจัดการ"
              header
              parentClassName="w-[15%] rounded-tr-xl"
              icon={false}
            />
          </>
        )}

              {progress && (
        <>
          {/* Header */}
          <div className="w-full h-[40px] flex flex-row">
            <DataTableItem2
              isText
              text="ตัวแปร"
              header
              parentClassName="w-[20%] rounded-tl-xl"
              icon={false}
            />
            <DataTableItem2
              isText
              text="ความหมาย"
              header
              icon={false}
              parentClassName="w-[50%]"
            />
            <DataTableItem2
              isText
              text="หน่วย"
              header
              icon={false}
              parentClassName="w-[30%] rounded-tr-xl"
            />
          </div>

          
        </>
      )}

      </div>

      {/* Body */}
      {isGroup && (
        <div className="w-full">
          {paginatedData.map(group => (
            <DataTableRow
              key={group.id}
              data={group}
              group
              className="w-full h-[40px]"
              selectedIds={selectedIds}
              setSelectedIds={setSelectedIds}
            />
          ))}
        </div>
      )}

      {landPlot && (
        <div className="w-full">
          {paginatedData.map(group => (
            <div key={group.id}>
              {group.lands.map(land => (
                <DataTableRow
                  key={land.id}
                  data={land}
                  landPlot
                  className="w-full h-[40px] bg-gray-700"
                  selectedIds={selectedIds}
                  setSelectedIds={setSelectedIds}
                />
              ))}
            </div>
          ))}
        </div>
      )}

      {progress && (
        
          <div className="w-full">
            {variableDescrib.map((item, index) => (
              <DataTableRow
                key={index}
                data={{ p1: item[0], p2: item[1], p3: item[2] }}
                progress
                selectedIds={selectedIds}
              />
            ))}
          </div>
      )}

      {isPage && (
            <div className="w-full h-[40px] flex flex-row justify-between items-center bg-gray-v1 rounded-bl-xl rounded-br-xl">
                <div className="pl-[32px]">
                  แสดงรายการที่ {firstIndexInPage + 1} ถึง {lastIndexInPage} จากทั้งหมด {data.length} รายการ
                </div>
                <div className="flex flex-row gap-[16px] items-center pr-[32px]">
                  <Icons.Double_arrow_left
                    onClick={() => goToPage(1)}
                    className={`w-[18px] h-[18px] ${currentPage === 1 ? "opacity-50" : "cursor-pointer"}`}
                  />
                  <Icons.Backward
                    onClick={() => goToPage(currentPage - 1)}
                    className={`w-[18px] h-[18px] ${currentPage === 1 ? "opacity-50" : "cursor-pointer"}`}
                  />
                  <div>
                    {pages.map(page => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-3 py-1 rounded text-sm font-prompt w-[37px] h-[37px] rounded-full cursor-pointer ${
                          page === currentPage
                            ? "bg-primary-500 text-neutral-300"
                            : "hover:bg-primary-300 text-text-800"
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>
                  <Icons.Forward
                    onClick={() => goToPage(currentPage + 1)}
                    className={`w-[18px] h-[18px] ${currentPage === totalPages ? "opacity-50" : "cursor-pointer"}`}
                  />
                  <Icons.Double_arrow_right
                    onClick={() => goToPage(totalPages)}
                    className={`w-[18px] h-[18px] ${currentPage === totalPages ? "opacity-50" : "cursor-pointer"}`}
                  />
                </div>
              </div>
      )}
      
    </div>
  );
}
