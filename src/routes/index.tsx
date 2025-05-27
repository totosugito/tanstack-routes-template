import {createFileRoute, redirect} from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  loader: ({ context }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({ to: '/login' })
    }
    else {
      throw redirect({ to: '/dashboard' })
    }
  },
  component: () => null,
})
