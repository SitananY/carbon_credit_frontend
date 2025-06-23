import Button from "@/components/Button";
import InputField from "@/components/InputField";
import ListItem from "@/components/ListItem";
import SectionBelowHeader from "@/components/SectionBelowHeader";
import SectionHeader from "@/components/SectionHeader";
import Icons from "@/components/svgs/SvgExports";
import ProcessDataCard from "./components/processDataCard";


export default function ProcessData() {
  

  return (
     <div className=" flex flex-col  justify-center">
            <div className="w-full h-full  flex flex-col  py-[32px] xl:px-[148px] px-[32px]">
                
                <SectionHeader title="ประมวลผลข้อมูล" backHref="/" />
                
                
    
                <div className="w-full h-[30%] px-[32px] my-[24px] py-[16px] gap-[16px] bg-[#B6B6A8] rounded-2xl flex flex-col  font-prompt text-[#27272A]">
                      <div className="flex flex-row justify-between items-center ">
                          <div className="text-xl font-medium">สูตรการคำนวณ</div>
                          <Button text="เพิ่ม" className="w-[74px] h-[40px]  rounded-lg" ><Icons.Add/></Button>
                      </div>
                      <div className="h-[69px] w-full text-sm flex flex-col">
                          ชื่อข้อมูล
                          <ListItem className="w-full  h-[48px]" item="ชื่อสูตร"   textPxGap="pl-[12px]"/>
                      </div>
                      <div className="h-[69px] w-full text-sm flex flex-col">
                          สูตรการกักเก็บคาร์บอน
                          <InputField placeholder="สูตรกักเก็บคาร์บอน" className="w-full h-[48px]" inputClassName="pl-[10px] rounded-xl"/>
                      </div>
                </div>

                <div className="w-full h-[60%]  ">
                        <ProcessDataCard />
                </div>
            </div>
            
            </div>
  );
}
