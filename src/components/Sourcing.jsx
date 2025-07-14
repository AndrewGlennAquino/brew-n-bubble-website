import { motion } from "motion/react"; // eslint-disable-line no-unused-vars
import caribouImage from "../../public/images/caribou.png";

/**
 * Sourcing component with animated header, text, and image
 */
const Sourcing = () => {
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
    <section
      className="mp-default flex justify-center items-center relative"
      aria-label="Sourcing"
    >
      {/* Container */}
      <motion.div
        className="container flex flex-col sm:flex-row justify-center items-center relative"
        initial="initial"
        whileInView="animateFadeIn"
        viewport={{ amount: 0.5, once: true }}
        variants={parentVariants}
      >
        {/* Content background */}
        <motion.div
          className="container bg-caribou absolute top-0 bottom-0 -z-10 rounded-4xl"
          variants={childrenVariants}
        />

        {/* Sourcing image */}
        <motion.div
          className="w-64 h-auto m-4 sm:p-8 flex-shrink-0"
          variants={childrenVariants}
        >
          <img
            src={caribouImage}
            alt="Caribou logo"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Sourcing text container */}
        <motion.div
          className="text-snow m-4 sm:p-8 flex flex-col gap-8"
          variants={childrenVariants}
        >
          {/* Sourcing header */}
          <h1>Sourcing</h1>

          {/* Sourcing text */}
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
      </motion.div>
    </section>
  );
};

export default Sourcing;
