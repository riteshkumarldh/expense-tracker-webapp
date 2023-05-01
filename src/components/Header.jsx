import { Link } from "react-router-dom";
import { useState } from "react";

// component
import Navbar from "./Navbar";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <header>
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-blue-800 logo">
          Wallet
        </Link>

        <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />

        <button
          className="lg:hidden text-3xl active:scale-95 text-blue-900"
          onClick={() => setMobileMenu(true)}
        >
          <i className="bx bx-menu"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
