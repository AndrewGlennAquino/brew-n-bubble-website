import { motion } from "motion/react"; // eslint-disable-line no-unused-vars
import caribouImage from "../assets/images/caribou.png";

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
          className="container bg-caribou card-shadow absolute top-0 bottom-0 -z-10 rounded-4xl"
          variants={childrenVariants}
        />

        {/* Sourcing image */}
        <motion.div
          className="w-64 h-auto m-4 flex-shrink-0"
          variants={childrenVariants}
        >
          <img
            src={caribouImage}
            alt="Caribou logo"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Sourcing text container */}
        <motion.div
          className="text-snow m-4 flex flex-col gap-4"
          variants={childrenVariants}
        >
          {/* Sourcing header */}
          <h1>Sourcing</h1>

          {/* Sourcing text */}
          <p>
            There is nothing we love more than to discover new varieties of
            coffee beans to join our collection. Through close relationships
            with farmers, we carefully select the finest coffee varieties so
            every cup in your hands is nothing short of perfect. Sourcing from
            Caribou Coffee, we make a commitment to quality which is the heart
            of everything we do.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Sourcing;
