import { useEffect, useState } from "react";
import ModalForm from "../components/ModalForm";
import { useFirebase } from "../context/firebaseContext";

const Transactions = () => {
  const {
    loading,
    wallet,
    handleEdit,
    handleDelete,
    setOpenModal,
    setModal,
    openModal,
    modal,
  } = useFirebase();

  const [filtered, setFiltered] = useState(wallet);
  const [search, setSearch] = useState("");
  const [selectFilter, setSelectFilter] = useState("");

  useEffect(() => {
    setFiltered(
      wallet.filter((item) => {
        return (
          item.source.toLowerCase().includes(search.toLocaleLowerCase()) &&
          item.type.toLowerCase().includes(selectFilter.toLocaleLowerCase())
        );
      })
    );
  }, [wallet, search, selectFilter]);

  return loading ? (
    <h1 className="text-center my-20 text-3xl">Loading...</h1>
  ) : (
    <>
      <section className="container mx-auto px-4">
        <div className="flex justify-center gap-5 my-10">
          <button
            className="text-blue-100 mt-5 px-4 py-2 bg-blue-500 rounded-md uppercase "
            onClick={() => {
              setOpenModal("Expense");
              setModal(true);
            }}
          >
            Add Expense
          </button>
          <button
            className="text-blue-100 mt-5 px-4 py-2 bg-blue-500 rounded-md uppercase "
            onClick={() => {
              setOpenModal("Income");
              setModal(true);
            }}
          >
            Add Income
          </button>
        </div>
        <div className="bg-gray-100 mb-10">
          <div className="flex justify-between flex-wrap gap-2">
            <form className="max-w-xs w-full flex relative">
              <input
                type="text"
                className="bg-slate-200  border-none h-12 w-full pl-3 pr-10 focus:outline-none rounded"
                placeholder="search by source"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                type="submit"
                className="absolute top-1/2 right-2 -translate-y-1/2 text-2xl"
              >
                <i className="bx bx-search"></i>
              </button>
            </form>
            <div className="flex items-center max-w-xs border w-full">
              <select
                className="w-full bg-slate-200 h-12 rounded px-1 outline-none"
                value={selectFilter}
                onChange={(e) => setSelectFilter(e.target.value)}
              >
                <option value="">Filter by</option>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
              </select>
            </div>
          </div>
          <div
            className={`grid font-semibold setgrid gap-2 items-center px-2 py-4 rounded-md md:px-4 border bg-purple-400 `}
          >
            <h3>Source</h3>
            <h4 className="hidden sm:block font-medium w-max px-3 py-1  rounded-md">
              Type
            </h4>
            <p>Amount</p>
            <div>Actions</div>
          </div>
          <div className="flex flex-col gap-4">
            {filtered.length > 0 ? (
              filtered.map((item) => {
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
                        item.type === "Expense"
                          ? "text-red-400"
                          : "text-green-500"
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
              })
            ) : (
              <h1 className="my-10 text-center font-semibold text-red-400">
                Not Found
              </h1>
            )}
          </div>
        </div>
      </section>
      <ModalForm openModal={openModal} modal={modal} setModal={setModal} />
    </>
  );
};

export default Transactions;
