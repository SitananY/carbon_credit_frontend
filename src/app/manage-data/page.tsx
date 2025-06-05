import TestCard from "@/components/Testcard";
import Link from "next/link";



export default function ManageData() {
  return (
    <main className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <TestCard link="/manage-data/forest" text="Forest"></TestCard>
      <TestCard link="/manage-data/land" text="Land"></TestCard>
    </main>
  );
}
