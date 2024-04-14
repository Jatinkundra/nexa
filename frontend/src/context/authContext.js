import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { auth as firebaseauth } from "../configs/firebaseconfig.js";

// Create a context object
const userAuthContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(firebaseauth, email, password);
    };

    const emailSignIn = (email, password) => {
        return signInWithEmailAndPassword(firebaseauth, email, password);
    };

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(firebaseauth, provider).then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            setUser(user);
            console.log("user: ", user);
            console.log("token: ", token);
        });
    };

    const signOutUser = () => {
        return signOut(firebaseauth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseauth, (currnetUser) => {
            setUser(currnetUser);

            if (currnetUser === null) {
                console.log("user is not logged in");
            }
            else if (currnetUser) {
                console.log("auth state changed: ", currnetUser);
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const userAuthMethods = {
        user,
        createUser,
        emailSignIn,
        googleSignIn,
        signOutUser,
    };

    return (
        <userAuthContext.Provider value={userAuthMethods}>
            {children}
        </userAuthContext.Provider>
    );
};

// export custom hook to use the auth object
export function useUserAuth() {
    return useContext(userAuthContext);
}