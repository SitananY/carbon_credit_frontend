'use client'
import Label from "@/components/Label";
import Radio from "@/components/Radio";
import SectionHeader from "@/components/SectionHeader";
import Switch from "@/components/Switch";
import dynamic from "next/dynamic";
import { useState } from "react";

const LoadMap = dynamic(()=>import("@/app/map/components/LeafletMap"),
{
  ssr:false,
  loading: () => <p>Loading...</p>
}
);


export default function MapPage() {
  const [activeIndex,setActiveIndex] =useState<number|null>(null);
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
  };const toggleB = (index: number) => {
    setSwitchesB((prev) =>
      prev.map((item, i) =>
        i === index
          ? { ...item, isOpen: !item.isOpen }
          : item
      )
    );
  };
  

  return(
    <div className=" flex flex-row  ">
    
    <div className="w-[352px] h-full bg-[#DDDDDC] px-[32px] py-[20px] flex flex-col font-prompt ">
          <div>เปิด/ปิด ชั้นข้อมูล</div>
          <div className="w-[288px] h-[240px] flex flex-col">
                {switchesA.map((sw,i) => (
                  <div key={i} className=" w-full flex flex-row justify-between items-center ">
                      <Label label={sw.label}/>
                      <Switch
                        isOpen={sw.isOpen}
                        onClick={()=>toggleA(i)}
                    />
                  </div>  ))}
          </div>
          <div>ข้อมูลสารสนเทศพื้นฐาน</div>
          <div className="w-full h-[240px] flex flex-col">
                {switchesB.map((sw,i) => (
                  <div key={i} className=" w-full flex flex-row justify-between items-center ">
                      <Label label={sw.label}/>
                      <Switch
                        isOpen={sw.isOpen}
                        onClick={()=>toggleB(i)}
                    />
                  </div>  ))}
          </div>
          
          <div>แผนที่ฐาน</div>
          <div><Radio  value="option1"  name="name" checked={selectedOption==='option1'} onChange={handleOptionChange} /></div>
           <div><Radio  value="option2"  name="name" checked={selectedOption==='option2'} onChange={handleOptionChange} /></div>
            <div><Radio  value="option2"  name="name" checked={selectedOption==='option3'} onChange={handleOptionChange} /></div>
    </div>

    <div className="p-[32px] w-[992px] h-full flex flex-col items-center   ">
        <SectionHeader title="ระบบฐานข้อมูลการสำรวจศักยภาพการกักเก็บคาร์บอนในพื้นที่ป่าไม้" backHref="/"/>
        <div className="w-[928px] h-[896px] pt-[24px] bg-white rounded-xl shadow-xl items-center flex justify-center">
        <LoadMap/>  
        </div>
      
    </div>
    </div>
    
  );
}