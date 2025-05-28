import {createFileRoute, redirect} from '@tanstack/react-router'

export const Route = createFileRoute('/__auth/projects')({
  loader: ({ context }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({ to: '/login' })
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_auth/projects"!</div>
}
