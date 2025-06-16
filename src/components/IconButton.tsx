import Image from "next/image";

import Icons from "./svgs/SvgExports";
import { Children } from "react";

type IconButtonProps = {
  // icon: keyof typeof Icons;
  filled?: boolean;
  outlined?: boolean;
  disabled?: boolean;
  isClicked?: boolean;
  onClick?: () => void;
  size?: string;
  iconSize?: string;
  children?: React.ReactNode;
};

export default function IconButton({
  // icon,
  filled,
  outlined,
  disabled,
  onClick,
  isClicked,
  size="w-[44px] h-[44px]",
  iconSize="w-[24px] h-[24px]" ,
  children
}: IconButtonProps) {
  // const IconComponent = Icons[icon];
  return (
    <div onClick={onClick} className={` `}>
      <div
        className={` ${size}  flex items-center justify-center rounded-full active:scale-95  transition-all duration-100 ease-in-out 
             ${
               disabled
                 ? null
                 : filled
                 ? "border-[2.5px] bg-[#397832]  hover:border-[#10490A] border-[#397832] hover:bg-[#10490A] cursor-pointer "
                 : outlined
                 ? " border-[2.5px] bg-[#FAFCFE] border-[#397832] hover:bg-[#7CA777] cursor-pointer "
                 : "hover:border-[2.5px]  hover:border-[#7CA777] hover:bg-[#7CA777] cursor-pointer"
             }   
             `}
      >
        {/* {IconComponent && (
          <IconComponent
            className={` ${iconSize} pointer-events-none
            ${
              disabled
                ? "text-[#DDDDDC]"
                : filled
                ? "text-[#FAFCFE]"
                : outlined
                ? " text-[#397832] "
                : "text-[#397832]"
            }
            `}
          />
        )} */}

        <div className={`  pointer-events-none text-sm font-prompt  text-center flex items-center justify-center
            ${
              disabled
                ? "text-[#DDDDDC]"
                : filled
                ? "text-[#FAFCFE]"
                : outlined
                ? " text-[#397832] "
                : "text-[#397832]"
            }
            `}>{children} </div> 
      </div>
    </div>
  );
}
