"use client";

const getVariantStyles = (
  variant: NonNullable<ButtonProps["variant"]>,
  disabled?: boolean,
  isClick?:boolean
) => {
  const styles: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary: disabled
      ? "bg-cancel-300 text-cancel-700"
      : `bg-primary-500 text-neutral-300 ${isClick ? "bg-primary-700" : "hover:bg-primary-700"}`,
    secondary: disabled
      ? "border-2 bg-cancel-300 border-cancel-700 text-cancel-700"
      : `border-2 bg-neutral-300 text-primary-500 border-primary-500 ${isClick ? "bg-neutral-500 border-primary-700" : "hover:bg-neutral-500 hover:border-primary-700"}`,
    tonal: disabled
      ? "bg-cancel-300 text-cancel-700"
      : `bg-secondary-300 text-secondary-700 ${isClick ? "bg-secondary-500" : "hover:bg-secondary-500"}`,
    confirm: disabled
      ? "bg-cancel-300 text-cancel-700"
      : `bg-success-500 text-neutral-300 ${isClick ? "bg-success-700" : "hover:bg-success-700"}`,
    delete: disabled
      ? "bg-cancel-300 text-cancel-700"
      : `bg-error-500 text-neutral-300 ${isClick ? "bg-error-700" : "hover:bg-error-700"}`,
    cancel: disabled
      ? "bg-cancel-300 text-cancel-700"
      : `bg-cancel-500 text-neutral-300 ${isClick ? "bg-cancel-700" : "hover:bg-cancel-700"}`,
  };

  return styles[variant];
};

type ButtonProps = {
  variant?: "primary" | "secondary" | "tonal" | "confirm" | "delete" | "cancel";
  text: string;
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  textClassName?:string;
  type?: "button" | "submit" | "reset";
  isClick?:boolean,
};

export default function Button({
  variant = "primary",
  text,
  disabled = false,
  onClick,
  children,
  className = "w-[72px] h-[48px] rounded-2xl",
  type = "button",
  textClassName = "text-base ",
  isClick
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={` ${className} ${textClassName} font-prompt  flex items-center justify-center ${getVariantStyles(
        variant,
        disabled,
        isClick
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
