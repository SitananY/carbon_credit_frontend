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
      <div className="w-full max-w-md h-64 bg-white rounded-xl shadow-2xl flex items-center justify-center p-4 m-5">
        <div className=" font-mono text-3xl font-bold text-center">
          Process-data
        </div>
      </div>
      
      <div className=" flex  flex-col">
        <div className="my-2">
            <Label label="Label" />
        </div>
        <div className="my-2">
            <Label label="Label" required/>
        </div>
        <div className="my-2">
            <Label label="Label" optional/>
        </div>

      </div>

      <div className="flex flex-row ">
        <div className="mx-2 my-1">
          <IconButton icon="Add"   />
        </div>
        <div className="mx-2 my-1">
          <IconButton icon="Add" disabled />
        </div>
         <div className="mx-2 my-1">
          <IconButton icon="Add" filled/>
        </div>
         <div className="mx-2 my-1">
          <IconButton icon="Add" outlined/>
        </div>
      </div>

      <div className="flex flex-row ">
        
          <div className="mx-2" >
            <Radio  value="option1" name="name" checked={selectedOption==='option1'} onChange={handleOptionChange}/>
          </div>
          <div className="mx-2" >
                       <Radio value="option2"  name="name" checked={selectedOption==='option2'} onChange={handleOptionChange}/>
          </div>
          <div className="mx-2" >
            <Radio disabled value="option3" name="name" checked={selectedOption==='option3'} onChange={handleOptionChange}/>
          </div>
          
        
      </div>
      
      <p className="font-prompt text-xl font-[400] ">Prompt test</p>
      <p className="font-prompt text-xl  font-[500]">Prompt test</p>
      
      <div className="flex flex-col ">
        <div className="my-2">
          <Switch onClick={()=>setSwitch(!isSwitchOpen)} isOpen={isSwitchOpen}  />
        </div>
      </div>



      <div className="flex flex-col ">
          <div className="my-2">
            <ListItem item="item" onClick={()=>setSelected(!isSelected)} selected={isSelected}> 
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
      



      <div className="my-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        <Button disabled={false} variant="primary" text="Add" className="w-[80px] h-[40px] rounded-xl">
          <Icons.Add/>
        </Button>
        <Button disabled={false} variant="secondary" text="Button" />
        <Button disabled={false} variant="tonal" text="Button" />
        <Button disabled={false} variant="confirm" text="Button" />
        <Button disabled={false} variant="delete" text="Button" />
        <Button disabled={false} variant="cancle" text="Button" />
        <Button disabled={true} variant="primary" text="Button" />
      </div>

      <div className="flex flex-col items-center  justify-center ">
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
            className="h-[40px] w-[300px]"
          />
        </div>
      </div>
    </main>
  );
}
