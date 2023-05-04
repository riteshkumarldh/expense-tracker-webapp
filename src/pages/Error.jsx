import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="container mx-auto px-5">
      <div className="flex flex-col gap-10 justify-center items-center h-screen">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-violet-600">
          404 Page not Found
        </h1>
        <Link
          className="px-6 py-2 bg-violet-800 text-violet-100 rounded"
          to="/"
        >
          Home Page
        </Link>
      </div>
    </section>
  );
};

export default Error;
