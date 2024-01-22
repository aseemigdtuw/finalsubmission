import React from "react";
import { auth } from "../config/firebase";
import { signOut } from 'firebase/auth';
function SignedIn() {
  const userEmail = auth?.currentUser?.email || "No user";

  return (
    <div className="signedin">
      <h1>You are successfully signed in with email id: {userEmail}</h1>
    </div>
  );
}

export default SignedIn;