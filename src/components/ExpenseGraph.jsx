import { useFirebase } from "../context/firebaseContext";

const ExpenseGraph = () => {
  const { income, expense } = useFirebase();
  const percent = (expense / income) * 100 + "%";

  //   console.log(typeof percent);
  return (
    <div className="relative h-10 w-full bg-violet-200 rounded-lg overflow-hidden my-10">
      <span
        style={{ width: percent }}
        className={`absolute top-0 left-0 h-full bg-violet-500`}
      ></span>
    </div>
  );
};

export default ExpenseGraph;
