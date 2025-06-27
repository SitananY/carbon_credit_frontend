type ListItemProps = {
  item?: String;
  children?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  textClassName? :string;
  childGap? :string,
  textPxGap?:string
};

export default function ListItem({
  item,
  selected,
  disabled,
  children,
  onClick,
  className = "w-[240px] h-[37px]",
  textClassName = " text-sm",
  childGap= "gap-3",
  textPxGap = "px-[30px]"
}: ListItemProps) {
  return (
    <div
      // title={disabled ? "ไม่พร้อมใช้งาน" : undefined}
      
      onClick={!disabled ? onClick : undefined}
      className={`relative ${className} border-b border-neutral-700 transition-all duration-100
    ${
      disabled
        ? "bg-cancel-300 cursor-default"
        : selected
        ? "bg-primary-500 cursor-pointer"
        : "bg-neutral-300 hover:bg-primary-300 cursor-pointer"
    }
  `}
    >
      <div className={`absolute inset-0 flex items-center justify-between  ${textPxGap}`}>
        {item && (
          <div
            className={` ${textClassName} font-prompt pointer-events-none
          ${
            disabled
              ? "text-text-800"
              : selected
              ? "text-neutral-300"
              : "text-cancel-700"
          }
        `}
          >
            {item}
          </div>
        )}

        {children && (
          <div
            className={`flex items-center ${childGap} ${
              disabled
                ? "text-text-800"
                : selected
                ? "text-neutral-300"
                : "text-cancel-700"
            } `}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
