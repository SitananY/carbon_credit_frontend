import React from "react";
import DataTableRow from "./DataTableRow";
import DataTableItem2 from "./DataTableItem2";

type DataTableGeneralProps = {
  data: any[];
  group?: boolean;
  landPlot?: boolean;
};

export default function DataTableGeneral({
  data,
  group = false,
  landPlot = false
}: DataTableGeneralProps) {
  return (
    <div className="flex flex-col w-[792px] h-[100px] bg-white">
      {/* Header */}
      <div className="w-full h-[40px] flex-row flex">
        {group && (
          <>
            <DataTableItem2 isCheckbox header parentClassName="w-[10%]  rounded-tl-xl " />
            <DataTableItem2 isText text="หมวดข้อมูล" header parentClassName="w-[45%]  " />
            <DataTableItem2 isText text="จำนวนรายการ" header parentClassName="w-[20%]  " />
            <DataTableItem2 isText text="อัพเดตล่าสุด" header parentClassName="w-[25%]   rounded-tr-xl" />
          </>
        )}

        {landPlot && (
          <>
            <DataTableItem2 isCheckbox header parentClassName="w-[10%]" />
            <DataTableItem2 isText text="เลขที่ดิน" header parentClassName="w-[10%]  " />
            <DataTableItem2 isText text="จังหวัด" parentClassName="w-[45%]  " />
            <DataTableItem2 isText text="พื้นที่" header parentClassName="w-[20%]  " />
            <DataTableItem2 isText text="ดูข้อมูล" header parentClassName="w-[25%]  rounded-tr-xl" />
          </>
        )}
      </div>

      {/* Data rows */}
      <div className="w-full h-[400px] ">
          {data.map((item, i) => (
        <DataTableRow
          key={i}
          data={item}
          group={group}
          landPlot={landPlot} className="w-full h-[40px] "
        />
      ))}
      </div>
      

      
    </div>
  );
}
