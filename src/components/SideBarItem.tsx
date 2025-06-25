import Link from "next/link";
import ListItem from "./ListItem";
import { usePathname } from "next/navigation";

type SideBarItemProps = {
  
  pageRef: string;
  className?:string
  icon?:React.ReactNode,
  isCollapsed?:boolean,
  text?:string
};

export default function SideBarItem({ pageRef ,className,icon,isCollapsed,text}: SideBarItemProps) {
  const pathName = usePathname();
  const isActive =
    pageRef === "/" ? pathName === pageRef : pathName.startsWith(pageRef);

  return (
  <div>
        {/* {text ?   */}
        <Link href={pageRef} >
              <div
                className={`
                  h-[56px] rounded-lg relative overflow-hidden
                  flex items-center transition-all duration-300 ease-in-out
                  ${isCollapsed ? "w-[64px]" : "w-[336px]"}
                  ${isActive
                    ? "bg-[#397832] text-[#FAFCFE]"
                    : "bg-[#FAFCFE] hover:bg-[#7CA777] text-[#3E3E3C]"}
                `}
              >
                <div className={`
                    flex flex-row items-center w-full h-full transition-all duration-300 ease-in-out
                    ${isCollapsed ? "justify-center" : "pl-[26px]"}
                `}>
                  <div className="h-[32px] w-[32px] flex items-center justify-center">
                    {icon}
                  </div>

                  {/* กล่อง text จะเล็กลงจนหาย */}
                  {text && (
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap
                      ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100 pl-[10px]"}
                    `}>
                      <span className="font-prompt font-medium text-xl">
                        {text}
                      </span>
                    </div>
                  )}
                </div>
              </div>

   
        </Link> 
        
       
       
    </div>
 ); }
  
    
    
    
    
