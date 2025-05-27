import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createRouter} from '@tanstack/react-router'

import {routeTree} from './routeTree.gen'
import './assets/styles.css'
import {useAuth} from "@/lib/use-auth";
import {AuthProvider} from "@/lib/auth-context";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Toaster} from "@/components/ui/sonner";
import './i18n';

// Register things for typesafety
// declare module '@tanstack/react-router' {
//   interface Register {
//     router: typeof router
//   }
//
//   interface RouteContext {
//     auth: ReturnType<typeof useAuth>
//     queryClient: QueryClient
//   }
// }

// Set up a Router instance
const queryClient = new QueryClient()
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
  context: {
    auth: undefined!,
  },
})

function InnerApp() {
  const auth = useAuth()
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} context={{auth}}/>
    </QueryClientProvider>)
}

function App() {
  return (
    <AuthProvider>
      <InnerApp/>
    </AuthProvider>
  )
}

const rootElement = document.getElementById('app')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <App/>
      <Toaster />
    </React.StrictMode>,
  )
}
