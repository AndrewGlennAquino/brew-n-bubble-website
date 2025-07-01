import { motion } from "motion/react";
import { Link } from "react-router-dom";
import tempBobaVideo from "../assets/videos/temp-boba-video.mp4";

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
        ease: "easeOut"
      }
    },
  };

  return (
    <div className="container h-screen mp-default">
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
      <div className="bg-snow/15 w-screen h-screen absolute inset-0 -z-10" />

      {/* Text container */}
      <motion.div
        className="text-coffee w-full h-full flex flex-col justify-center gap-4"
        initial="initial"
        animate="animateFadeIn"
        variants={textContainerVariants}
      >
        <motion.p
          className="rounded-text-bg text-lg lg:text-2xl font-bold"
          variants={textVariants}
        >
          Welcome to
        </motion.p>

        <motion.h1
          className="rounded-text-bg text-5xl lg:text-6xl"
          variants={textVariants}
        >
          Brew 'n Bubble
        </motion.h1>

        <motion.div
          className="rounded-text-bg bg-tan text-coffee text-lg lg:text-2xl font-bold"
          variants={textVariants}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 1.15 }}
        >
          <Link to="#">View Our Menu</Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
