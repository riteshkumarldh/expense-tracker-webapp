import { useState } from "react";
// components
import FeatureGrid from "../components/FeatureGrid";
import HeroSection from "../components/HeroSection";
import ContactSection from "../components/ContactSection";

// images
import homeImg1 from "../assets/images/home-1.png";
import homeImg2 from "../assets/images/home-2.png";
import homeImg3 from "../assets/images/home-3.png";
import contactImg from "../assets/images/contact.png";

const Home = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email);
    setEmail("");
    alert("submitted");
  };

  return (
    <main className="overflow-hidden">
      {/* hero section */}
      <HeroSection
        homeImg1={homeImg1}
        homeImg2={homeImg2}
        homeImg3={homeImg3}
      />

      {/* features section */}
      <section className="container mx-auto px-4 py-16">
        {/* top */}
        <div className="text-center max-w-md mx-auto">
          <h3 className="text-md font-bold text-red-600">Work Better</h3>
          <h2 className="text-3xl font-bold text-slate-800">
            For Your Business
          </h2>
          <p className="mt-2 text-slate-500">
            We did research what your company needs and here we are providing
            all of them just for you
          </p>
        </div>
        {/* grid */}
        <div className="mt-10 lg:mt-14 grid gap-10 lg:gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <FeatureGrid
            icon="bx bx-shopping-bag"
            title="Share Insights"
            desc="Working together with your team to make decisions"
            color="bg-blue-600"
          />
          <FeatureGrid
            icon="bx bx-wifi-off"
            title="Offline Mode"
            desc="Use the feature while off from internet? sure can"
            color="bg-zinc-800"
          />
          <FeatureGrid
            icon="bx bxs-id-card"
            title="Kanban Mode"
            desc="Organize the report that easy to be understand"
            color="bg-pink-600"
          />
          <FeatureGrid
            icon="bx bxs-plane-alt"
            title="Track Leads"
            desc="See where your money goes
            and comes in business"
            color="bg-red-600"
          />
          <FeatureGrid
            icon="bx bx-globe"
            title="189 Country"
            desc="Working together worldwide
            people from anywhere"
            color="bg-yellow-500"
          />
          <FeatureGrid
            icon="bx bx-gift"
            title="Reward System"
            desc="Motivate your team working
            harder and receive a gift"
            color="bg-purple-800"
          />
        </div>
      </section>

      {/* contact section */}
      <ContactSection
        contactImg={contactImg}
        handleSubmit={handleSubmit}
        email={email}
        setEmail={setEmail}
      />
    </main>
  );
};

export default Home;
