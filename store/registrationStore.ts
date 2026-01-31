import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface RegistrationData {
  phoneNumber: string;
  otp: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  personalization: {
    interests: string[];
    notifications: boolean;
    theme: "light" | "dark";
  };
}

interface RegistrationStore {
  currentStep: number;
  data: RegistrationData;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  updateData: (updates: Partial<RegistrationData>) => void;
  resetRegistration: () => void;
  completeRegistration: () => Promise<void>;
}

const initialData: RegistrationData = {
  phoneNumber: "",
  otp: "",
  firstName: "",
  lastName: "",
  email: "",
  avatar: "",
  personalization: {
    interests: [],
    notifications: true,
    theme: "light",
  },
};

export const useRegistrationStore = create<RegistrationStore>()(
  persist(
    (set, get) => ({
      currentStep: 4,
      data: initialData,

      setStep: (step) => set({ currentStep: step }),

      nextStep: () =>
        set((state) => ({
          currentStep: Math.min(state.currentStep + 1, 5),
        })),

      prevStep: () =>
        set((state) => ({
          currentStep: Math.max(state.currentStep - 1, 1),
        })),

      updateData: (updates) =>
        set((state) => ({
          data: { ...state.data, ...updates },
        })),

      resetRegistration: () =>
        set({
          currentStep: 1,
          data: initialData,
        }),

      completeRegistration: async () => {
        const { data } = get();

        // API call to register user
        const response = await fetch("https://api.example.com/register", {
          method: "POST",
          body: JSON.stringify(data),
        });

        if (response.ok) {
          // Clear registration data after success
          set({
            currentStep: 1,
            data: initialData,
          });
        }
      },
    }),
    {
      name: "registration-storage",
      storage: createJSONStorage(() => AsyncStorage),
      // Don't persist OTP (security)
      partialize: (state) => ({
        ...state,
        data: {
          ...state.data,
          otp: "",
        },
      }),
    },
  ),
);

export const useRegistrationStep = () =>
  useRegistrationStore((state) => state.currentStep);

export const useRegistrationData = () =>
  useRegistrationStore((state) => state.data);
