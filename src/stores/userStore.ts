import { api } from 'utils/api';
import { create } from 'zustand';

interface UserState {
  user: {
    userId: number | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    bio: string | null;
    gender: string | null;
    verification_status: string;
  };
  loading: boolean;
  error: string | null;
  fetchUser: (token: string) => Promise<void>;
  updateProfile: (data: Partial<UserState['user']>, token: string) => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  user: {
    userId: null,
    email: null,
    firstName: null,
    lastName: null,
    bio: null,
    gender: null,
    verification_status: 'unverified',
  },
  loading: false,
  error: null,
  
  fetchUser: async (token) => {
    set({ loading: true, error: null });
    try {
      const response = await api.get('/users/me', {
        headers: { Authorization: `Bearer ${token}` }
      });
      set({ user: response.data, loading: false });
    } catch (error) {
      set({ error: 'Failed to fetch user data', loading: false });
    }
  },
  
  updateProfile: async (data, token) => {
    set({ loading: true, error: null });
    try {
      const response = await api.put('/users/me', data, {
        headers: { Authorization: `Bearer ${token}` }
      });
      set({ 
        user: { ...response.data, userId: response.data.user_id },
        loading: false 
      });
    } catch (error) {
      set({ error: 'Failed to update profile', loading: false });
    }
  }
}));