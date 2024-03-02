import { create } from "zustand";

const useUserProfileStore = create((set) => ({
  userProfile: null,
  setUserProfile: (userProfile) => set({ userProfile }), // Corrected syntax here
  // addPost:()
}));

export default useUserProfileStore;
