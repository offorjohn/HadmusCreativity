import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebase/firebase';
import { collection, doc, query, where, getDocs, setDoc } from 'firebase/firestore'; // Added missing imports
import useShowToast from './useShowToast';
import useAuthStore from '../store/authStore';

const useSignUpWithEmailAndPassword = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const showToast = useShowToast();
    const loginUser = useAuthStore(state => state.login);

    const signup = async (inputs) => {
        try {
            if (!inputs.email || !inputs.password || !inputs.username || !inputs.fullName) {
                showToast("Error", "Please fill all the fields", "error");
                return;
            }

            const usersRef = collection(firestore, "users");
            const q = query(usersRef, where("username", "==", inputs.username)); // Fixed where condition
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                showToast("Error", "Username already exists", "error");
                return;
            }

            const newUserCredential = await createUserWithEmailAndPassword(inputs.email, inputs.password);

            if (!newUserCredential || error) {
                showToast("Error", error?.message || "Unknown error", "error");
                return;
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
            loginUser(userDoc);
        } catch (error) {
            showToast("Error", error?.message || "Unknown error", "error");
        }
    };

    return {
        signup,
        user,
        loading,
        error,
    };
};

export default useSignUpWithEmailAndPassword;
