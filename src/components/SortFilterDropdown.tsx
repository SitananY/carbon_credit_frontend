'use client';
import { useState } from "react";
import Icons from "@/components/svgs/SvgExports"
import Button from "@/components/Button";
import CheckBox from "@/components/CheckBox";
import ListItem from "@/components/ListItem";
type SortFilterDropdownProps = {
  type: "sort" | "filter";
  options: string[];
  onSelect: (selected: string | string[]) => void;
};

export default function SortFilterDropdown({ type, options, onSelect }: SortFilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isButtonClick, setIsButtonClick] = useState(false);
  const [selected, setSelected] = useState<string | string[]>(type === "sort" ? "" : []);

  const handleSelect = (option: string) => {
    if (type === "sort") {
      setSelected(option);
      onSelect(option);
      setIsOpen(false);
    } else {
      let newSelected = selected as string[];
      if (newSelected.includes(option)) {
        newSelected = newSelected.filter(item => item !== option);
      } else {
        newSelected = [...newSelected, option];
      }
      setSelected(newSelected);
      onSelect(newSelected);
    }
  };

  return (
    <div className="relative inline-block">

      {/* แยกปุ่มตาม type */}
      {type === "sort" ? (
        <Icons.Down
          onClick={() => setIsOpen(!isOpen)}
          className="w-[18px] h-[18px]"
        >
        </Icons.Down>
      ) : (
        <Button
            text="Filter"
            variant="tonal"
           isClick={isButtonClick}
          onClick={() => {setIsOpen(!isOpen) ; setIsButtonClick(!isButtonClick)}}
          className="flex items-center px-4 py-2 rounded-2xl "
          
        >
        <Icons.Filter_list className="w-[18px] h-[18px]"/>
        </Button>
      )}

      {/* แยก dropdown style ตาม type */}
    {isOpen && (
        <div className={`shadow-lg  z-10 absolute top-full right-0 ${type==="sort"?"" :"w-[341px] border border-neutral-700 rounded-xl p-[16px] gap-[10px] bg-white flex flex-col"  }`}>
          {options.map((option, idx) => (
            type === "sort" ? (
              <ListItem 
                key={idx}
                className="h-[32px] w-[203px]"
                textPxGap="pl-[16px]" 
                item={option}
                onClick={() => handleSelect(option)}
                selected={selected === option}
              />
            ) : (
                
                    <div
                        key={idx}
                        className=" w-full h-full flex items-center gap-[10px] font-prompt    bg-white "
                        onClick={() => handleSelect(option)}
                    >
                        <CheckBox isChecked={(selected as string[]).includes(option)} />
                        <span>{option}</span>
                    </div>
                
              
            )
          ))}
        </div>
      )}
    </div>
  );
}
