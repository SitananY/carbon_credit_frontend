import Link from "next/link";


export default function TestCard({link , text } : {link:string , text:string }){
    return (
        <Link href={link} className="my-10 w-full max-w-md h-64 bg-white rounded-xl shadow-2xl flex items-center justify-center p-4 hover:underline ">
          <div className=" font-mono text-3xl  font-bold text-center">
          {text}
          </div>
      
      </Link>
    );
}