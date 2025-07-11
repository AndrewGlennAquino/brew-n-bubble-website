import { motion } from "motion/react"; // eslint-disable-line no-unused-vars
import FadeIn from "./FadeIn";
import tempAboutImage1 from "../assets/images/temp-about-image-1.jpg";
import tempAboutImage2 from "../assets/images/temp-about-image-2.jpg";
import tempAboutImage3 from "../assets/images/temp-about-image-3.jpg";

/**
 * About component with animated header, text, and image
 */
const About = () => {
  // Images for image ticker
  const images = [tempAboutImage1, tempAboutImage2, tempAboutImage3];

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
      {/* Animated container */}
      <div className="container flex flex-col sm:flex-row justify-center items-center gap-8">
        {/* About header */}
        <div className="bg-snow/25 w-full h-full flex flex-col gap-8 rounded-2xl">
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
        </div>

        {/* About image ticker container*/}
        <div className="w-full flex overflow-x-hidden rounded-2xl">
          {/* Animated ticker images */}
          <motion.div
            className="image-ticker"
            initial="initial"
            animate="animateTicker"
            variants={tickerVariants}
          >
            {images.map((image, index) => {
              return (
                <div className="image-ticker-item">
                  <img
                    key={`${image}-${index}`}
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
                <div className="image-ticker-item">
                  <img
                    key={`${image}-${index}`}
                    src={image}
                    alt={`${image}`}
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
