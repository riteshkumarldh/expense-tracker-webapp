import { useEffect, useState } from "react";
import { useFirebase } from "../context/firebaseContext";

const BalanceCards = ({ setOpenModal, setModal, wallet }) => {
  const { user } = useFirebase();
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div className="p-10 bg-blue-100 rounded-3xl">
        <h3 className="text-base font-medium">Available Balance</h3>
        <p className="text-6xl font-semibold">₹</p>
        <p className="mt-5 text-xl font-semibold text-blue-500">
          Mr. {user.displayName}
        </p>
      </div>
      <div className="p-10 bg-blue-100 rounded-3xl">
        <h3 className="text-base font-medium text-red-500">Total Expenses</h3>
        <p className="text-6xl text-red-500">₹3000</p>
        <button
          className="text-blue-100 mt-5 px-4 py-2 bg-blue-500 rounded-md uppercase "
          onClick={() => {
            setOpenModal("expense");
            setModal(true);
          }}
        >
          Add Expense
        </button>
      </div>
      <div className="p-10 bg-blue-100 rounded-3xl">
        <h3 className="text-base font-medium text-green-700">Total Income</h3>
        <p className="text-6xl text-green-700">₹13000</p>
        <button
          className="text-blue-100 mt-5 px-4 py-2 bg-blue-500 rounded-md uppercase "
          onClick={() => {
            setOpenModal("income");
            setModal(true);
          }}
        >
          Add Income
        </button>
      </div>
    </div>
  );
};

export default BalanceCards;
