// react imports
import { createContext, useContext, useEffect, useState } from "react";

// firebase imports
import { initializeApp } from "firebase/app";
// auth
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// my firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD_DZc4xB7CAheUZIufsqOyN6QwqHIXKMY",
  authDomain: "expense-tracker-31647.firebaseapp.com",
  projectId: "expense-tracker-31647",
  storageBucket: "expense-tracker-31647.appspot.com",
  messagingSenderId: "558405284239",
  appId: "1:558405284239:web:2431693cd8a835956b9bfa",
};

// firebase initialization
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// creating context
export const FirebaseContext = createContext(null);

// contextProvider
const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // checking user on mounting of page
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(true);
      if (user) {
        setUser(user);
        // console.log(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
        console.log(user);
      }
    });
  }, [user]);

  // creating user with Email and password
  const createUser = async (email, password, name) => {
    try {
      setLoading(true);
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
      console.log(result);
      setLoading(false);
    } catch (error) {
      console.log("Something wrong", error.message);
      setLoading(false);
    }
  };

  // signIn with Google
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Login with Email and password
  const LogInWithEmailAndPassword = async (email, password) => {
    try {
      setLoading(true);
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log(result);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  // logOut
  const logOutUser = async () => {
    try {
      await signOut(auth);
      alert("signout successfull");
      console.log("successfully logout");
    } catch (error) {
      console.log(error.message);
    }
  };

  // pushing
  const allTransactions = [];
  const addTransactions = (amount, source, type, id) => {
    const details = {
      id,
      amount,
      source,
      type,
    };
    allTransactions.push(details);
    localStorage.setItem("wallet", JSON.stringify(allTransactions));
  };

  // totalling
  const [income, setIncome] = useState(0);
  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem("wallet"));
    arr.forEach((item) => {
      console.log(item);
      if (item.type === "Income") {
        setIncome((prev) => (prev += +item.amount));
      }
    });
  }, []);

  // we will provide these values in our context
  const firebaseProvider = {
    user,
    createUser,
    signInWithGoogle,
    LogInWithEmailAndPassword,
    logOutUser,
    loading,
    addTransactions,
  };

  return (
    <FirebaseContext.Provider value={firebaseProvider}>
      {children}
    </FirebaseContext.Provider>
  );
};

// custom hook for using the firebase comtext
export const useFirebase = () => {
  return useContext(FirebaseContext);
};

export default FirebaseProvider;
