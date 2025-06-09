import TestCard from "@/components/Testcard";



export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <TestCard link="/api/auth/signin" text="Signin"></TestCard>
      <TestCard link="/dashboard" text="Dashboard"/>
      <TestCard link="/map" text="Map"/>
      <TestCard link="/manage-data" text="Manage Data"/>
      <TestCard link="/process-data" text="Process Data"/>
    </main>
  );
}
