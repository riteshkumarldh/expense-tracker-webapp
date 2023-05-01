import { useState } from "react";
import { useFirebase } from "../context/firebaseContext";

// components
import RecentTransactions from "../components/RecentTransactions";

const Dashboard = () => {
  const { loading, user } = useFirebase();
  const [openModal, setOpenModal] = useState(null);
  const [modal, setModal] = useState(false);

  const handleSetBudget = (e) => {
    e.preventDefault();
    if (budget === 0) return;
    setShowDashboard(true);
  };

  return loading ? (
    <h1 className="text-center my-20 text-3xl">Loading...</h1>
  ) : (
    <main className="bg-slate-100">
      <section className="container mx-auto px-4 py-10">
        <div>
          <h1 className="text-3xl font-bold logo">
            Welcome back,
            <span className="text-blue-800"> {user.displayName}</span>
          </h1>

          {/* <form onSubmit={handleSetBudget} className="flex flex-col gap-2 mt-8">
            <input
              type="text"
              pattern="^[0-9]$"
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
          </form> */}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-10 bg-blue-100 rounded-3xl">
            <h3 className="text-base font-medium">Available Balance</h3>
            <p className="text-6xl font-semibold">₹10000</p>
            <p className="mt-5 text-xl font-semibold text-blue-500">
              Mr. {user.displayName}
            </p>
          </div>
          <div className="p-10 bg-blue-100 rounded-3xl">
            <h3 className="text-base font-medium text-red-500">
              Total Expenses
            </h3>
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
            <h3 className="text-base font-medium text-green-700">
              Total Income
            </h3>
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

        <RecentTransactions />
      </section>

      {modal && (
        <div className="fixed top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.5)]">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-2 bg-white max-w-lg w-full rounded-lg">
            {openModal === "income" ? (
              <>
                <h2 className="flex justify-between px-5 font-semibold text-2xl my-5">
                  <span>Add Income</span>
                  <i
                    className="bx bx-x cursor-pointer text-3xl"
                    onClick={() => setModal(false)}
                  ></i>
                </h2>
                <form className="px-4 flex flex-col gap-5">
                  <input
                    type="number"
                    className="border-2 border-blue-200 w-full h-12 outline-none rounded-lg px-3 placeholder:text-blue-200"
                    placeholder="Enter Amount"
                  />
                  <select className="border-2 border-blue-200 w-full h-12 outline-none rounded-lg px-3 placeholder:text-blue-200">
                    <option value="Salary">Salary</option>
                    <option value="Freelance Income">Freelance Income</option>
                    <option value="Affiliate Marketing">
                      Affiliate Marketing
                    </option>
                    <option value="Business">Business</option>
                    <option value="Youtube Income">Youtube Income</option>
                    <option value="Rent Income">Rent Income</option>
                    <option value="other">Other</option>
                  </select>
                  <button className="bg-blue-400 py-3 rounded-lg text-xl font-semibold text-blue-100">
                    Add Income
                  </button>
                </form>
              </>
            ) : null}

            {openModal === "expense" ? (
              <>
                <h2 className="flex justify-between font-semibold text-2xl my-5 px-5">
                  <span>Add Expense</span>
                  <i
                    className="bx bx-x cursor-pointer text-3xl"
                    onClick={() => setModal(false)}
                  ></i>
                </h2>
                <form className="px-4 flex flex-col gap-5">
                  <input
                    type="number"
                    className="border-2 border-blue-200 w-full h-12 outline-none rounded-lg px-3 placeholder:text-blue-200"
                    placeholder="Enter Amount"
                  />
                  <select className="border-2 border-blue-200 w-full h-12 outline-none rounded-lg px-3 placeholder:text-blue-200">
                    <option value="Groseries">Groseries</option>
                    <option value="Rent payment">Rent payment</option>
                    <option value="Loan/Emi payment">Loan/Emi payment</option>
                    <option value="Electricity / water bill">
                      Electricity / water bill
                    </option>
                    <option value="Movie tickets">Movie tickets</option>
                    <option value="other">other</option>
                  </select>
                  <button className="bg-blue-400 py-3 rounded-lg text-xl font-semibold text-blue-100">
                    Add Expense
                  </button>
                </form>
              </>
            ) : null}
          </div>
        </div>
      )}
    </main>
  );
};

export default Dashboard;
