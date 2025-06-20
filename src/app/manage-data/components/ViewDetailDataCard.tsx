import Button from "@/components/Button";
import InputField from "@/components/InputField";
import ViewDetailDataItem from "./ViewDetailDataItem";
import { ForestData, LandData } from "../../../../types";


type ViewDetailDataCardProps = {
    data: ForestData | LandData;
    isForest:boolean
}

export default function ViewDetailDataCard({ data , isForest}: ViewDetailDataCardProps) {
  
  const entries = data ? Object.entries(data) : []; //แปลง object ให้กลายเป็น array คู่ [key,value]
  const midpoint = Math.ceil(entries.length / 2);
  const leftItems = entries.slice(0, midpoint);
  const rightItems = entries.slice(midpoint);
  
  return (
    <div>
      {/* กล่องบน */}
      <div className="mb-6 rounded-lg bg-[#B6B6A8] h-[56px] max-lg:h-[112px]  px-8 flex flex-row max-lg:flex-col items-center justify-center gap-[66px] max-lg:gap-5">
        <div className="w-[43%] max-lg:w-[90%] h-[32px] flex flex-row items-center font-prompt text-base">
            <ViewDetailDataItem key={0} text={isForest ?"ลำดับพรรณไม้":"ลำดับแปลง"} defaultValue={String(data?.number ?? "")} />
        </div>

        <div className="w-[43%] max-lg:w-[90%] h-[32px] flex flex-row items-center font-prompt text-base">
            <ViewDetailDataItem key={1} text={isForest ?"ชื่อพรรณไม้":"ชื่อแปลง"} defaultValue={data?.name ?? ""}  textClass="w-[40%]" boxClass="w-[60%]"/>
        </div>
      </div>

      {/* กล่องกลาง */}
      <div className="mb-6 bg-[#B6B6A8] w-full h-auto max-lg:h-auto rounded-lg px-[32px] py-[16px] flex flex-row max-lg:flex-col max-lg:items-center justify-center max-lg:gap-[32px] gap-[66px]">
        <div className="w-[43%] max-lg:w-[90%] flex flex-col gap-4">
          {leftItems.map(([key, value], index) => (
            <ViewDetailDataItem key={index} text={key} defaultValue={String(value ?? "")} />
          ))}
            <ViewDetailDataItem key={901} text={isForest ?"ลำดับพรรณไม้":"ลำดับแปลง"} defaultValue={String(data?.number ?? "")} />
            <ViewDetailDataItem key={902} text={isForest ?"ลำดับพรรณไม้":"ลำดับแปลง"} defaultValue={String(data?.number ?? "")} />
            <ViewDetailDataItem key={905} text={isForest ?"ลำดับพรรณไม้":"ลำดับแปลง"} defaultValue={String(data?.number ?? "")} />
        
        </div>
        <div className="w-[43%] max-lg:w-[90%] flex flex-col gap-4 ">
          {rightItems.map(([key, value], index) => (
            <ViewDetailDataItem key={index + midpoint} text={key} defaultValue={String(value ?? "")} />
          ))}
            <ViewDetailDataItem key={903} text={isForest ?"ลำดับพรรณไม้":"ลำดับแปลง"} defaultValue={String(data?.number ?? "")} />
            <ViewDetailDataItem key={904} text={isForest ?"ลำดับพรรณไม้":"ลำดับแปลง"} defaultValue={String(data?.number ?? "")} />
            <ViewDetailDataItem key={906} text={isForest ?"ลำดับพรรณไม้":"ลำดับแปลง"} defaultValue={String(data?.number ?? "")} />
            <ViewDetailDataItem key={907} text={isForest ?"ลำดับพรรณไม้":"ลำดับแปลง"} defaultValue={String(data?.number ?? "")} />

        </div>
      </div>

      {/* กล่องล่าง */}
      <div className="mb-6  w-full h-[40px] font-prompt text-base flex flex-row justify-between items-center ">
        <div>ผู้บันทึกข้อมูล user1 วันที่ 12 มิถุนายน 2568 เวลา 9:18 น.</div>
        <div className="flex flex-row justify-between items-center gap-8 max-md:gap-5">
          <Button text="ยืนยัน" variant="confirm" className="w-[85px] h-[40px] rounded-lg" />
          <Button text="ยกเลิก" variant="cancle" className="w-[85px] h-[40px] rounded-lg" />
        </div>
      </div>
    </div>
  );
}
