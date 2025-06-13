"use client";

const getVariantStyles = (
  variant: NonNullable<ButtonProps["variant"]>,
  disabled?: boolean
) => {
  const styles: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary: disabled
      ? "bg-[#DDDDDC] text-[#3E3E3C]"
      : "bg-[#397832] text-[#FAFCFE] hover:bg-[#10490A]",
    secondary: disabled
      ? "border-2 bg-[#DDDDDC] border-[#3E3E3C] text-[#3E3E3C]"
      : "border-2 bg-[#FAFCFE] text-[#397832] border-[#397832] hover:bg-[#F8F8EF]",
    tonal: "bg-[#FBF6C7] text-[#9A9353] hover:bg-[#F6E96B]",
    confirm: "bg-[#4FC65F] text-[#FAFCFE] hover:bg-[#33803F]",
    delete: "bg-[#E64341] text-[#FAFCFE] hover:bg-[#B11E1B]",
    cancle: "bg-[#7C7C77] text-[#FAFCFE] hover:bg-[#3E3E3C]",
  };

  return styles[variant];
};

type ButtonProps = {
  variant?: "primary" | "secondary" | "tonal" | "confirm" | "delete" | "cancle";
  text: string;
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  variant = "primary",
  text,
  disabled = false,
  onClick,
  children,
  className = "w-[72px] h-[48px] rounded-2xl",
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={` ${className}  font-prompt text-base flex items-center justify-center ${getVariantStyles(
        variant,
        disabled
      )} 
         ${!disabled ? "active:scale-95 cursor-pointer" : ""}
          transition-all duration-100 ease-in-out`}
    >
      <div className={`flex items-center gap-2 `}>
        {children}
        {text}
      </div>
    </button>
  );
}
