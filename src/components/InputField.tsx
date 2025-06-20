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
  inputClassName:string;
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
  value
}: InputFieldProps) {
  return (
    <div className={`relative ${className} `}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        className={` ${inputClassName} w-full h-full    placeholder:text-sm placeholder:font-prompt    
             
            ${
              disabled
                ? "bg-[#DDDDDC] border-[#DDDDDC] placeholder-[#7C7C77] border-2 "
                : error
                ? "border-[#E64341] border-2 placeholder-[#B6B6A8] focus:outline-none"
                : success
                ? "border-[#4FC65F] border-2 placeholder-[#B6B6A8] focus:outline-none"
                : "bg-[#FAFCFE]  border-[#B6B6A8] border-1 placeholder-[#B6B6A8] focus:outline-[#3E3E3C]"
            }
            `}
      />

      {error && !disabled && (
        <p className="text-[#E64341] text-sm absolute bottom left-3">
          {helper}
        </p>
      )}
      {iconSearch && (
        <Icons.Search className="text-[#7C7C77] absolute left-3 top-1/2 -translate-y-1/2 h-[18px] w-[18px] pointer-events-none  " />
      )}
      {iconDown && (
        <Icons.Down className="text-[#7C7C77] absolute right-3 top-1/2 -translate-y-1/2 h-[18px] w-[18px] pointer-events-none" />
      )}
    </div>
  );
}
