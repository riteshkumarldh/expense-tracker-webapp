const ContactSection = ({ contactImg, handleSubmit, email, setEmail }) => {
  return (
    <section>
      <div className="container mx-auto px-4 py-16 grid gap-8 lg:grid-cols-2 lg:items-center">
        {/* left */}
        <div className="aspect-[635/450] rounded-3xl overflow-hidden mx-auto">
          <img className="rounded-3xl" src={contactImg} alt="contact" />
        </div>
        {/* right */}
        <div className="max-w-md mx-auto">
          <div className="text-center max-w-md mx-auto lg:text-left">
            <h3 className="text-md font-bold text-red-600 lg:mb-2">
              SAVE MORE TIME
            </h3>
            <h2 className="text-3xl font-bold text-slate-800 lg:text-4xl lg:mb-4">
              And Boost Productivity
            </h2>
            <p className="mt-2 text-slate-500">
              Your employees can bring any success into your business, so we
              need to take care of them
            </p>
          </div>

          <form className="mt-6" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              className="bg-slate-100 rounded-3xl h-14 px-6 w-full placeholder:text-zinc-500 outline-slate-600"
              pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="h-14 bg-blue-600 text-blue-100 w-full rounded-3xl mt-3 font-semibold text-lg"
              type="submit"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
