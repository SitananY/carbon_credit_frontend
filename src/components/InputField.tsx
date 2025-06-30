import Image from "next/image";
import Icons from "./svgs/SvgExports";

type InputFieldProps = {
  placeholder?: string;
  error?: boolean;
  helper?: string;
  success?: boolean;
  disabled?: boolean;
  iconSearch?: boolean;
  iconDown?: boolean;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputClassName?:string;
  leftItem?:React.ReactNode,
  rightItem?:React.ReactNode,
  canPoint?:string;
  type?:string,
};

export default function InputField({
  placeholder,
  error = false,
  helper,
  success = false,
  disabled = false,
  iconSearch = false,
  iconDown = false,
  className = "h-[44px] w-[245px]  ",
  inputClassName = "rounded-xl pl-[35px]",
  onChange,
  value,
  leftItem,
  rightItem,
  canPoint="pointer-events-none",
  type="text",
}: InputFieldProps) {
  return (
    <div className={`relative ${className} `}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        className={` ${inputClassName} w-full h-full    placeholder:text-sm placeholder:font-prompt    
             
            ${
              disabled
                ? "bg-cancel-300 border-cancel-300 placeholder-cencel-500 border-2 "
                : error
                ? "border-error-500 border-2 placeholder-neutral-700 focus:outline-none"
                : success
                ? "border-success-500 border-2 placeholder-neutral-700 focus:outline-none"
                : "bg-neutral-300  border-neutral-700 border-1 placeholder-neutral-700 focus:outline-cancel-700"
            }
            `}
      />

      {error && !disabled && (
        <p className="text-error-500 text-sm absolute bottom left-3">
          {helper}
        </p>
      )}
      {iconSearch && (
        <Icons.Search className={`text-cencel-500 absolute left-3 top-1/2 -translate-y-1/2 h-[18px] w-[18px] ${canPoint}  `} />
      )}
      {leftItem && (
        <div className={`text-cencel-500 absolute left-3 top-1/2 -translate-y-1/2 h-[18px] w-[18px] ${canPoint}  `} >{leftItem}</div>
      )}
      {iconDown && (
        <Icons.Down className={`text-cencel-500 absolute right-3 top-1/2 -translate-y-1/2 h-[18px] w-[18px] ${canPoint}  `} />
      )}
      {rightItem && (
        <div className={`text-cencel-500 absolute right-3 top-1/2 -translate-y-1/2 h-[18px] w-[18px] ${canPoint}  `} >{rightItem}</div>
      )}      
    </div>
  );
}
