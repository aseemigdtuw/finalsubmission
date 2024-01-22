import React, { useState } from "react";
import { auth,googleProvider } from "../config/firebase";
import { signOut,signInWithPopup } from "firebase/auth";
import SignedIn from "./signedin";
import './signin.css'

function SignIn() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

    console.log(auth?.currentUser?.email);

    const signInWithGoogle = async() => {
        try {
            await signInWithPopup(auth, googleProvider);
            setIsAuthenticated(true);
        } catch (error) {
            console.error();
        }
    }

    const logout = async() => {
        try {
         await signOut(auth);
         setIsAuthenticated(false);   
        } catch (error) {
            console.error();
        }
    }

  return (
    <div className="signin">
      <h1> Sign In Page </h1>
      <p> This is your sign in page.</p>
      {isAuthenticated ? (
        <SignedIn logout={logout} />
      ) : (
        <div>
      <div className="google-form">
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      </div>
      <button className="pretty-button-2" onClick={logout}>Sign Out</button>

    </div>
      )}
    </div>
  );
}

export default SignIn;