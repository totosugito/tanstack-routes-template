import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import AppNavbar from "@/components/app/AppNavbar";

export const Route = createFileRoute('/_auth/dashboard')({
  component: DashboardPage,
})

function DashboardPage() {
  return (
    <div className={"h-screen flex flex-col"}>
      <AppNavbar title={""}/>
      <div>

      </div>
    </div>
  )
}
