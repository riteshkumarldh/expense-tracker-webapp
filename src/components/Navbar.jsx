import { Link, NavLink, useNavigate } from "react-router-dom";
import { useFirebase } from "../context/firebaseContext";

const navItems = [
  {
    id: 1,
    path: "/",
    name: "Home",
    protected: false,
  },
  {
    id: 2,
    path: "/dashboard",
    name: "Dashboard",
    protected: true,
  },
  {
    id: 3,
    path: "/transactions",
    name: "Transactions",
    protected: true,
  },
  {
    id: 4,
    path: "/about",
    name: "About",
    protected: false,
  },
];

const Navbar = ({ mobileMenu, setMobileMenu }) => {
  const { logOutUser, user } = useFirebase();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOutUser();
    navigate("/");
  };
  return (
    <nav
      className={`fixed top-0 z-10 max-w-sm w-full bg-slate-100 h-screen transition-all ${
        mobileMenu ? "right-0" : "right-[-384px]"
      } unset`}
    >
      <button
        className="lg:hidden absolute top-2 left-2 text-4xl active:scale-95"
        onClick={() => setMobileMenu(false)}
      >
        <i className="bx bx-x"></i>
      </button>
      <div className="pt-20 ml-5 flex flex-col gap-5 lg:flex-row lg:pt-0 lg:ml-0 lg:items-center lg:gap-40">
        <ul className="flex flex-col gap-8 lg:flex-row">
          {navItems.map((item) => {
            return user ? (
              <li key={item.id} onClick={() => setMobileMenu(false)}>
                <NavLink
                  className="text-slate-500 font-semibold hover:text-blue-600 transition-all"
                  to={item.path}
                >
                  {item.name}
                </NavLink>
              </li>
            ) : (
              !item.protected && (
                <li key={item.id} onClick={() => setMobileMenu(false)}>
                  <NavLink
                    className="text-slate-500 font-semibold hover:text-blue-600 transition-all"
                    to={item.path}
                  >
                    {item.name}
                  </NavLink>
                </li>
              )
            );
          })}
        </ul>

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
          {!user ? (
            <>
              <Link
                to="/login"
                className="font-bold text-blue-600"
                onClick={() => setMobileMenu(false)}
              >
                Log In
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-blue-500 text-blue-100 font-semibold rounded w-max flex items-center justify-center gap-1 group "
                onClick={() => setMobileMenu(false)}
              >
                <span>Become a Member</span>
                <i className="bx bx-chevron-right text-2xl group-hover:rotate-90 transition-all"></i>
              </Link>
            </>
          ) : (
            <button
              className="bg-blue-600 text-blue-100 px-4 py-3 rounded-md font-semibold"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
