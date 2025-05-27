import * as React from 'react'
import {
  createFileRoute,
  redirect,
} from '@tanstack/react-router'
import { z } from 'zod'

import LayoutLogin from "@/components/pages/auth/LayoutLogin";
import { SubmitHandler } from 'react-hook-form'
import {LoginFormValues} from "@/types/auth";
import {useLoginMutation} from "@/service/auth";
import {toast} from "sonner";

const fallback = '/' as const
export const Route = createFileRoute('/login')({
  validateSearch: z.object({
    redirect: z.string().optional().catch(''),
  }),
  beforeLoad: ({ context, search }) => {
    if (context.auth.isAuthenticated) {
      throw redirect({ to: search.redirect || fallback })
    }
  },
  component: LoginComponent,
})

function LoginComponent() {
  const navigate = Route.useNavigate()
  const search = Route.useSearch()
  const loginMutation = useLoginMutation();

  const onFormSubmit: SubmitHandler<LoginFormValues> = (data) => {
    const email = data?.['email'] ?? "";
    const password = data?.['password'] ?? "";
    loginMutation.mutate(
      {email, password},
      {
        onSuccess: (data) => {
          navigate({ to: search.redirect || fallback })
        },
        onError: (error) => {
          toast.error(error?.message ?? "Invalid email or password");
        },
      }
    );
  }

  return (
    <LayoutLogin onFormSubmit={onFormSubmit}/>
  )
}

export default LoginComponent