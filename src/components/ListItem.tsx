type ListItemProps = {
  item?: String;
  children?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};


export default function ListItem({
  item,
  selected,
  disabled,
  children,
  onClick,
}: ListItemProps) {
  return (
    <div
      onClick={!disabled ? onClick : undefined}
      className={`relative w-[240px] h-[37px] border-b border-[#B6B6A8] transition-all duration-100
    ${
      disabled
        ? "bg-[#DDDDDC] cursor-default"
        : selected
        ? "bg-[#397832] cursor-pointer"
        : "bg-[#FAFCFE] hover:bg-[#7CA777] cursor-pointer"
    }
  `}
    >
      <div className="absolute inset-0 flex items-center justify-between px-3">
        {item && (
          <div
            className={`font-prompt text-sm pointer-events-none
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

        {children && <div className={`flex items-center gap-3 ${
            disabled
              ? "text-[#27272A]"
              : selected
              ? "text-[#FAFCFE]"
              : "text-[#3E3E3C]"
          } `}>{children}</div>}
        </div>
    </div>
  );
}
