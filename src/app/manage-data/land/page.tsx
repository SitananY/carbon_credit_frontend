import TestCard from "@/components/Testcard";
import Link from "next/link";



export default function ManageData() {
  return (
    <main className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-md h-64 bg-white rounded-xl shadow-2xl flex items-center justify-center p-4">
          <div className=" font-mono text-3xl font-bold text-center">
          Land Data list
          </div>
      </div>
      <TestCard link="/manage-data/land/new" text="New"/>
      <TestCard link="/manage-data/land/id/edit" text="Edit"/>
    </main>
  );
}
