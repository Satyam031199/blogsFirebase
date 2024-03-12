import React from 'react'
import { auth, googleProvider } from "../config/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = ({setIsAuth}) => {
    const navigate = useNavigate()
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth,googleProvider)
            localStorage.setItem('isAuth', true)
            setIsAuth(true)    
            navigate('/')
        } catch (error) {
            console.log(error.message);
        }        
    }
  return (
    <div className="loginPage">
      <p>Sign In With Google to Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  )
}

export default Login