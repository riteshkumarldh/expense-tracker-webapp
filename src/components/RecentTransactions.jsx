import { Link } from "react-router-dom";

const RecentTransactions = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center lg:gap-5">
      <div className="bg-white mt-10 rounded-xl">
        <div className="flex justify-between gap-2 py-5 px-1 md:px-4">
          <h2 className="text-lg font-semibold md:text-xl">
            Recent Transactions
          </h2>
          <Link
            to="/transactions"
            className="bg-blue-500 px-2 py-1 rounded text-blue-50 flex items-center gap-1"
          >
            <span>All</span> <i className="bx bx-right-arrow-alt"></i>
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between px-2 py-2 border-l-4 rounded-md border-red-600 bg-red-50 md:px-4">
            <h3 className="font-medium">Groseries</h3>
            <h4 className="font-medium text-red-400 px-3 py-1 bg-red-100 rounded-md">
              Expense
            </h4>
            <p className="font-medium text-red-400">₹200</p>
          </div>
          <div className="flex items-center justify-between px-2 py-2 border-l-4 rounded-md bg-green-50 border-green-600">
            <h3 className="font-medium">Groseries</h3>
            <h4 className="font-medium text-green-500 px-3 py-1 bg-green-100 rounded-md">
              Income
            </h4>
            <p className="font-medium text-green-500">₹200</p>
          </div>
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
