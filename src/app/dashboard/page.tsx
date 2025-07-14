'use client'
import CheckBox from "@/components/CheckBox";
import InputField from "@/components/InputField";
import SectionBelowHeader from "@/components/SectionBelowHeader";
import SectionHeader from "@/components/SectionHeader";
import Icons from "@/components/svgs/SvgExports";
import { useState } from "react";

export default function Dashboard() {
  const topics = [
    "ศักยภาพการกักเก็บคาร์บอน",
    "พื้นที่ป่า",
    "สัดส่วนพันธุ์ไม้",
    "จังหวัดที่มีพื้นที่ป่าเยอะที่สุด",
    "จำนวนต้นไม้ในพื้นที่ป่า",
  ]

  type CheckedStates = {
    [key: string]: boolean
  }

  const [checkedStates, setCheckedStates] = useState<CheckedStates>(
    topics.reduce((acc, topic) => ({ ...acc, [topic]: false }), {})
  )

  const [selectAll, setSelectAll] = useState(false)

  const toggleSelectAll = () => {
    const newState = !selectAll
    const newCheckedStates = topics.reduce(
      (acc, topic) => ({ ...acc, [topic]: newState }),
      {} as CheckedStates
    )
    setSelectAll(newState)
    setCheckedStates(newCheckedStates)
  }

  const toggleTopic = (topic: string) => {
    const newCheckedStates = {
      ...checkedStates,
      [topic]: !checkedStates[topic],
    }
    setCheckedStates(newCheckedStates)

    const allChecked = Object.values(newCheckedStates).every(Boolean)
    setSelectAll(allChecked)
  }
  return (
    <div className=" flex flex-col  justify-center">
        <div className="w-full  flex flex-col  p-[32px] ">
            
            <SectionHeader title="ระบบฐานข้อมูลการสำรวจศักยภาพการกักเก็บคาร์บอนในพื้นที่ป่าไม้" backHref dashBoard />
            
            <div className="w-full h-full   flex flex-row gap-[30px] font-prompt font-medium text-[#27272A] text-xl pt-[24px] ">
                    <div className="w-full h-full   flex flex-col gap-[30px] font-prompt font-medium text-[#27272A] text-xl ">
                      <div className="w-full h-[166px]  flex flex-row gap-[40px]">

                          <div className="w-full h-[auto]  bg-neutral-300 border border-neutral-700 rounded-xl px-[32px] pt-[4px] pb-[16px] flex flex-col ">
                            <div className="h-[54px] w-full flex items-center " >ศักยภาพการกักเก็บคาร์บอน</div>
                            <div className="h-[54px] w-full flex flex-col items-center">
                              <div className="h-[54px] w-[auto] flex flex-col relative  font-medium justify-center font-prompt text-[40px] text-primary-500 " >
                              1,270,221,208
                              <div className="h-[54px] w-[auto] flex items-center font-medium absolute top-10 right-0 font-prompt text-[28px] text-cancel-500" >tCO₂e</div>
                            </div>
                            </div>

                          </div>
                          <div className="w-full h-[auto]  bg-neutral-300 border border-neutral-700 rounded-xl px-[32px] pt-[4px] pb-[16px] flex flex-col ">
                            <div className="h-[54px] w-full flex items-center " >พื้นที่ป่า</div>
                            <div className="h-[54px] w-full flex flex-col items-center">
                              <div className="h-[54px] w-[auto] flex flex-col relative  font-medium justify-center font-prompt text-[40px] text-primary-500 " >
                              106,889,453
                              <div className="h-[54px] w-[auto] flex items-center font-medium absolute top-10 right-0 font-prompt text-[28px] text-cancel-500" >ไร่</div>
                            </div>
                            </div>

                          </div>
                          
                      </div>
                      <div className="w-full h-full  flex flex-row gap-[30px]">
                          
                          <div className="w-full h-full bg-neutral-300 border border-neutral-700 rounded-xl  px-[32px] pt-[4px] pb-[16px]">
                            <div  className="h-[54px] w-full justify-center flex  flex-col">
                              สัดส่วนพันธุ์ไม้
                            </div>
                            <div className="w-full h-full flex justify-center items-center">
                            <Icons.SquareChart className="w-[275px] h-[132px]" /> 

                            </div>
                          </div>

                          <div className="w-full h-full bg-neutral-300 border border-neutral-700 rounded-xl  px-[32px] pt-[4px] pb-[16px]">
                            <div  className="h-[54px] w-full justify-center flex  flex-col">
                            จังหวัดที่มีพื้นที่ป่าเยอะที่สุด 
                            </div>
                            <div className="w-full h-full flex justify-center items-center">
                            <Icons.BarHorizoneChart className="w-[275px] h-[132px] "/>
                            </div>
                          </div>


                      </div>

                      <div className="w-full h-[auto] bg-neutral-300 border border-neutral-700 rounded-xl flex px-[32px] pt-[4px] pb-[16px] flex-col">
                        <div className="h-[54px] w-full flex items-center " >จำนวนต้นไม้ในพื้นที่ป่า   </div>  
                        <div className="w-full h-full flex justify-center items-center">
                            <Icons.BarLineChart className="w-[645px] h-[339px]"/>
                        </div>
                        
                      </div>
                    </div>

                    <div className=" w-[283px] h-full  flex flex-col gap-[32px] ">
                          <div className="w-[283px] h-[260px]  rounded-xl border border-neutral-700 bg-white-v1 px-[24px] py-[16px] flex flex-col  gap-[10px] text-base  ">
                                    <div>หัวข้อที่ต้องการ export</div>
                                    <div className="flex flex-row space-x-4">
                                      <CheckBox isChecked={selectAll} onClick={toggleSelectAll} />
                                      <div>เลือกทั้งหมด</div>
                                    </div>
                                    
                                    
                                    {topics.map((topic) => (
                                      <div key={topic} className="flex items-center space-x-4">
                                        <CheckBox
                                          isChecked={checkedStates[topic]}
                                          onClick={() => toggleTopic(topic)}
                                        />
                                        <div>{topic}</div>
                                    </div> ))}
                                   
                          </div>
                          <div className="w-[283px] h-[560px] flex flex-col  gap-[15px]  rounded-xl border border-neutral-700 bg-white-v1 px-[24px] py-[16px] ">
                                    <div className="flex flex-col gap-[5px] text-base">
                                    จังหวัด
                                    <InputField  iconSearch iconDown placeholder="เลือกจังหวัด" className="w-full h-[40px] " inputClassName="rounded-2xl pl-[35px]"/>    
                                    </div>
                                    
                                    <div className="flex flex-col gap-[5px] text-base">
                                    อำเภอ
                                    <InputField iconSearch iconDown placeholder="เลือกอำเภอ" className="w-full h-[40px] " inputClassName="rounded-2xl pl-[35px]"/>    
                                    </div>

                                    <div className="flex flex-col gap-[5px] text-base">
                                    ตำบล
                                    <InputField iconSearch iconDown placeholder="เลือกตำบล" className="w-full h-[40px] " inputClassName="rounded-2xl pl-[35px]"/>    
                                    </div>

                                    <div className="flex flex-col gap-[5px] text-base">
                                    ประเภทป่า
                                    <InputField iconSearch iconDown placeholder="เลือกประเภท" className="w-full h-[40px] " inputClassName="rounded-2xl pl-[35px]"/>    
                                    </div>
                                    
                          </div>
                          
                    </div>
            </div>
            
        </div>
        
        </div>
  );
}
