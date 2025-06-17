'use client'
import Button from "@/components/Button";
import DeleteButton from "@/components/DeleteButton";
import EditButton from "@/components/EditButton";
import IconButton from "@/components/IconButton";
import InputField from "@/components/InputField";
import Label from "@/components/Label";
import ListItem from "@/components/ListItem";
import Radio from "@/components/Radio";
import Switch from "@/components/Switch";
import ViewButton from "@/components/ViewButton";
import { useState } from "react";
import Icons from "@/components/svgs/SvgExports";




export default function ProcessData() {
  const [isSwitchOpen,setSwitch] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>('option1');
  const [isSelected,setSelected] = useState(false);
  const [isClicked,setClicked] = useState(false);
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <main className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 bg-[#F8F8EF]">
      <div className="w-full max-w-md h-64 bg-white shadow-xl rounded-xl shadow-2xl flex items-center justify-center p-4 m-5">
        <div className=" font-mono text-3xl font-bold text-center">
          Process-data
        </div>
      </div>
      
      <div className=" flex  flex-col items-center justify-center  w-full md:w-[50%] bg-white shadow-xl rounded-xl p-2 m-4">
        <p className="font-prompt font-medium text-2xl">LABEL</p>
        <div className="my-2">
            <Label label="Label" size="base"/>
        </div>
        <div className="my-2">
            <Label label="Label" required/>
        </div>
        <div className="my-2">
            <Label label="Label" optional/>
        </div>

      </div>

      <div className="flex flex-row items-center justify-center  w-full md:w-[50%] bg-white shadow-xl rounded-xl p-2 m-4">
        <p className="font-prompt font-medium text-2xl pr-3">ICON BUTTON</p>
        <div className="mx-2 my-1">
          <IconButton >
            <Icons.Add className="w-[24px] h-[24px]"></Icons.Add>
            </IconButton>
        </div>
        <div className="mx-2 my-1">
          <IconButton  outlined>
            <Icons.Add className="w-[24px] h-[24px]"></Icons.Add>
          </IconButton>
        </div>
         <div className="mx-2 my-1">
          <IconButton filled>
            <Icons.Add className="w-[24px] h-[24px]"></Icons.Add>
            </IconButton>
        </div>
         <div className="mx-2 my-1">
          <IconButton disabled>
            <Icons.Add className="w-[24px] h-[24px]"></Icons.Add>
            </IconButton>
        </div>
      </div>
      
       <div className="flex flex-row items-center justify-center  w-full md:w-[50%] bg-white shadow-xl rounded-xl p-2 m-4">
        <p className="font-prompt font-medium text-2xl pr-3">PAGINATION</p>
        <div className="mx-2 my-1">
          <IconButton   size="w-[37px] h-[37px]" > <div className="w-[6px] h-[8px] text-center flex items-center justify-center ">1</div></IconButton>
        </div>
        <div className="mx-2 my-1">
          <IconButton  outlined size="w-[37px] h-[37px]" > <div className="w-[6px] h-[8px] text-center flex items-center justify-center ">1</div></IconButton>
        </div>
         <div className="mx-2 my-1">
          <IconButton  filled size="w-[37px] h-[37px]" > <div className="w-[6px] h-[8px] text-center flex items-center justify-center ">1</div> </IconButton>
        </div>
         <div className="mx-2 my-1">
          <IconButton  disabled size="w-[37px] h-[37px]" > <div className="w-[6px] h-[8px] text-center flex items-center justify-center ">1</div> </IconButton>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center  w-full md:w-[50%] bg-white shadow-xl rounded-xl p-2 m-4 ">
        <p className="font-prompt font-medium text-2xl pr-4">RADIO</p>
        
          <div className="mx-2" >
            <Radio  value="option1"  name="name" checked={selectedOption==='option1'} onChange={handleOptionChange} />
          </div>
          <div className="mx-2" >
            <Radio value="option2"  name="name" checked={selectedOption==='option2'} onChange={handleOptionChange}/>
          </div>
          <div className="mx-2" >
            <Radio disabled value="option3"  name="name" checked={selectedOption==='option3'} onChange={handleOptionChange}/>
          </div>
          
        
      </div>
      
      {/* <p className="font-prompt text-xl font-[400] ">Prompt test</p>
      <p className="font-prompt text-xl  font-[500]">Prompt test</p> */}
      
      <div className="flex flex-col items-center justify-center  w-full md:w-[50%] bg-white shadow-xl rounded-xl p-2 m-4 ">
        <p className="font-prompt font-medium text-2xl ">SWITCH</p>
        <div className="my-2">
          <Switch onClick={()=>setSwitch(!isSwitchOpen)} isOpen={isSwitchOpen} scale="100" />
        </div>
      </div>



      <div className="flex flex-col items-center justify-center  w-full md:w-[50%] bg-white shadow-xl rounded-xl p-2 m-4">
        <p className="font-prompt font-medium text-2xl ">ITEM LIST</p>
          
          <div className="my-2">
            <ListItem item="item" onClick={()=>setSelected(!isSelected)} selected={isSelected} > 
              <ViewButton /> 
              <EditButton />  
              <DeleteButton/>
            </ListItem>
          </div>
          <div className="my-2">
            <ListItem item="item"  selected={true} >
               <ViewButton /> 
              <EditButton />  
              <DeleteButton/>
            </ListItem>
          </div>
          <div className="my-2">
            <ListItem item="item"  disabled={true}>
               <ViewButton /> 
              <EditButton />  
              <DeleteButton/>
            </ListItem>
          </div>
          <div className="my-2">
            <ListItem   />
          </div>
      </div>
      



      <div className="my-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4  md:w-[50%] bg-white shadow-xl rounded-xl p-2 m-4 ">
        <p className=" col-span-full text-center font-prompt font-medium text-2xl ">BUTTON</p>
        
        <Button disabled={false} variant="primary" text="Add" >
          <Icons.Add/>
        </Button>
        <Button disabled={false} variant="secondary" text="Button" />
        <Button disabled={false} variant="tonal" text="Button" />
        <Button disabled={false} variant="confirm" text="Button" />
        <Button disabled={false} variant="delete" text="Button" />
        <Button disabled={false} variant="cancle" text="Button" />
        <Button disabled={true} variant="primary" text="Button" />
      </div>

      <div className="flex flex-col items-center justify-center  w-full md:w-[50%] bg-white shadow-xl rounded-xl p-2 m-4 ">
        <p className="font-prompt font-medium text-2xl ">INPUT FIELD</p>
        
        <div className="m-2">
          <InputField
            placeholder="Placeholder"
            helper="Helper Text"
            error={false}
            success={false}
            disabled={false}
          />
        </div>
        <div className="m-2">
          <InputField
            placeholder="Placeholder"
            helper="Helper Text"
            error={false}
            success={true}
            disabled={false}
          />
        </div>
         <div className="m-2">
          <InputField
            placeholder="Placeholder"
            helper="Helper Text"
            error={true}
            success={false}
            disabled={false}
          />
        </div>
         <div className="m-2 my-4">
          <InputField
            placeholder="Placeholder"
            helper="Helper Text"
            error={true}
            success={false}
            disabled={true}
          />
        </div>
          <div className="">
          <InputField
            placeholder="Placeholder"
            helper="Helper Text"
            error={false}
            success={false}
            disabled={false}
            icon={false}
            
          />
        </div>
      </div>
    </main>
  );
}
