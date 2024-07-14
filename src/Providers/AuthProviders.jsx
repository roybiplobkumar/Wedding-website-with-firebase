import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../assets/Firebase/Firebase.config";
import PropTypes from 'prop-types';


export const AuthContext = createContext(null)
const auth = getAuth(app);


const AuthProviders = ({ children }) => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true);
 
  // create user in  email and password
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // log in user in email and password
  const Login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  // Google login 
  const Googleprovider = new GoogleAuthProvider();
  const GoogleSingIN = () => {
    setLoading(true)
    return signInWithPopup(auth, Googleprovider)

  }
  // logOut  
  const logout = () => {
    setLoading(true)
    return signOut(auth)
  }
  // onAuthStateChanged
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });


    return () => unSubscribe();
  }, []);


  const authInfo = { createUser, Login, GoogleSingIN, logout, user, loading }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};
AuthProviders.propTypes = {
  children: PropTypes.node
};

export default AuthProviders;