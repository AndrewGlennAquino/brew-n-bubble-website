import { motion } from "motion/react"; // eslint-disable-line no-unused-vars
import tempBobaVideo from "../assets/videos/temp-boba-video.mp4";
import Button from "./Button.jsx";

/**
 * Hero component with store branding, view menu button, and looping video background
 */
const Hero = () => {
  // Animation variants for the parent container that staggers children
  const parentVariants = {
    animateFadeIn: {
      transition: { staggerChildren: 0.25 },
    },
  };

  // Animation variants for the children to fade in
  const childrenVariants = {
    initial: { y: 25, opacity: 0 },
    animateFadeIn: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="container h-screen mp-default my-0" aria-label="Hero">
      {/* Hero background video */}
      <video
        className="w-screen h-screen absolute inset-0 -z-10 object-cover"
        src={tempBobaVideo}
        aria-label="Temporary Boba Video"
        playsInline
        autoPlay
        muted
        loop
      />

      {/* Transparent background filter */}
      <div className="bg-coffee/50 h-screen absolute inset-0 -z-10" />

      {/* Text container */}
      <motion.div 
        className="text-butter w-full h-full flex flex-col justify-center gap-8"
        initial="initial"
        animate="animateFadeIn"  
        variants={parentVariants}
      >
        {/* Hero subtext */}
        <motion.p 
          className="font-pacifico text-2xl xl:text-3xl font-bold leading-none"
          variants={childrenVariants}
        >
          Welcome to
        </motion.p>

        {/* Hero header */}
        <motion.h1 
          className="font-pacifico text-glow text-5xl xl:text-6xl"
          variants={childrenVariants}
        >
          Brew 'n Bubble
        </motion.h1>

        {/* View our menu button */}
        <Button
          className="bg-butter text-night"
          url="https://direct.chownow.com/order/34791/locations/52608"
          text="View Our Menu"
          aria-label="View our menu button"
          variants={childrenVariants}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
