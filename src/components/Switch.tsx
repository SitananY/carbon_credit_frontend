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
                    ? "bg-cancel-300"
                    : isOpen
                    ? "bg-secondary-500"
                    : "bg-cancel-500"
                }
                `}
      ></div>
      <div
        className={` w-[24px] h-[24px] rounded-full absolute top-[3px] left-[3px]
                 transition-all duration-100 ease-in-out
                ${
                  disabled
                    ? "bg-neutral-700"
                    : isOpen
                    ? "bg-neutral-300 translate-x-[28px]"
                    : " bg-neutral-300 translate-x-0"
                }
                  `}
      ></div>
    </div>
  );
}
