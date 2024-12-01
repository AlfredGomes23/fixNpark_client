import { createContext, useEffect, useState } from "react";
import { auth } from "../Config/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signinUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
        });
        return () => unSubscribe();
    }, []);

    const sign_out = () => {
        return signOut(auth);
    }

    const authData = {
        user, createUser, signinUser, sign_out, loading
    };

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;