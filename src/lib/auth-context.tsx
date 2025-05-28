import * as React from 'react'
import { AuthContext, AuthProps } from '@/types/auth'
import {useAppStore} from "@/store/useAppStore";

const AuthContextTag = React.createContext<AuthContext | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const appStore = useAppStore((state) => state)
  const [user, setUser] = React.useState<AuthProps | null>(appStore.user)
  const isAuthenticated = !!(user as Record<string, any>)?.token;

  const logout = React.useCallback(async () => {
    appStore.logout()
    setUser(null)
  }, [])

  const login = React.useCallback(async (user: AuthProps) => {
    appStore.login(user)
    setUser(user)
  }, [])

  return (
    <AuthContextTag.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContextTag.Provider>
  )
}

export { AuthContextTag }
