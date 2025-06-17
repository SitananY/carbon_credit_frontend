'use client'
import dynamic from "next/dynamic";

const LoadMap = dynamic(()=>import("@/app/map/components/LeafletMap"),
{
  ssr:false,
  loading: () => <p>Loading...</p>
}
);


export default function MapPage() {
  return(
    <main className="items-center flex justify-center">
    <div className="w-[650px] h-[450px] bg-white rounded-xl shadow-xl items-center flex justify-center">
    <LoadMap/>    
    </div>
    
    </main>
    
  );
}