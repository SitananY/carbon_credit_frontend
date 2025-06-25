'use client'
import Label from "@/components/Label";
import Radio from "@/components/Radio";
import SectionHeader from "@/components/SectionHeader";
import Switch from "@/components/Switch";
import { CircularProgress, LinearProgress } from "@mui/material"; // Make sure CircularProgress is imported
import dynamic from "next/dynamic";
import { useState } from "react";


type LoadMapProps = {
  onReady: () => void;
};

// Define LoadMap with dynamic import
const LoadMap = dynamic<LoadMapProps>(
  () => import("@/app/map/components/LeafletMap"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex justify-center items-center">
       <LinearProgress color="success" />
      </div>
    ),
  }
);


export default function MapPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>('option1');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const [switchesA, setSwitchesA] = useState([
    { label: "Label", isOpen: false },
    { label: "Label", isOpen: false },
    { label: "Label", isOpen: false },
    { label: "Label", isOpen: false },
    { label: "Label", isOpen: false },
  ]);

  const [switchesB, setSwitchesB] = useState([
    { label: "Label", isOpen: false },
    { label: "Label", isOpen: false },
    { label: "Label", isOpen: false },
  ]);

  const toggleA = (index: number) => {
    setSwitchesA((prev) =>
      prev.map((item, i) =>
        i === index
          ? { ...item, isOpen: !item.isOpen }
          : item
      )
    );
  };

  const toggleB = (index: number) => {
    setSwitchesB((prev) =>
      prev.map((item, i) =>
        i === index
          ? { ...item, isOpen: !item.isOpen }
          : item
      )
    );
  };

  const [mapReady, setMapReady] = useState(false);

  return (
    <div className=" flex flex-row w-full h-full ">

      <div className="w-[352px] h-full bg-[#DDDDDC] px-[32px] pt-[20px] pb-[6px] flex flex-col font-prompt ">
        <div className="h-[54px] font-medium text-xl flex items-center">เปิด/ปิด ชั้นข้อมูล</div>
        <div className="w-[288px] h-[240px] flex flex-col">
          {switchesA.map((sw, i) => (
            <div key={i} className=" w-full flex flex-row justify-between items-center ">
              <Label label={sw.label} />
              <Switch
                isOpen={sw.isOpen}
                onClick={() => toggleA(i)}
              />
            </div>))}
        </div>
        <div className="h-[54px] font-medium text-xl flex items-center">ข้อมูลสารสนเทศพื้นฐาน</div>
        <div className="w-full h-[144px] flex flex-col">
          {switchesB.map((sw, i) => (
            <div key={i} className=" w-full flex flex-row justify-between items-center ">
              <Label label={sw.label} />
              <Switch
                isOpen={sw.isOpen}
                onClick={() => toggleB(i)}
              />
            </div>))}
        </div>
        <div className="h-[54px] font-medium text-xl flex items-center">แผนที่ฐาน</div>

        <div className="w-full h-[240px] flex flex-col">
          <div className=" w-full flex flex-row justify-between items-center pr-[28px]">
            <Label label="Label" />
            <div><Radio value="option1" name="name" checked={selectedOption === 'option1'} onChange={handleOptionChange} /></div>
          </div>
          <div className=" w-full flex flex-row justify-between items-center pr-[28px]">
            <Label label="Label" />
            <div><Radio value="option2" name="name" checked={selectedOption === 'option2'} onChange={handleOptionChange} /></div>
          </div>
          <div className=" w-full flex flex-row justify-between items-center pr-[28px]">
            <Label label="Label" />
            <div><Radio value="option3" name="name" checked={selectedOption === 'option3'} onChange={handleOptionChange} /></div>
          </div>
        </div>
      </div>

      <div className=" p-8  w-full  h-full flex flex-col items-center ">
        <SectionHeader title="ระบบฐานข้อมูลการสำรวจศักยภาพการกักเก็บคาร์บอนในพื้นที่ป่าไม้" backHref="/" />
        
          <div className="w-full  h-full pt-[24px]  rounded-xl shadow-xl items-center flex justify-center">
            {!mapReady && (
              <div className="w-full h-full flex justify-center items-center">
                <LinearProgress color="success" />
              </div>
            )}
            <LoadMap onReady={() => setMapReady(true)} />
          </div>
         
        
      </div>
    </div>
  );
}