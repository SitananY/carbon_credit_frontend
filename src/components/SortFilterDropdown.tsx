"use client";
import { useEffect, useState } from "react";
import Icons from "@/components/svgs/SvgExports";
import Button from "@/components/Button";
import CheckBox from "@/components/CheckBox";
import ListItem from "@/components/ListItem";

type SortFilterDropdownProps = {
  type: "sort" | "filter";
  options?: string[];
  onSelect: (selected: string | string[]) => void;
  resetSort?: boolean;
};

export default function SortFilterDropdown({ type, options, onSelect, resetSort }: SortFilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isButtonClick, setIsButtonClick] = useState(false);
  const [selected, setSelected] = useState<string | string[]>(type === "sort" ? "" : []);

  useEffect(() => {
    if (resetSort) {
      setSelected("");
    }
  }, [resetSort]);

  const handleSelect = (option: string) => {
    if (type === "sort") {
      setSelected(option);
      onSelect(option);
      setIsOpen(false);
    } else {
      let currentSelected = Array.isArray(selected) ? [...selected] : [];
      if (currentSelected.includes(option)) {
        currentSelected = currentSelected.filter(item => item !== option);
      } else {
        currentSelected.push(option);
      }
      setSelected(currentSelected);
      onSelect(currentSelected);
    }
  };

  const sortOptions = [
    { label: "เรียงจากน้อยไปมาก", icon: <Icons.Arrow_upward className="w-[18px] h-[18px]" /> },
    { label: "เรียงจากมากไปน้อย", icon: <Icons.Arrow_downward className="w-[18px] h-[18px]" /> },
  ];

  if (!options && type === "filter") return null;

  return (
    <div className="relative inline-block">
      {type === "sort" ? (
        <Icons.Down
          onClick={() => setIsOpen(!isOpen)}
          className="w-[18px] h-[18px] cursor-pointer"
        />
      ) : (
        <Button
          text="Filter"
          variant="tonal"
          isClick={isButtonClick}
          onClick={() => {
            setIsOpen(!isOpen);
            setIsButtonClick(!isButtonClick);
          }}
          className="flex items-center px-4 py-2 rounded-2xl"
        >
          <Icons.Filter_list className="w-[18px] h-[18px]" />
        </Button>
      )}

      {isOpen && (
        <div
          className={`shadow-lg z-10 absolute top-full right-0 ${
            type === "sort"
              ? ""
              : "w-[341px] border border-neutral-700 rounded-xl p-[16px] gap-[10px] bg-white flex flex-col"
          }`}
        >
          {type === "sort"
            ? sortOptions.map((opt, idx) => (
                <ListItem
                  key={idx}
                  className="h-[46px] w-[203px]"
                  textPxGap="pl-[16px]"
                  onClick={() => handleSelect(opt.label)}
                  selected={selected === opt.label}
                >
                  <div className="flex items-center gap-5">
                    {opt.icon}
                    {opt.label}
                  </div>
                </ListItem>
              ))
            : options!.map((option, idx) => (
                <div
                  key={idx}
                  className="w-full h-full flex items-center gap-[10px] font-prompt bg-white cursor-pointer"
                  onClick={() => handleSelect(option)}
                >
                  <CheckBox isChecked={(selected as string[]).includes(option)} />
                  <span>{option}</span>
                </div>
              ))}
        </div>
      )}
    </div>
  );
}
