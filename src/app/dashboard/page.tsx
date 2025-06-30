import SectionBelowHeader from "@/components/SectionBelowHeader";
import SectionHeader from "@/components/SectionHeader";


export default function Dashboard() {
  return (
    <div className=" flex flex-col  justify-center">
        <div className="w-full  flex flex-col  py-[32px] xl:px-[148px] px-[32px]">
            
            <SectionHeader title="แสดงผล Dashboard" backHref />
            
            <div className="py-[24px]"><SectionBelowHeader dashboard /> </div>

            <div className="w-full h-full   flex flex-col gap-[30px] font-prompt font-medium text-[#27272A] text-xl">
                  <div className="w-full h-[200px]  flex flex-row gap-[40px]">
                      <div className="w-full h-full bg-[#DDDDDC] pl-[16px]"><div className="h-[54px] w-[auto] flex items-center " >ศักยภาพการกักเก็บคาร์บอน</div></div>
                      <div className="w-full h-full bg-[#DDDDDC] pl-[16px]"><div className="h-[54px] w-[auto] flex items-center " >พื้นที่ป่า</div></div>
                  </div>
                  <div className="w-full h-[286px] bg-[#DDDDDC] flex pl-[16px] ">
                    <div className="h-[54px] w-[auto] flex items-center " >แนวโน้มปริมาณการกักเก็บคาร์บอนตามปี</div>
                  </div>
                  <div className="w-full h-[286px] bg-[#DDDDDC] flex pl-[16px]">
                    <div className="h-[54px] w-[auto] flex items-center " >ปริมาณการกักเก็บคาร์บอนตามระบบนิเวศ</div>  
                  </div>
            </div>
        </div>
        
        </div>
  );
}
