import  { useState } from 'react';
import { GoogleAuthProvider, getAuth , signInWithPopup } from "firebase/auth";
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);

            }).catch((error) => {
                const errorMessage = error.message;
                console.log(error.message)
                setError(errorMessage);
                
            });
    }

    return{
        user, 
        googleSignIn,
        error
    }
};

export default useFirebase;