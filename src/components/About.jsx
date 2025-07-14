import { motion } from "motion/react"; // eslint-disable-line no-unused-vars
import tempAboutImage1 from "../assets/images/temp-about-image-1.jpg";
import tempAboutImage2 from "../assets/images/temp-about-image-2.jpg";
import tempAboutImage3 from "../assets/images/temp-about-image-3.jpg";

/**
 * About component with animated header, text, and image
 */
const About = () => {
  // Images for image ticker
  const images = [tempAboutImage1, tempAboutImage2, tempAboutImage3];

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
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for image ticker
  const tickerVariants = {
    initial: { x: 0 },
    animateTicker: {
      x: "-100%",
      transition: { duration: 30, repeat: Infinity, ease: "linear" },
    },
  };

  return (
    <section
      className="mp-default flex justify-center items-center relative"
      aria-label="About"
    >
      {/* Container */}
      <motion.div
        className="container flex flex-col lg:flex-row justify-center items-center gap-8"
        initial="initial"
        whileInView="animateFadeIn"
        viewport={{ amount: 0.5, once: true }}
        variants={parentVariants}
      >
        {/* About header */}
        <motion.div
          className="bg-coffee text-snow w-full h-full p-4 lg:p-8 flex flex-col gap-8 rounded-2xl"
          variants={childrenVariants}
        >
          <h1>About us</h1>

          {/* About text */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            neque nam numquam id officia voluptate dolores, mollitia corporis
            doloremque laudantium, corrupti veritatis similique. Pariatur unde
            nam, repellendus debitis illum aut? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Possimus aperiam sequi id officia ea
            neque dolore modi. Magni possimus laudantium omnis odit quas, at
            facere quisquam fugit, dolor ullam commodi?
          </p>
        </motion.div>

        {/* About image ticker container */}
        <div
          className="w-full flex overflow-x-hidden rounded-2xl"
        >
          {/* Animated ticker images */}
          <motion.div
            className="image-ticker"
            initial="initial"
            animate="animateTicker"
            variants={tickerVariants}
          >
            {images.map((image, index) => {
              return (
                <div key={`${image}-${index}`} className="image-ticker-item">
                  <img
                    src={image}
                    alt={`${image}`}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              );
            })}
          </motion.div>

          {/* Animated ticker images */}
          <motion.div
            className="image-ticker"
            initial="initial"
            animate="animateTicker"
            variants={tickerVariants}
          >
            {images.map((image, index) => {
              return (
                <div key={`${image}-${index}`} className="image-ticker-item">
                  <img
                    src={image}
                    alt={`${image}`}
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
