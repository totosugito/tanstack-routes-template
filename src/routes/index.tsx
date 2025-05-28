import {createFileRoute, redirect} from '@tanstack/react-router'
import {APP_CONFIG} from "@/constant/config";

export const Route = createFileRoute('/')({
  loader: ({ context }) => {
    return redirect({ to: context.auth.isAuthenticated ? APP_CONFIG.path.defaultPrivate : APP_CONFIG.path.defaultPublic })
  },
  // TODO: Add a loader function to fetch user data from an API
  // loader: async () => {
  //   const user = await fetchUser(); // calls API to get user
  //   let isAuthenticated = !!(user as Record<string, any>)?.token;
  //   return redirect({ to: isAuthenticated ? APP_CONFIG.path.defaultPrivate : APP_CONFIG.path.defaultPublic })
  // },
  component: () => null,
})
