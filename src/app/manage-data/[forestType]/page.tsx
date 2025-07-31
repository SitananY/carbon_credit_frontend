import ManageDataForestClient from "@/app/manage-data/components/ManageDataForestClient";
import SectionBelowHeader from "@/components/SectionBelowHeader";
import SectionHeader from "@/components/SectionHeader";
import { GeoJSONData, GeoJSONFeature } from "@/types/types";

type Props = {
  params: {
    forestType: string;
  };
};

async function getGeojson(): Promise<GeoJSONFeature[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/geojson`);
  if (!res.ok) throw new Error("Failed to fetch geojson");
  const json: GeoJSONData = await res.json();
  return json.features;
}

export default async function ManageDataForestPage({ params }: Props) {
  const { forestType } = params;
  const features = await getGeojson();

  return (
    <div className="flex flex-col justify-center">
      <div className="w-full flex flex-col items-center py-[32px] xl:px-[148px] px-[32px]">
        <SectionHeader title="ระบบฐานข้อมูลการสำรวจศักยภาพการกักเก็บคาร์บอนในพื้นที่ป่าไม้" backHref />
        <SectionBelowHeader manageData manageData2 />
        <ManageDataForestClient forestType={forestType} features={features} />
      </div>
    </div>
  );
}
