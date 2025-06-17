import Link from "next/link";
import ListItem from "./ListItem";
import { usePathname } from "next/navigation";

type SideBarItemProps = {
  children?: React.ReactNode;
  pageRef: string;
  className?:string
};

export default function SideBarItem({ children, pageRef ,className}: SideBarItemProps) {
  const pathName = usePathname();
  const isActive =
    pageRef === "/" ? pathName === pageRef : pathName.startsWith(pageRef);

  return (
    <Link href={pageRef} className={className}>
      <ListItem selected={isActive} className={className}>{children}</ListItem>
    </Link>
  );
}
