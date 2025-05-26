import * as React from 'react'
import { useAuthStore } from '@/store/authStore'
import { AuthContext, AuthProps } from '@/types/auth'

const AuthContextTag = React.createContext<AuthContext | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const authStore = useAuthStore((state) => state)
  const [user, setUser] = React.useState<AuthProps | null>(authStore.user)
  const isAuthenticated = (!!user) && ((user?.token ?? "") !== "");

  const logout = React.useCallback(async () => {
    authStore.logout()
    setUser(null)
  }, [])

  const login = React.useCallback(async (user: AuthProps) => {
    authStore.login(user)
    setUser(user)
  }, [])

  return (
    <AuthContextTag.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContextTag.Provider>
  )
}

export { AuthContextTag }
