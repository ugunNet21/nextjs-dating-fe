// src/stores/authStore.ts
import { create } from 'zustand';

interface User {
  name: string
  email: string
}

interface AuthState {
  user: User | null
  token: string | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  
  login: async (email: string, password: string) => {
    // Implement API call here
    set({ user: { name: 'John', email }, token: 'dummy-token' })
  },
  
  logout: () => {
    set({ user: null, token: null })
  },
}))