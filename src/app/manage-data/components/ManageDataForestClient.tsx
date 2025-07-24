"use client";

import { useRouter } from "next/navigation";
import { GeoJSONFeature } from "@/types/types";
import DataTableGeneral from "@/components/DataTableGeneral";
import { useState } from "react";

type Props = {
  forestType: string;
  features: GeoJSONFeature[];
};

export default function ManageDataForestClient({ forestType, features }: Props) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const router = useRouter();

  // ฟังก์ชันจัดการคลิกแถว ให้ไปหน้า detail
  const handleRowClick = (id: string) => {
    router.push(`/manage-data/${forestType}/${id}`);
  };

  return (
    <div className="w-full">
      <DataTableGeneral
        data={features}
        dataType="landPlot"
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
        isPage={true}
        onDetailClick={handleRowClick}  // ส่ง handleRowClick ให้ DataTableGeneral
      />
    </div>
  );
}
