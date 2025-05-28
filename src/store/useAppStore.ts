import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { APP_CONFIG } from '@/constant/config';
import { AuthProps } from '@/types/auth';

type Store = {
  user: AuthProps | null;
  login: (user: AuthProps) => void;
  logout: () => void;

  theme: string;
  setTheme: (theme: string) => void;
  openSideMenu: boolean;
  setOpenSideMenu: (openSideMenu: boolean) => void;
};

export const useAppStore = create<Store>()(
  persist(
    (set) => ({
      // Auth slice
      user: null,
      login: (user) => set({ user }),
      logout: () => set({ user: null, theme: 'light', openSideMenu: true }),

      // Theme slice
      theme: 'light',
      setTheme: (theme) => set({ theme }),
      openSideMenu: true,
      setOpenSideMenu: (openSideMenu) => set({ openSideMenu }),
    }),
    {
      name: `${APP_CONFIG.prefixStore}-app`, // single storage key
    }
  )
);
