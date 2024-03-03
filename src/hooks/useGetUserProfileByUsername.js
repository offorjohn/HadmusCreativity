import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { firestore, query, where, getDocs } from "../firebase/firebase"; // Import necessary functions
import { useUserProfileStore } from "./yourUserProfileStore"; // Import your UserProfile store

const useGetUserProfileByUsername = ({ username }) => {
  const [isLoading, setIsLoading] = useState(true);
  const showToast = useShowToast();
  const { setUserProfile } = useUserProfileStore(); // Assuming you have a setUserProfile function in your store

  useEffect(() => {
    const getUserProfile = async () => {
      setIsLoading(true);
      try {
        const q = query(
          firestore,
          "users",
          where("username", "==", username)
        );
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) return setUserProfile(null);

        let userDoc;
        querySnapshot.forEach((doc) => {
          userDoc = doc.data();
        });

        setUserProfile(userDoc);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setIsLoading(false);
      }
    };

    getUserProfile();
  }, [setUserProfile, username, showToast]);

  return <div>{isLoading ? "Loading..." : "useGetUserProfileByUsername"}</div>;
};

export default useGetUserProfileByUsername;
