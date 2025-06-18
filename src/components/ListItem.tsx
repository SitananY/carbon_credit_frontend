type ListItemProps = {
  item?: String;
  children?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  textClassName? :string;
  childGap? :string
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
}: ListItemProps) {
  return (
    <div
      // title={disabled ? "ไม่พร้อมใช้งาน" : undefined}
      
      onClick={!disabled ? onClick : undefined}
      className={`relative ${className} border-b border-[#B6B6A8] transition-all duration-100
    ${
      disabled
        ? "bg-[#DDDDDC] cursor-default"
        : selected
        ? "bg-[#397832] cursor-pointer"
        : "bg-[#FAFCFE] hover:bg-[#7CA777] cursor-pointer"
    }
  `}
    >
      <div className="absolute inset-0 flex items-center justify-between px-3 px-[20px]">
        {item && (
          <div
            className={` ${textClassName} font-prompt pointer-events-none
          ${
            disabled
              ? "text-[#27272A]"
              : selected
              ? "text-[#FAFCFE]"
              : "text-[#3E3E3C]"
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
                ? "text-[#27272A]"
                : selected
                ? "text-[#FAFCFE]"
                : "text-[#3E3E3C]"
            } `}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
