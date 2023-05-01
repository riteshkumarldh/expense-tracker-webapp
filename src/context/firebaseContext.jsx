// react imports
import { createContext, useContext, useEffect, useState } from "react";

// firebase imports
import { initializeApp } from "firebase/app";
// auth
import { getAuth } from "firebase/auth";
// fireStore
import { getFirestore } from "firebase/firestore";

// my firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD_DZc4xB7CAheUZIufsqOyN6QwqHIXKMY",
  authDomain: "expense-tracker-31647.firebaseapp.com",
  projectId: "expense-tracker-31647",
  storageBucket: "expense-tracker-31647.appspot.com",
  messagingSenderId: "558405284239",
  appId: "1:558405284239:web:2431693cd8a835956b9bfa",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// creating context
export const FirebaseContext = createContext(null);

// contextProvider
const FirebaseProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={"hello"}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => {
  return useContext(FirebaseContext);
};

export default FirebaseProvider;
