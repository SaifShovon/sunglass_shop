import { useState, useEffect } from "react"
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [error, setError] = useState('');
    const auth = getAuth();
    useEffect(() => {
        const url = `https://mysterious-gorge-96095.herokuapp.com/users/${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))

    }, [user.email]);
    const signInUsigEmailAndPass = (email, password, url, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                setError('');
                history.push(url);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    const signUpUsigEmailAndPass = (email, password, name) => {
        setIsLoading(true);
        console.log('fuction call');
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                setUserName(name);
                userCreate(name, email);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }



    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {
                setError("Name Updated!!!");
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const userCreate = (name, email) => {
        const newUser = { name: name, email: email }
        console.log(newUser);
        const url = 'https://mysterious-gorge-96095.herokuapp.com/users';
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(resData => {
                console.log(resData)
                if (resData.insertedId) {
                    console.log('User Added Successfully!!!')
                    setError('User Added Successfully!!!');
                }
            })
    }


    const logout = () => {
        signOut(auth)
            .then(resut => {
                setUser({});
                setError('');
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                setError('');
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        })
    }, [auth]);


    return {
        user,
        admin,
        error,
        signUpUsigEmailAndPass,
        signInUsigEmailAndPass,
        logout,
        isLoading,
        setUserName
    }
}

export default useFirebase;