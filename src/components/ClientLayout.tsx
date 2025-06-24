
'use client'

import { usePathname } from 'next/navigation'
import SideBarCard from '@/components/SideBarCard'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isMapPage = pathname === '/map'
  const isAuthPage = pathname.startsWith('/login') || pathname.startsWith('/register') || pathname.startsWith('/change-password')
  
  if(isAuthPage){
    return <>{children}</>
  }


  return (
    

       <div className={`h-screen w-screen ${isMapPage ? "relative overflow-hidden" : "flex"}`}>
          <div className={isMapPage ? "absolute z-20 h-full" : "relative"}>
            <SideBarCard forcedCollapsed={isMapPage} />
          </div>

          <main
            className={`
              h-full
              ${isMapPage ? "absolute top-0 left-0 ml-[117px] w-full z-10" : "flex-1"}
              overflow-auto
            `}
          >
            {children}
          </main>
        </div>
      
  
  )
}
