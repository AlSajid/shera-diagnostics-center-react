import { useEffect, useState } from "react"
import initializeAuthentication from "../components/Firebase/firebase.init";
import {
    getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut,
    createUserWithEmailAndPassword, signInWithEmailAndPassword
} from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);

    }

    const logout = () => {
        signOut(auth).then(() => {
            setUser({});
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('inside state change', user);
                setUser(user);
            }
        })
    }, [])

    return {

        user,
        error,
        createUser,
        setError,
        signInUsingGoogle,
        logout
    }
}
export default useFirebase;