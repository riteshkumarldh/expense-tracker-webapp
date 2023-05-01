import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-purple-900">
      <div className="container mx-auto px-4 py-10">
        <div className="flex justify-between items-center gap-2">
          <Link to="/" className="text-3xl font-bold text-zinc-200 logo">
            Wallet
          </Link>
          <div className="flex gap-4">
            <a
              href="https://github.com/riteshkumarldh"
              className="text-white text-2xl hover:text-blue-500 transition-all"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://github.com/riteshkumarldh"
              className="text-white text-2xl hover:text-blue-500 transition-all"
            >
              <i className="bx bxl-linkedin-square"></i>
            </a>
          </div>
        </div>

        <div className="text-center mt-8">
          <span className="mr-2 text-slate-300">&copy; 2023</span>
          <a
            className="text-slate-300 underline"
            href="https://github.com/riteshkumarldh"
          >
            Ritesh Kumar
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
