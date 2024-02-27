import { create } from "zustand";

const useAuthStore = create((set) => ({
    user: null,
    login: (user) => set({ user }), // Fix the syntax here
    logout: () => set({ user: null }),
    setUser: (user) => set({ user }), // Fix the syntax here as well
}));

export default useAuthStore;
