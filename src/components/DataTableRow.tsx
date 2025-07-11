import React, { useState } from "react";
import DataTableItem2 from "./DataTableItem2";
import Icons from "@/components/svgs/SvgExports"
import { useRouter } from "next/navigation";
import Link from "next/link";

type DataTableRowProps = {
  data: any; // data ของแถวนี้
  group?: boolean;
  landPlot?: boolean;
  progress?:boolean;
  className?:string;
  disabled?:boolean;
  selectedIds: string[];
  setSelectedIds?: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function DataTableRow({
  data,
  group = false,
  landPlot = false,
  className =" w-full h-full",
  disabled,
  selectedIds,
  setSelectedIds,
  progress=false
}: DataTableRowProps) {
  const [isClick, setIsClick] = useState(false);

  if (group) {
    return (
      <Link href={`/manage-data/${encodeURIComponent(data.forestType)}`}>
      
      <div className={` ${className} flex flex-row  ${isClick ?"" :disabled?"":"bg-neutral-300  hover:bg-gray-v1"}  `}
        
      >
        {/* <div className="bg-cancel-300 h-full w-[20%]"></div> */}
        <DataTableItem2
          isCheckbox
          rowId={data.id}
          selectedIds={selectedIds}
          setSelectedIds={setSelectedIds}
          selected={selectedIds.includes(data.id)}
          parentClassName="w-[10%] "
        />
        <DataTableItem2
          isText
          rowId={data.id}
          selectedIds={selectedIds}
          setSelectedIds={setSelectedIds}
          selected={selectedIds.includes(data.id)}
  
          text={data.forestType}
          parentClassName="w-[45%] "
        />
        <DataTableItem2
          isText
          rowId={data.id}
          selectedIds={selectedIds}
          setSelectedIds={setSelectedIds}
          selected={selectedIds.includes(data.id)}
  
          text={`${data.lands.length} รายการ`}
          parentClassName="w-[20%] "
        />
        <DataTableItem2
          isText
          rowId={data.id}
          selectedIds={selectedIds}
          setSelectedIds={setSelectedIds}
          selected={selectedIds.includes(data.id)}
          text={data.latestUpdate}
          parentClassName="w-[25%] "
        />
      </div>
      </Link>
    );
  }

  if (landPlot) {
    return (
      <Link href={`/manage-data/${encodeURIComponent(data.forestType)}/`}>
       
      <div className="w-full flex flex-row">
        <DataTableItem2
          isCheckbox
          rowId={data.id}
          selectedIds={selectedIds}
          setSelectedIds={setSelectedIds}
          selected={selectedIds.includes(data.id)}
          parentClassName="w-[10%] "
        />
        <DataTableItem2
          isText
          rowId={data.id}
          parentClassName="w-[20%] "
        />
        <DataTableItem2
          isText
          rowId={data.id}
          text={data.province}
          parentClassName="w-[30%] "
        />
        <DataTableItem2
          isText
          rowId={data.id}
          text={data.area}
          parentClassName="w-[20%] "
        />
        <DataTableItem2
          isAction
          rowId={data.id}
          selectedIds={selectedIds}
          setSelectedIds={setSelectedIds}
          selected={selectedIds.includes(data.id)}

          action={
          <Icons.Edit className="w-[18px] h-[18px]"/>
          }
          parentClassName="w-[20%] "
        />
      </div>
       
      </Link>
    );
  }
  if (progress) {
  return (
    <div className="w-full flex flex-row">
      <DataTableItem2
        isText
        text={data.p1} // ตัวแปร
        parentClassName="w-[20%]"
      />
      <DataTableItem2
        isText
        text={data.p2} // ความหมาย
        parentClassName="w-[50%]"
      />
      <DataTableItem2
        isText
        text={data.p3} // หน่วย
        parentClassName="w-[30%]"
      />
    </div>
  );
}


  return null;
}
