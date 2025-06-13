type SwitchProps = {
  isOpen: boolean;
  disabled?: boolean;
  onClick: () => void;
  scale?: string;
};

export default function Switch({
  isOpen,
  disabled = false,
  onClick,
  scale = "100",
}: SwitchProps) {
  return (
    <div onClick={onClick} className={`relative cursor-pointer scale-${scale} `}>
      <div
        className={` w-[58px] h-[30px] rounded-full transition-all duration-100 ease-in-out
                ${
                  disabled
                    ? "bg-[#DDDDDC]"
                    : isOpen
                    ? "bg-[#F6E96B]"
                    : "bg-[#7C7C77]"
                }
                `}
      ></div>
      <div
        className={` w-[24px] h-[24px] rounded-full absolute top-[3px] left-[3px]
                 transition-all duration-100 ease-in-out
                ${
                  disabled
                    ? "bg-[#B6B6A8]"
                    : isOpen
                    ? "bg-[#FAFCFE] translate-x-[28px]"
                    : " bg-[#FAFCFE] translate-x-0"
                }
                  `}
      ></div>
    </div>
  );
}
