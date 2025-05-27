import {createFileRoute, Outlet, redirect} from '@tanstack/react-router'
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar.js";
import AppSidebar from "@/components/app/app-sidebar.jsx";
import {UserNav} from "@/constant/user-nav.js";
import * as React from "react";

export const Route = createFileRoute('/_auth')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
    <div className={"h-screen flex flex-row overflow-auto"}>
      <SidebarProvider defaultOpen={true}>
        <AppSidebar navItems={UserNav}/>

        <SidebarInset className="w-full overflow-auto">
          <Outlet/>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
