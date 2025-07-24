"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import SectionBelowHeader from "@/components/SectionBelowHeader";
import Popup from "@/components/Popup";
import DataTableGeneral from "@/components/DataTableGeneral";
import { GeoJSONData, GeoJSONFeature, GroupedLand } from "@/types/types";
import Button from "@/components/Button";
import Icons from "@/components/svgs/SvgExports";

function getSlugFromForestType(forestType: string): string {
  const map: { [key: string]: string } = {
    "ป่าเบญพรรณ": "deciduous-forest",
    "ป่าดิบแล้ง": "dry-evergreen-forest",
    "ป่าเต็งรัง": "dipterocarp-forest",
    "ป่าดิบชื้น": "moist-evergreen-forest",
    "ป่าดิบเขา": "hill-evergreen-forest",
    "ป่าสนเขา": "pine-forest",
    "ป่าทุ่งหญ้า": "grassland-forest",
    "ป่าชายเลน": "mangrove-forest",
    "ป่าชายหาด": "beach-forest",
    "ป่าพรุ": "peat-swamp-forest",
    "ป่าละเมาะ": "scrub-forest"
  };
  return map[forestType] || "unknown";
}



export default function ManageData() {
  const router = useRouter();
  const [isShow, setIsShow] = useState(false);

  const [rawData, setRawData] = useState<GeoJSONFeature[]>([]);
  const [groupedDataRaw, setGroupedDataRaw] = useState<GroupedLand[]>([]);
  const [groupedData, setGroupedData] = useState<GroupedLand[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<string[]>([]);
  const [sortByColumn, setSortByColumn] = useState<string | null>(null);
  const [currentSortOrder, setCurrentSortOrder] = useState<"asc" | "desc" | null>(null);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleClick = () => {
    router.push("/manage-data/new");
  };

  function formatThaiDate(date: Date): string {
    const monthsThai = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
    const day = date.getDate();
    const month = monthsThai[date.getMonth()];
    const year = date.getFullYear() + 543;
    return `${day} ${month} ${year}`;
  }

  const groupByForestType = (features: GeoJSONFeature[]): GroupedLand[] => {
    const groups: { [key: string]: GeoJSONFeature[] } = {};
    features.forEach(feature => {
      const ft = feature.properties.forestType;
      if (!groups[ft]) groups[ft] = [];
      groups[ft].push(feature);
    });

  const groupedArray: GroupedLand[] = Object.entries(groups).map(([ft, lands]) => ({
  id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
  forestType: ft,
  forestTypeSlug: lands[0]?.properties.forestTypeSlug || "", // ✅ ดึงจาก lands แรก
  lands: lands,
  latestUpdate: formatThaiDate(new Date())
}));


    const forestTypesMock = [
      'ป่าดิบชื้น', 'ป่าดิบเขา', 'ป่าสนเขา', 'ป่าทุ่งหญ้า',
      'ป่าชายเลน', 'ป่าชายหาด', 'ป่าพรุ', 'ป่าละเมาะ',
    ];
    // ฟังก์ชันแมปชื่อป่าไทย → slug


    forestTypesMock.forEach(ft => {
  if (!groups[ft]) {
    groupedArray.push({
      id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
      forestType: ft,
      forestTypeSlug: "", // ไม่มี lands จึงไม่รู้ slug
      lands: [],
      latestUpdate: formatThaiDate(new Date()),
    });
  }
});


    return groupedArray;
  };

  useEffect(() => {
    async function loadGeojson() {
      try {
        const res = await fetch('/api/geojson');
        if (!res.ok) throw new Error('Failed to fetch geojson');
        const json: GeoJSONData = await res.json();
        setRawData(json.features);

        const grouped = groupByForestType(json.features);
        setGroupedDataRaw(grouped);
        setGroupedData(grouped);
      } catch (err: any) {
        setError(err.message || 'Unknown error');
      }
    }
    loadGeojson();
  }, []);

  const applyFilters = (filters: string[], dataToFilter: GroupedLand[]): GroupedLand[] => {
    let result = dataToFilter;
    if (filters.length > 0) {
      result = result.filter(group => filters.includes(group.forestType));
    }
    return result.filter(group => group.lands.length > 0);
  };

  const applySort = (column: string | null, order: "asc" | "desc" | null, dataToSort: GroupedLand[]): GroupedLand[] => {
    if (!column || !order) return dataToSort;

    const sorted = [...dataToSort].sort((a, b) => {
      let valA: any;
      let valB: any;

      switch (column) {
        case "lands":
          valA = a.lands.length;
          valB = b.lands.length;
          break;
        case "latestUpdate":
          valA = new Date(a.latestUpdate.split(' ').reverse().join('-')).getTime();
          valB = new Date(b.latestUpdate.split(' ').reverse().join('-')).getTime();
          break;
        case "forestType":
          valA = a.forestType;
          valB = b.forestType;
          break;
        default:
          return 0;
      }

      if (typeof valA === "number" && typeof valB === "number") {
        return order === "asc" ? valA - valB : valB - valA;
      } else {
        return order === "asc" ? ("" + valA).localeCompare("" + valB) : ("" + valB).localeCompare("" + valA);
      }
    });

    return sorted;
  };

  const updateData = (newFilters = filters, sortColumn = sortByColumn, sortOrder = currentSortOrder) => {
    let filtered = applyFilters(newFilters, groupedDataRaw);
    let sorted = applySort(sortColumn, sortOrder, filtered);
    setGroupedData(sorted);
  };

  const handlerFilter = (selected: string | string[]) => {
    const selectedFilters = Array.isArray(selected) ? selected : [selected];
    setFilters(selectedFilters);
    updateData(selectedFilters, sortByColumn, currentSortOrder);
  };

  const handlerSort = (column: string, order: "asc" | "desc" | null) => {
    if (column === sortByColumn) {
      setSortByColumn(null);
      setCurrentSortOrder(null);
      updateData(filters, null, null);
    } else {
      setSortByColumn(column);
      setCurrentSortOrder(order);
      updateData(filters, column, order);
    }
  };

  
const handleRowClick = (forestType: string, forestTypeSlug: string) => {
  if (!forestTypeSlug) {
    console.warn("Slug not found for forestType:", forestType);
    alert("ไม่พบ slug ในข้อมูล");
    return;
  }
  router.push(`/manage-data/${forestTypeSlug}`);
};

 
  const filterButtons = filters.map(filter => (
    <Button
      key={filter}
      variant="secondary"
      text={filter}
      className="h-[36px] rounded-full px-4 py-2 mr-2 mb-2 flex flex-row items-center"
      onClick={() => {
        const updatedFilters = filters.filter(f => f !== filter);
        setFilters(updatedFilters);
        updateData(updatedFilters, sortByColumn, currentSortOrder);
      }}
      isClose
    >
      <Icons.Close className="w-[14px] h-[14px]" />
    </Button>
  ));

  if (error) return <div>Error: {error}</div>;
  if (!groupedData) return <div>No data</div>;

  return (
    <div className="flex flex-col justify-center">
      <div className="w-full flex flex-col items-center py-[32px] xl:px-[148px] px-[32px]">
        <SectionHeader title="ระบบฐานข้อมูลการสำรวจศักยภาพการกักเก็บคาร์บอนในพื้นที่ป่าไม้" />
        <SectionBelowHeader
          manageData
          handleClick={handleClick}
          onFilterSelected={handlerFilter}
          selectedIds={selectedIds}
        >
          {filterButtons}
        </SectionBelowHeader>

        <div className="mb-[50px] w-full">
          <DataTableGeneral
            data={groupedData}
            dataType="group"
            onSortSelected={handlerSort}
            sortByColumn={sortByColumn}
            selectedIds={selectedIds}
            setSelectedIds={setSelectedIds}
            onRowClick={(forestType, forestTypeSlug) => handleRowClick(forestType, forestTypeSlug)}

          />
        </div>

        <Popup
          isShow={isShow}
          onCancle={() => setIsShow(!isShow)}
          remove
          onConfirm={() => setIsShow(!isShow)}
        />
      </div>
    </div>
  );
}
