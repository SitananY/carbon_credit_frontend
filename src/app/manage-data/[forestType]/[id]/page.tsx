'use client';

import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import SectionBelowHeader from "@/components/SectionBelowHeader";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import Popup from "@/components/Popup";
import { GeoJSONFeature } from "@/types/types";

type FeatureProperties = {
  stroke?: string;
  'stroke-width'?: number;
  'stroke-opacity'?: number;
  fill?: string;
  'fill-opacity'?: number;
  landTitleNumber: string;
  surveyPage: string;
  landNumber: string;
  mapSheet: string;
  subdistrict: string;
  district: string;
  province: string;
  area: string;
  forestType: string;
  forestTypeSlug: string;
  annualRainfall: string;
  'carbon-credit': number;
  trees: any[];
};

export default function LandDetailPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params as { id: string };

  const [landData, setLandData] = useState<GeoJSONFeature | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/geojson'); 
        if (!res.ok) throw new Error('Failed to fetch geojson');
        const json = await res.json();
        const features: GeoJSONFeature[] = json.features;

        const found = features.find((land) => land.id === id);
        setLandData(found || null);
      } catch (error) {
        console.error("Error fetching geojson:", error);
        setLandData(null);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [id]);

  const handleClick = () => {
    router.push(`/manage-data/`);
  };

  if (isLoading) {
    return (
      <div className="w-full h-full p-8 flex flex-col items-center justify-center">
        <SectionHeader title="รายละเอียดแปลงที่ดิน" backHref />
        <div className="text-neutral-600 text-lg mt-6">กำลังโหลดข้อมูล...</div>
      </div>
    );
  }

  if (!landData) {
    return (
      <div className="w-full h-full p-8 flex flex-col items-center justify-center">
        <SectionHeader title="จัดการข้อมูลแปลงที่ดิน" backHref />
        <div className="text-red-600 text-lg mt-6">ไม่พบข้อมูลแปลงที่ดินที่ต้องการ</div>
        <Button
          text="กลับหน้าหลัก"
          className="mt-6"
          onClick={() => router.push("/manage-data")}
        />
      </div>
    );
  }

  const props = landData.properties as FeatureProperties;

  return (
    <div className="w-full h-full p-[32px]">
      <div className="flex flex-col justify-center max-w-4xl mx-auto">
        <SectionHeader title="จัดการข้อมูลแปลงที่ดิน" backHref />

        <div className="py-[24px]">
          <SectionBelowHeader  view forestText={props.landTitleNumber} />
        </div>

        <div className="bg-white border border-neutral-700 rounded-xl p-6 space-y-4 font-prompt text-text-800">
          {[
            { label: "เลขโฉนดที่ดิน", value: props.landTitleNumber },
            { label: "หน้าสำรวจ", value: props.surveyPage },
            { label: "เลขที่ดิน", value: props.landNumber },
            { label: "ระวาง", value: props.mapSheet },
            { label: "ตำบล", value: props.subdistrict },
            { label: "อำเภอ", value: props.district },
            { label: "จังหวัด", value: props.province },
            { label: "เนื้อที่ (ไร่-งาน-ตารางวา)", value: props.area },
            { label: "ประเภทป่า", value: props.forestType },
            { label: "ปริมาณน้ำฝน (มิลลิเมตร)", value: props.annualRainfall },
            { label: "Carbon Credit", value: props['carbon-credit'] },
          ].map((item, index) => (
            <div className="flex flex-row gap-6" key={index}>
              <div className="w-1/3 font-semibold">{item.label}:</div>
              <div className="w-2/3">{item.value || "-"}</div>
            </div>
          ))}

          <div>
            <div className="font-semibold mb-2">จำนวนต้นไม้:</div>
            <div>{props.trees?.length ?? 0} ต้น</div>
          </div>
        </div>

      </div>

      <Popup isShow={isShow} onCancle={() => setIsShow(false)} onConfirm={handleClick} add />
    </div>
  );
}
