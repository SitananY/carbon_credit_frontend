import Image from "next/image";
import { ForestData, LandData } from "../../../../types";

 type ViewDataCardProps ={
    data:ForestData|LandData|null;
 }


export default function ViewDataCard({data}:ViewDataCardProps){
    if(!data) return null;    
    const isForest = "tree_type" in data ;
    
        return(
            <div className="w-full h-[504px] bg-[#B6B6A8] rounded-2xl px-[20px] py-[30px] gap-[40px] flex flex-row font-prompt ">
              <div className="w-full h-[444px]  pt-[36px] pb-[24px] flex flex-col items-center   ">
                  <div>
                      <Image src="/photo_placeholder.png" alt="photo_placeholder" width={230} height={248}/>
                  </div>
                  <div className="text-sm pt-[12px]">
                       <div>ข้อมูลล่าสุดโดยหน่วยงาน a</div>
                       <div>เมื่อวันที่ 6 ม.ค. 2568 เวลา 13:27 น.</div>
                  </div>
              </div>
              
              <div className="w-full h-[444px]  grid grid-cols-2  gap-[12px]  ">
                  <div className="w-full h-[444px]  font-prompt  text-base font-medium flex flex-col gap-[4px]">
                        <div className="w-full h-[32px]  flex items-center ">{isForest ? "ลำดับพรรณไม้" : "ลำดับแปลง" } </div>
                        <div className="w-full h-[32px]  flex items-center ">{isForest ? "ชื่อพรรณไม้" : "ชื่อแปลง" } </div>
                        <div className="w-full h-[32px]  flex items-center ">{isForest ? "ชนิดพรรณไม้" : "รูปแบบแปลง" }</div>
                        <div className="w-full h-[32px]  flex items-center ">{isForest ? "ชนิดพรรณไม้" : "รูปแบบแปลง" }</div>
                        <div className="w-full h-[32px]  flex items-center ">{isForest ? "ชนิดพรรณไม้" : "รูปแบบแปลง" }</div>
                        <div className="w-full h-[32px]  flex items-center ">{isForest ? "ชนิดพรรณไม้" : "รูปแบบแปลง" }</div>
                        <div className="w-full h-[32px]  flex items-center ">{isForest ? "ชนิดพรรณไม้" : "รูปแบบแปลง" }</div>
                        <div className="w-full h-[32px]  flex items-center ">{isForest ? "ชนิดพรรณไม้" : "รูปแบบแปลง" }</div>
                        <div className="w-full h-[32px]  flex items-center ">{isForest ? "ชนิดพรรณไม้" : "รูปแบบแปลง" }</div>
                        <div className="w-full h-[32px]  flex items-center ">{isForest ? "ชนิดพรรณไม้" : "รูปแบบแปลง" }</div>
                        <div className="w-full h-[32px]  flex items-center ">{isForest ? "ชนิดพรรณไม้" : "รูปแบบแปลง" }</div>
                  
                  </div>

                  <div className="w-full h-[444px]  font-prompt text-base flex flex-col gap-[4px]">
                        <div className="w-full h-[32px]  flex items-center">{data?.number}</div>
                        <div className="w-full h-[32px]  flex items-center">{data?.name}</div>
                        <div className="w-full h-[32px]  flex items-center">{isForest ? data?.tree_type : data?.land_type }</div>
                        <div className="w-full h-[32px]  flex items-center">{isForest ? data?.tree_type : data?.land_type }</div>
                        <div className="w-full h-[32px]  flex items-center">{isForest ? data?.tree_type : data?.land_type }</div>
                        <div className="w-full h-[32px]  flex items-center">{isForest ? data?.tree_type : data?.land_type }</div>
                        <div className="w-full h-[32px]  flex items-center">{isForest ? data?.tree_type : data?.land_type }</div>
                        <div className="w-full h-[32px]  flex items-center">{isForest ? data?.tree_type : data?.land_type }</div>
                        <div className="w-full h-[32px]  flex items-center">{isForest ? data?.tree_type : data?.land_type }</div>
                        <div className="w-full h-[32px]  flex items-center">{isForest ? data?.tree_type : data?.land_type }</div>
                        <div className="w-full h-[32px]  flex items-center">{isForest ? data?.tree_type : data?.land_type }</div>
                  </div>
              </div>

        </div>

        );
}