import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import {APP_CONFIG} from "@/constant/config";

type ThemeStore = {
  theme: string | "light"
  setTheme: (theme: string) => void
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: 'light',
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: `${APP_CONFIG.prefixStore}-theme`,
    }
  )
)
