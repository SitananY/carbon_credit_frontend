type RadioProps = {
  name: string;
  disabled?: boolean;
  label?: string;
  checked: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  scale?:string;
};

export default function Radio({
  value,
  name,
  disabled = false,
  label,
  checked,
  onChange,
  scale="100"  
}: RadioProps) {
  return (
    <label className={` flex items-center justify-center scale-${scale} `}>
      <input
        checked={checked}
        value={value}
        type="radio"
        name={name}
        onChange={onChange}
        disabled={disabled}
        className={` bg-[#FAFCFE] relative w-[32px] h-[32px]   border-2 appearance-none rounded-full 
            
           ${disabled ? "bg-[#FAFCFE] border-[#DDDDDC] " : "cursor-pointer"} 

            ${checked ? " border-[#F6E96B] " : " border-[#7C7C77] "}

            before:content-['']
            before:block
            before:w-[20px] before:h-[20px]
            before:rounded-full
            before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2
            before:transition-transform before:duration-200 before:ease-in-out 
            ${
              checked
                ? "before:bg-[#F6E96B] before:scale-100"
                : "before:bg-transparent before:scale-0"
            }
              
            transition-all duration-100 ease-linear
            
            `}
      ></input>
      <p className="font-prompt pl-1">{label}</p>
    </label>
  );
}
