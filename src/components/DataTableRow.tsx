import React, { useState } from "react";
import DataTableItem2 from "./DataTableItem2";

type DataTableRowProps = {
  data: any; // data ของแถวนี้
  group?: boolean;
  landPlot?: boolean;
  className?:string;
    disabled?:boolean;
};

export default function DataTableRow({
  data,
  group = false,
  landPlot = false,
  className =" w-full h-full",
  disabled
}: DataTableRowProps) {
  const [isClick, setIsClick] = useState(false);

  if (group) {
    return (
      <div className={` ${className} flex flex-row  ${isClick ?"" :disabled?"":"bg-neutral-300  hover:bg-gray-v1"}  `}
        
      >
        {/* <div className="bg-cancel-300 h-full w-[20%]"></div> */}
        <DataTableItem2
          isCheckbox
          selected={isClick}
          onClick={() => setIsClick(!isClick)}
          parentClassName="w-[10%] "
        />
        <DataTableItem2
          isText
          selected={isClick}
          text={data.groupType}
          parentClassName="w-[45%] "
        />
        <DataTableItem2
          isText
          selected={isClick}
          text={`${data.itemCount} รายการ`}
          parentClassName="w-[20%] "
        />
        <DataTableItem2
          isText
          selected={isClick}
          text={data.latestUpdate}
          parentClassName="w-[25%] "
        />
      </div>
    );
  }

  if (landPlot) {
    return (
      <div className="w-full flex flex-row">
        <DataTableItem2
          isCheckbox
          selected={isClick}
          onClick={() => setIsClick(!isClick)}
          parentClassName="w-[10%] "
        />
        <DataTableItem2
          isText
          selected={isClick}
          text={data.landNumber}
          parentClassName="w-[20%] "
        />
        <DataTableItem2
          isText
          selected={isClick}
          text={data.province}
          parentClassName="w-[30%] "
        />
        <DataTableItem2
          isText
          selected={isClick}
          text={data.area}
          parentClassName="w-[20%] "
        />
        <DataTableItem2
          isAction
          selected={isClick}
          action={<button>ดู</button>}
          parentClassName="w-[20%] "
        />
      </div>
    );
  }

  return null;
}
