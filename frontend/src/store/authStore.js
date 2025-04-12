import { create } from 'zustand';
import axios from 'axios';

const useAuthStore = create((set) => ({
  isSigningUp: false,
  signup: async (formData) => {
    set({ isSigningUp: true });
    try {
      const response = await axios.post('/api/auth/signup', formData);
      set({ isSigningUp: false });
      return response.data;
    } catch (error) {
      set({ isSigningUp: false });
      throw error;
    }
  }
}));

export default useAuthStore;