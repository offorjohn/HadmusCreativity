import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';
import useShowToast from './useShowToast';
import useAuthStore from '../store/authStore';

const useSignUpWithEmailAndPassword = () => {
    const [
        createUserWithEmailAndPassword,
        user, // Include 'user' in the destructuring assignment
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const showToast = useShowToast();
    const loginUser = useAuthStore(state => state.login)
    

    const signup = async (inputs) => {
        try {
            if (!inputs.email || !inputs.password || !inputs.username || !inputs.fullName) {
                showToast("Error", "Please fill all the fields", "error");
                return; // Return to avoid further execution
            }

            const newUserCredential = await createUserWithEmailAndPassword(inputs.email, inputs.password);

            if (!newUserCredential || error) {
                showToast("Error", error?.message || "Unknown error", "error");
                return; // Return to avoid further execution
            }

            const { user: newUser } = newUserCredential;

            const userDoc = {
                uid: newUser.uid,
                email: inputs.email,
                username: inputs.username,
                fullName: inputs.fullName,
                bio: "",
                profilePicURL: "",
                followers: [],
                following: [],
                posts: [],
                createdAt: Date.now(),
            };

            await setDoc(doc(firestore, "users", newUser.uid), userDoc);
            localStorage.setItem("user-info", JSON.stringify(userDoc));
            loginUser(userDoc)


        } catch (error) {
            showToast("Error", error?.message || "Unknown error", "error");
            // Handle the error in your UI or log it as needed.
        }
    };

    // Explicitly return values from the hook
    return {
        signup,
        user,
        loading,
        error,
    };
};

export default useSignUpWithEmailAndPassword;
