import { useState } from "react";
import { useFirebase } from "../context/firebaseContext";

const ModalForm = ({ modal, openModal, setModal }) => {
  const { addTransactions, setEditMode } = useFirebase();
  const [income, setIncome] = useState("");
  const [incomeSource, setIncomeSource] = useState("Salary");
  const [expense, setExpense] = useState("");
  const [expenseSource, setExpenseSource] = useState("Rent payment");

  const handleIncome = (e) => {
    e.preventDefault();
    if (!income || !incomeSource) return;
    addTransactions(income, incomeSource, "Income", Date.now());
    setModal(false);
    setIncome("");
    setIncomeSource("Salary");
  };

  const handleExpense = (e) => {
    e.preventDefault();
    if (!expense || !expenseSource) return;
    addTransactions(expense, expenseSource, "Expense", Date.now());
    setModal(false);
    setExpense("");
    setExpenseSource("Rent payment");
  };

  return (
    modal && (
      <div className="fixed top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.5)]">
        <div className="animation w-full h-screen">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-2 bg-white max-w-lg w-full rounded-lg">
            {openModal === "Income" ? (
              <div className="">
                <h2 className="flex justify-between px-5 font-semibold text-2xl my-5">
                  <span>Add Income</span>
                  <i
                    className="bx bx-x cursor-pointer text-3xl"
                    onClick={() => {
                      setModal(false);
                      setEditMode(false);
                    }}
                  ></i>
                </h2>
                <form
                  className="px-4 flex flex-col gap-5"
                  onSubmit={handleIncome}
                >
                  <input
                    type="number"
                    className="border-2 border-blue-200 w-full h-12 outline-none rounded-lg px-3 placeholder:text-blue-200"
                    placeholder="Enter Amount"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                  />
                  <select
                    value={incomeSource}
                    onChange={(e) => setIncomeSource(e.target.value)}
                    className="border-2 border-blue-200 w-full h-12 outline-none rounded-lg px-3 placeholder:text-blue-200"
                  >
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
              </div>
            ) : null}

            {openModal === "Expense" ? (
              <>
                <h2 className="flex justify-between font-semibold text-2xl my-5 px-5">
                  <span>Add Expense</span>
                  <i
                    className="bx bx-x cursor-pointer text-3xl"
                    onClick={() => {
                      setModal(false);
                      setEditMode(false);
                    }}
                  ></i>
                </h2>
                <form
                  className="px-4 flex flex-col gap-5"
                  onSubmit={handleExpense}
                >
                  <input
                    type="number"
                    className="border-2 border-blue-200 w-full h-12 outline-none rounded-lg px-3 placeholder:text-blue-200"
                    placeholder="Enter Amount"
                    value={expense}
                    onChange={(e) => setExpense(e.target.value)}
                  />
                  <select
                    value={expenseSource}
                    onChange={(e) => setExpenseSource(e.target.value)}
                    className="border-2 border-blue-200 w-full h-12 outline-none rounded-lg px-3 placeholder:text-blue-200"
                  >
                    <option value="Rent payment">Rent payment</option>
                    <option value="Groseries">Groseries</option>
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
      </div>
    )
  );
};

export default ModalForm;
