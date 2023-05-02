import { useEffect, useState } from "react";
import { useFirebase } from "../context/firebaseContext";

// components
import RecentTransactions from "../components/RecentTransactions";
import ModalForm from "../components/ModalForm";
import BalanceCards from "../components/BalanceCards";

const Dashboard = () => {
  const { loading, user, addTransactions } = useFirebase();
  const [openModal, setOpenModal] = useState(null);
  const [modal, setModal] = useState(false);
  const [budget, setBudget] = useState("");

  const [wallet, setWallet] = useState(
    () => JSON.parse(localStorage.getItem("wallet")) || []
  );

  useEffect(() => {
    setWallet(JSON.parse(localStorage.getItem("wallet")) || []);
  }, []);

  const handleSetBudget = (e) => {
    e.preventDefault();
    if (!budget) return;
    addTransactions(budget, "Initial Budget", "Income", Date.now());
    setWallet(JSON.parse(localStorage.getItem("wallet")) || []);
    setBudget("");
  };

  return loading ? (
    <h1 className="text-center my-20 text-3xl">Loading...</h1>
  ) : (
    <main className="bg-slate-100">
      {wallet.length < 1 ? (
        <section className="container mx-auto px-4 py-32">
          <h2 className="font-bold text-3xl">
            Set Initial Budget to get Started
          </h2>
          <form onSubmit={handleSetBudget} className="flex flex-col gap-2 mt-4">
            <input
              type="number"
              placeholder="Set Initial Budget"
              autoFocus
              className="border-2 rounded-lg outline-none border-blue-600 h-12 px-4"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 h-12 rounded-lg text-blue-100 font-semibold uppercase"
            >
              Set Budget
            </button>
          </form>
        </section>
      ) : (
        <section className="container mx-auto px-4 py-10">
          <div>
            <h1 className="text-3xl font-bold logo">
              Welcome back,
              <span className="text-blue-800"> {user.displayName}</span>
            </h1>
          </div>

          <BalanceCards
            setModal={setModal}
            setOpenModal={setOpenModal}
            wallet={wallet}
          />

          <RecentTransactions />
        </section>
      )}

      <ModalForm openModal={openModal} modal={modal} setModal={setModal} />
    </main>
  );
};

export default Dashboard;
