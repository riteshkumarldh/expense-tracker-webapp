import { Link } from "react-router-dom";

const HeroSection = ({ homeImg1, homeImg2, homeImg3 }) => {
  return (
    <section className="container mx-auto px-4 py-14 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10">
      <div className="max-w-sm mx-auto text-center md:max-w-lg lg:text-left lg:mx-0">
        <h1 className="text-4xl font-extrabold md:text-6xl">
          Manage <span className="text-blue-600">Expenses</span> Like an Expert
        </h1>
        <p className="text-base mt-3 text-slate-600 lg:mt-8 lg:mb-6 lg:max-w-md">
          Wallet is helping you to Tracking your all Incomes and Expenses. So,
          you save better in the future
        </p>
        <Link
          to="/register"
          className="mt-5 bg-slate-800 w-max px-6 py-3 text-white block rounded-3xl uppercase hover:bg-slate-600 transition-all font-semibold mx-auto lg:mx-0"
        >
          Get Started
        </Link>
      </div>
      {/* right */}
      <div className="hidden lg:block relative">
        <figure className="aspect-auto rounded-3xl overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={homeImg1}
            alt="home1"
          />
        </figure>
        <figure className="absolute top-1/2 -left-24 -translate-y-1/2 w-48 h-32 xl:w-64 xl:-left-32">
          <img src={homeImg2} alt="home2" />
        </figure>
        <figure className="absolute -right-8 top-8 w-48">
          <img src={homeImg3} alt="home3" />
        </figure>
      </div>
    </section>
  );
};

export default HeroSection;
