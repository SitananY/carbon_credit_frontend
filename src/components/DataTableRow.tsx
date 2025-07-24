import React, { useState } from "react";
import DataTableItem2 from "./DataTableItem2";
import Icons from "@/components/svgs/SvgExports";

type DataTableRowProps = {
  data: any;
  group?: boolean;
  landPlot?: boolean;
  progress?: boolean;
  className?: string;
  disabled?: boolean;
  selectedIds: string[];
  setSelectedIds?: React.Dispatch<React.SetStateAction<string[]>>;
  onClick?: () => void; // ✅ เพิ่ม onClick prop
};

export default function DataTableRow({
  data,
  group = false,
  landPlot = false,
  className = "w-full h-full",
  disabled,
  selectedIds,
  setSelectedIds,
  progress = false,
  onClick,
}: DataTableRowProps) {
  const [isClick, setIsClick] = useState(false);

  if (group) {
    return (
      <div
        className={`${className} flex flex-row cursor-pointer ${
          isClick ? "" : disabled ? "" : "bg-neutral-300 hover:bg-gray-v1"
        }`}
        onClick={onClick}
      >
        <div onClick={(e) => e.stopPropagation()} className="w-[10%] h-full ">
          <DataTableItem2
            isCheckbox
            rowId={data.id}
            selectedIds={selectedIds}
            setSelectedIds={setSelectedIds}
            selected={selectedIds.includes(data.id)}
            parentClassName="w-full"
          />
        </div>

        <DataTableItem2
          isText
          rowId={data.id}
          selectedIds={selectedIds}
          setSelectedIds={setSelectedIds}
          selected={selectedIds.includes(data.id)}
          text={data.forestType}
          parentClassName="w-[45%]"
        />
        <DataTableItem2
          isText
          rowId={data.id}
          selectedIds={selectedIds}
          setSelectedIds={setSelectedIds}
          selected={selectedIds.includes(data.id)}
          text={`${data.lands.length} รายการ`}
          parentClassName="w-[20%]"
        />
        <DataTableItem2 
          isText
          rowId={data.id}
          selectedIds={selectedIds}
          setSelectedIds={setSelectedIds}
          selected={selectedIds.includes(data.id)}
          text={data.latestUpdate}
          parentClassName="w-[25%]"
        />
      </div>
    );
  }

  if (landPlot) {
    return (
      <div
        className={`${className} flex flex-row cursor-pointer ${
          isClick ? "" : disabled ? "" : "bg-neutral-300 hover:bg-gray-v1"
        }`}
        onClick={onClick} 
      >
        <div onClick={(e) => e.stopPropagation()}  className="w-[10%] h-full ">
          <DataTableItem2
            isCheckbox
            rowId={data.id}
            selectedIds={selectedIds}
            setSelectedIds={setSelectedIds}
            selected={selectedIds.includes(data.id)}
            parentClassName="w-full"
          />
        </div>

        <DataTableItem2
          isText
          rowId={data.id}
          text={data.properties.landTitleNumber}
          parentClassName="w-[20%]"
        />
        <DataTableItem2
          isText
          rowId={data.id}
          text={data.properties.province}
          parentClassName="w-[15%]"
        />
        <DataTableItem2
          isText
          rowId={data.id}
          text={data.properties.area}
          parentClassName="w-[20%]"
        />
        <DataTableItem2
          isText
          rowId={data.id}
          text={data.properties["carbon-credit"]}
          parentClassName="w-[20%]"
        />

        <div onClick={(e) => e.stopPropagation()}  className="w-[15%] h-full ">
          <DataTableItem2
            isAction
            rowId={data.id}
            selectedIds={selectedIds}
            setSelectedIds={setSelectedIds}
            selected={selectedIds.includes(data.id)}
            action={<Icons.Edit className="w-[18px] h-[18px]" />}
            parentClassName="w-full"
          />
        </div>
      </div>
    );
  }

  if (progress) {
    return (
      <div className="w-full flex flex-row">
        <DataTableItem2 isText text={data.p1} parentClassName="w-[20%]" />
        <DataTableItem2 isText text={data.p2} parentClassName="w-[50%]" />
        <DataTableItem2 isText text={data.p3} parentClassName="w-[30%]" />
      </div>
    );
  }

  return null;
}
