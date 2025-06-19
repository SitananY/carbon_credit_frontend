import Button from "@/components/Button";
import InputField from "@/components/InputField";
import ViewDetailDataItem from "./ViewDetailDataItem";

export default function ViewDetailDataCard(){
    return(
        <div>
            <div className="mb-[24px] rounded-lg  bg-[#B6B6A8] h-[56px] max-lg:h-[112px] px-[32px] flex flex-row max-lg:flex-col items-center justify-center gap-[66px] max-lg:gap-[20px]">
            <div className=" w-[434px] max-lg:w-[380px] h-[32px] flex flex-row justify-between items-center font-prompt text-base ">
            <div className="w-[77px]  h-[32px] items-center flex">ลำดับแปลง</div>
            <InputField className=" w-[232px] h-[34px] rounded-lg "/>
            </div>
            <div className=" w-[434px] max-lg:w-[380px] h-[32px] flex flex-row justify-between items-center font-prompt text-base ">
            <div className="w-[77px] h-[32px] items-center flex">ชื่อแปลง</div>
            <InputField className=" w-[272px] h-[34px] rounded-lg "/>
            </div>
        </div>

        <div className="mb-[24px] bg-[#B6B6A8] h-[414px] max-lg:h-[1000px] rounded-lg px-[32px] flex flex-row max-lg:flex-col items-center justify-center gap-[66px]">
            <div className=" w-[434px] h-[382px] flex flex-col gap-[18px] ">
                <ViewDetailDataItem text="รูปแบบแปลงสำรวจ"/>
                <ViewDetailDataItem text="ขนาดแปลง"/>
                <ViewDetailDataItem text="ขนาดแปลง"/>
                <ViewDetailDataItem text="ขนาดแปลง"/>
                <ViewDetailDataItem text="ขนาดแปลง"/>
                <ViewDetailDataItem text="ขนาดแปลง"/>
                <ViewDetailDataItem text="ขนาดแปลง"/>
                <ViewDetailDataItem text="ขนาดแปลง"/>

            </div>

            <div className=" w-[434px] h-[382px] flex flex-col gap-[18px] ">
                <ViewDetailDataItem text="รูปแบบแปลงสำรวจ"/>
                <ViewDetailDataItem text="ขนาดแปลง"/>
                <ViewDetailDataItem text="ขนาดแปลง"/>
                <ViewDetailDataItem text="ขนาดแปลง"/>
                <ViewDetailDataItem text="ขนาดแปลง"/>
                <ViewDetailDataItem text="ขนาดแปลง"/>
                <ViewDetailDataItem text="ขนาดแปลง"/>
                <ViewDetailDataItem text="ขนาดแปลง"/>
            </div>


        </div>

        <div className="mb-[24px] w-full h-[40px] font-prompt text-base flex flex-row justify-between items-center px-[25]">
            <div className="" >ผู้บันทึกข้อมูล user1 วันที่ 12 มิถุนายน 2568 เวลา 9:18 น.</div>
            <div className="flex flex-row justify-between items-center gap-8 max-md:gap-5 ">
                    <Button text="ยืนยัน" variant="confirm"  className="w-[85px] h-[40px] rounded-lg"/>
                    <Button text="ยกเลิก" variant="cancle" className="w-[85px] h-[40px] rounded-lg"/>
            </div>
        </div>
        </div>

    );
}