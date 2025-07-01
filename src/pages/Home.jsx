import { motion } from "motion/react";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <section id="hero" className="w-screen h-screen relative">
      <Hero />
      <div className="overflow-x-hidden h-screen"/>
    </section>
  );
};

export default Home;
