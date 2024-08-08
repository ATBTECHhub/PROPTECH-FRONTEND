import React from "react";
import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import News from "../components/News";
import Features from "../components/Features";
import Facility from "../components/Facility";
import Aboutus from "../components/Aboutus";

const Home = () => {
  return (
    <>
      <section className="bg-heroImage bg-cover bg-center">
        <Navbar />
        <Herosection />
      </section>

      <News />
      <Features />
      <Facility />
      <Aboutus />
    </>
  );
};

export default Home;
