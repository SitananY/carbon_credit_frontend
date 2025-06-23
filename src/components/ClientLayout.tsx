// components/ClientLayout.tsx
'use client'

import { usePathname } from 'next/navigation'
import SideBarCard from '@/components/SideBarCard'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isMapPage = pathname === '/map'

  return (
    

        <div className="flex h-screen">
          <SideBarCard forcedCollapsed={isMapPage?true:false}/>
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      
  
  )
}
