import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged   } from "firebase/auth";
import { useEffect, useState } from "react";
import initilatizeAuthentication from "../Pages/Login/Firebase/Firebase.init";

initilatizeAuthentication();

const useFirebase = () => {
    const [user,setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const signInUsingGoogle = ()=> {
        const googleProvider =  new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user)
        })
        .finally(() =>setIsLoading(false));

    }
useEffect(()=> {
      const unsubscribed = onAuthStateChanged(auth, user => {
        if(user){
            setUser(user);
        }
        else{
            setUser({})
        }
        setIsLoading(false)
    });
    return () => unsubscribed;
},[])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(()=>{ })
        .finally(() =>setIsLoading(false));
    }

    return{
        user,
        signInUsingGoogle,
        logOut,
        isLoading

    }
}
export default useFirebase;

