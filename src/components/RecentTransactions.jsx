import { Link } from "react-router-dom";
import { useFirebase } from "../context/firebaseContext";

const RecentTransactions = () => {
  const { wallet, handleDelete, handleEdit } = useFirebase();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center lg:gap-5">
      <div className="bg-white mt-10 rounded-xl">
        <div className="py-5 px-1 md:px-4">
          <h2 className="text-center uppercase text-lg font-semibold md:text-xl">
            Recent Transactions
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {wallet.slice(0, 5).map((item) => {
            return (
              <div
                key={item.id}
                className={`grid setgrid gap-2 items-center px-2 py-4 border-l-4 rounded-md md:px-4 ${
                  item.type === "Expense"
                    ? "border-red-600 bg-red-50"
                    : "bg-green-50 border-green-600"
                }  `}
              >
                <h3 className="font-medium">{item.source}</h3>
                <h4
                  className={`hidden sm:block font-medium w-max ${
                    item.type === "Expense"
                      ? "text-red-400 bg-red-100"
                      : "text-green-500 bg-green-100"
                  }  px-3 py-1  rounded-md`}
                >
                  {item.type}
                </h4>
                <p
                  className={`font-medium ${
                    item.type === "Expense" ? "text-red-400" : "text-green-500"
                  } `}
                >
                  ₹{item.amount}
                </p>
                <div className="flex justify-between">
                  <button onClick={() => handleEdit(item.id, item.type)}>
                    <i className="bx bxs-edit"></i>
                  </button>
                  <button onClick={() => handleDelete(item.id)}>
                    <i className="bx bx-trash"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <Link
          to="/transactions"
          className="text-md text-blue-500 relative flex justify-center items-center mt-4 py-2"
        >
          <span className="font-medium">See All</span>
          <i className="bx bx-right-arrow-alt font-bold"></i>
        </Link>
      </div>

      <div className="mt-10 flex flex-col gap-3">
        <div className="h-10 w-full bg-green-300 text-green-50 flex items-center px-3 border-green-300">
          Income
        </div>
        <div className="h-10 w-[40%] bg-red-300 text-red-50 flex items-center px-3 border-red-300">
          Expense
        </div>
        <div className="h-10 w-full bg-yellow-300 text-yellow-50 flex items-center px-3 border-yellow-300">
          Balance
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
