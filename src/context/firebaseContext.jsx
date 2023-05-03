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

  const [wallet, setWallet] = useState(
    () => JSON.parse(localStorage.getItem("wallet")) || []
  );
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState("");

  // adding expenses and incomes in wallet
  const addTransactions = (amount, source, type, id) => {
    // adding new transactions
    if (!editMode) {
      const details = {
        id,
        amount,
        source,
        type,
      };
      setWallet((prev) => [details, ...prev]);
    } else {
      // editing the transactions
      setEditMode(false);
      const newArr = [...wallet];
      newArr.forEach((item) => {
        if (item.id === editId) {
          item.amount = amount;
          item.source = source;
        }
      });
      setWallet(newArr);
    }
  };

  const [openModal, setOpenModal] = useState(null);
  const [modal, setModal] = useState(false);

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    localStorage.setItem("wallet", JSON.stringify(wallet));
    // calculating totals
    const getTotals = () => {
      if (wallet.length === 0) return;
      let totalIncome = 0;
      let totalExpense = 0;
      wallet.forEach((item) => {
        if (item.type === "Income") {
          totalIncome += +item.amount;
          setIncome(totalIncome);
        }
        if (item.type === "Expense") {
          totalExpense += +item.amount;
          setIncome(totalExpense);
        }
      });
      setIncome(totalIncome);
      setExpense(totalExpense);
      setBalance(totalIncome - totalExpense);
    };
    getTotals();
  }, [wallet]);

  // deleting transactions
  const handleDelete = (id) => {
    setWallet((prev) =>
      prev.filter((transaction) => {
        return transaction.id !== id;
      })
    );
  };

  // edit transaction
  const handleEdit = (id, type) => {
    setEditMode(true);
    setEditId(id);
    setOpenModal(type);
    setModal(true);
  };

  // we will provide these values in our context
  const firebaseProvider = {
    user,
    createUser,
    signInWithGoogle,
    LogInWithEmailAndPassword,
    logOutUser,
    loading,
    addTransactions,
    wallet,
    setWallet,
    income,
    expense,
    balance,
    handleDelete,
    setEditMode,
    setEditId,
    openModal,
    setOpenModal,
    modal,
    setModal,
    handleEdit,
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
