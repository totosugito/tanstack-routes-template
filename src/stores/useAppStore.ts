import {create} from "zustand/index";
import {APP_CONFIG} from "@/constants/config";
import {persist} from "zustand/middleware";

type Store = {
  userList: any[];
  setUserList: (userList: any[]) => void;
}

export const useAppStore = create<Store>()(
  persist(
    (set) => ({
      userList: [],
      setUserList: (userList) => set({ userList }),
    }),
    {
      name: `${APP_CONFIG.prefixStore}-app`, // single storage key
    }
  )
);