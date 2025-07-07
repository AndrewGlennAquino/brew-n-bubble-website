import { motion } from "motion/react"; // eslint-disable-line no-unused-vars
import tempBobaVideo from "../assets/videos/temp-boba-video.mp4";
import Button from "./Button.jsx";

/**
 * Hero component with store branding, view menu button, and looping video background
 */
const Hero = () => {
  // Animation variants for the text container
  const textContainerVariants = {
    animateFadeIn: {
      transition: { delayChildren: 0.25, staggerChildren: 0.15 },
    },
  };

  // Animation variants for the text
  const textVariants = {
    initial: { scale: 0 },
    animateFadeIn: {
      scale: 1,
      transition: {
        duration: 0.25,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="container h-screen mp-default" aria-label="Hero">
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

      {/* Transparent background filter that brightens video */}
      <div className="bg-snow/15 w-screen h-screen absolute inset-0 -z-10" />

      {/* Text and button container */}
      <motion.div
        className="text-butter w-full h-full flex flex-col justify-center gap-4"
        initial="initial"
        animate="animateFadeIn"
        variants={textContainerVariants}
      >
        {/* Hero subtext */}
        <motion.p
          className="rounded-text-bg text-lg xl:text-xl font-bold"
          variants={textVariants}
        >
          Welcome to
        </motion.p>

        {/* Hero header */}
        <motion.h1
          className="rounded-text-bg font-pacifico text-glow text-5xl xl:text-6xl"
          variants={textVariants}
        >
          Brew 'n Bubble
        </motion.h1>

        {/* View our menu button */}
        <Button
          style="bg-butter text-night"
          url="https://direct.chownow.com/order/34791/locations/52608"
          text="View Our Menu"
          ariaLabel="View our menu button"
          variants={textVariants}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
