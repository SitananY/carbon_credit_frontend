import Image from "next/image";
import Icons from "./svgs/SvgExports";

type InputFieldProps = {
  placeholder: string;
  error?: boolean;
  helper: string;
  success?: boolean;
  disabled?: boolean;
  icon?: boolean;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputField({
  placeholder,
  error = false,
  helper,
  success = false,
  disabled = false,
  icon = true,
  className = "h-[44px] w-[245px] rounded-xl",
  onChange,
  value
}: InputFieldProps) {
  return (
    <div className="relative h-[44px] w-[245px] ">
      <input
        type="text"
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        className={` ${className} pl-[35px]    placeholder:text-sm placeholder:font-prompt    
             
            ${
              disabled
                ? "bg-[#DDDDDC] border-[#DDDDDC] placeholder-[#7C7C77] border-2 "
                : error
                ? "border-[#E64341] border-2 placeholder-[#B6B6A8] focus:outline-none"
                : success
                ? "border-[#4FC65F] border-2 placeholder-[#B6B6A8] focus:outline-none"
                : "bg-[#FAFCFE]  border-[#B6B6A8] border-2 placeholder-[#B6B6A8] focus:outline-[#3E3E3C]"
            }
            `}
      />

      {error && !disabled && (
        <p className="text-[#E64341] text-sm absolute bottom left-3">
          {helper}
        </p>
      )}
      {icon && (
        <Icons.Search className="text-[#7C7C77] absolute left-3 top-1/2 -translate-y-1/2 h-[18px] w-[18px] pointer-events-none  " />
      )}
      {icon && (
        <Icons.Down className="text-[#7C7C77] absolute right-3 top-1/2 -translate-y-1/2 h-[18px] w-[18px] pointer-events-none" />
      )}
    </div>
  );
}
