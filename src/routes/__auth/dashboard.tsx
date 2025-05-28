import * as React from 'react'
import {createFileRoute, redirect} from '@tanstack/react-router'
import AppNavbar from "@/components/app/AppNavbar";

export const Route = createFileRoute('/__auth/dashboard')({
  loader: ({context}) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({to: '/login'})
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className={"h-screen flex flex-col"}>
      <AppNavbar title={""}/>
      <div className={"divRoot"}>
        dashboard page
      </div>
    </div>
  )
}
