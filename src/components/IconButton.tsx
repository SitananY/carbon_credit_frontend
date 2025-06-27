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
  rounded?:string
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
  children,
  rounded="rounded-full"
}: IconButtonProps) {
  // const IconComponent = Icons[icon];
  return (
    <div onClick={onClick} className={` `}>
      <div
        className={` ${size}  flex items-center justify-center ${rounded} active:scale-95  transition-all duration-100 ease-in-out 
             ${
               disabled
                 ? null
                 : filled
                 ? "border-[2.5px] bg-primary-500  hover:border-primary-700 border-primary-500 hover:bg-primary-700 cursor-pointer "
                 : outlined
                 ? " border-[2.5px] bg-neutral-300 border-primary-500 hover:bg-primary-300 cursor-pointer "
                 : "hover:border-[2.5px]  hover:border-primary-300 hover:bg-primary-300 cursor-pointer"
             }   
             `}
      >
      

        <div className={`  pointer-events-none text-sm font-prompt  text-center flex items-center justify-center
            ${
              disabled
                ? "text-cancel-300"
                : filled
                ? "text-neutral-300"
                : outlined
                ? " text-primary-500"
                : "text-primary-500"
            }
            `}>{children} </div> 
      </div>
    </div>
  );
}
