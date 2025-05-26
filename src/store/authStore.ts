import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import {APP_CONFIG} from "@/constant/config";
import {AuthProps} from "@/types/auth";

type AuthStore = {
  user: AuthProps | null
  login: (user: AuthProps) => void
  logout: () => void
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      login: (user) => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: `${APP_CONFIG.prefixStore}-auth`,
    }
  )
)
