import {SubmitHandler} from "react-hook-form";

export type LoginFormValues = {
  email: string
  password: string
}

export type LoginProps = {
  onFormSubmit: SubmitHandler<LoginFormValues>
}

export type AuthProps = {
  id: number
  email: string
  role: number
  fullname: string
  token: string
}

export interface AuthContext {
  isAuthenticated: boolean
  login: (user: AuthProps) => Promise<void>
  logout: () => Promise<void>
  user: AuthProps | null
}