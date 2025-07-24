import React, { useState } from "react";
import DataTableRow from "./DataTableRow";
import DataTableItem2 from "./DataTableItem2";
import Icons from "@/components/svgs/SvgExports";
import { GroupedLand, GeoJSONFeature } from "@/types/types";

type DataTableGeneralProps = {
  data: GroupedLand[] | GeoJSONFeature[];
  dataType: "group" | "landPlot";
  onSortSelected?: (column: string, order: "asc" | "desc" | null) => void;
  sortByColumn?: string | null;
  selectedIds: string[];
  setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
  progress?: boolean;
  isPage?: boolean;
  onRowClick?: (forestType: string, forestTypeSlug: string) => void;
  onDetailClick?:(id: string)=>void;
};

export default function DataTableGeneral({
  data,
  dataType,
  onSortSelected = () => {},
  sortByColumn,
  selectedIds,
  setSelectedIds,
  progress = false,
  isPage = true,
  onRowClick,
  onDetailClick
}: DataTableGeneralProps) {
  const [isSelected, setIsSelected] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 7;
  const totalPages = Math.ceil(data.length / pageSize);

  const variableDescrib = [
    ["GBH", "เส้นรอบวง", "เซนติเมตร"],
    ["DBH", "เส้นผ่านศูนย์กลางตรงสูงเพียงอก (1.30 เมตร เหนือพื้นดิน) ", "เซนติเมตร"],
    ["H", "ความสูง", "เมตร"],
    ["Y", "น้ำหนักแห้ง", "กิโลกรัม"],
    ["WS", "น้ำหนักแห้งของลำต้น", "กิโลกรัม"],
    ["WB", "น้ำหนักแห้งของกิ่ง", "กิโลกรัม"],
    ["WL", "น้ำหนักแห้งของใบ", "กิโลกรัม"],
    ["C", "ปริมาณคาร์บอน", "ตันคาร์บอน"],
    ["CC", "การกักเก็บคาร์บอน", "ตันคาร์บอนไดออกไซด์"],
    ["O2", "ความสามารถในการผลิตออกซิเจน", "ตันออกซิเจน"],
  ];

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
    let idsOnPage: string[] = [];

    if (dataType === "group") {
      idsOnPage = (paginatedData as GroupedLand[]).map(group => group.id);
    } else if (dataType === "landPlot") {
      idsOnPage = (paginatedData as GeoJSONFeature[]).map(land => land.id);
    }

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
        {dataType === "group" && (
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

        {dataType === "landPlot" && (
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
              parentClassName="w-[15%]"
              columnKey="province"
              onSortSelected={onSortSelected}
              sortByColumn={sortByColumn}
            />
            <DataTableItem2
              isText
              text="เนื้อที่(ไร่-งาน-ตารางวา)"
              header
              parentClassName="w-[20%]"
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
      </div>

      {/* Body */}
      {dataType === "group" && (
        <div className="w-full">
          {(paginatedData as GroupedLand[]).map(group => (
            <DataTableRow
              key={group.id}
              data={group}
              group
              className="w-full h-[40px] cursor-pointer"
              selectedIds={selectedIds}
              setSelectedIds={setSelectedIds}
              onClick={() =>
                onRowClick && onRowClick(group.forestType, group.forestTypeSlug)
              }

            />
          ))}
        </div>
      )}

      {dataType === "landPlot" && (
        <div className="w-full">
          {(paginatedData as GeoJSONFeature[]).map(land => (
            <DataTableRow
              key={land.id}
              data={land}
              landPlot
              className="w-full h-[40px]  cursor-pointer"
              selectedIds={selectedIds}
              setSelectedIds={setSelectedIds}
              onClick={() =>
 onDetailClick &&
 onDetailClick(land.id)
}

            />
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
