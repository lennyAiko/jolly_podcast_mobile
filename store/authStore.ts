import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface AuthData {
  token: string;
  user: {
    id: string;
    phone_number: string;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
}

interface AuthStore {
  data: AuthData;
  setAuthData: (data: AuthData) => void;
  clearAuthData: () => void;
}

const initialData: AuthData = {
  token: "",
  user: {
    id: "",
    phone_number: "",
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
  },
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      data: initialData,
      setAuthData: (data) => set({ data }),
      clearAuthData: () => set({ data: initialData }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export const useAuthData = () => useAuthStore((state) => state.data);
