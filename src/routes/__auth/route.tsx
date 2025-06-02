import {createFileRoute, Outlet} from '@tanstack/react-router'
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import AppSidebar from "@/components/app/AppSidebar";
import {UserNav} from "@/constants/user-nav";
import * as React from "react";
import {useAuthStore} from "@/stores/useAuthStore";
import {useEffect} from "react";

export const Route = createFileRoute('/__auth')({
  component: RouteComponent,
})

function RouteComponent() {
  const openSideMenu = useAuthStore((state) => state?.openSideMenu ?? false);

  useEffect(() => {

  }, [])

  return(
    <div className={"h-screen flex flex-row overflow-auto"}>
      <SidebarProvider defaultOpen={openSideMenu}>
        <AppSidebar navItems={UserNav}/>

        <SidebarInset className="w-full overflow-auto">
          <Outlet/>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
