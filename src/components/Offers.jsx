import { motion } from "motion/react"; // eslint-disable-line no-unused-vars
import tempOffersImage from "../assets/images/temp-offers-image.jpg";

/**
 * Offers component with animated header, text, and image
 */
const Offers = () => {
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
      aria-label="Our offers"
    >
      {/* Container */}
      <motion.div
        className="container flex flex-col sm:flex-row justify-center items-center gap-8 relative"
        initial="initial"
        whileInView="animateFadeIn"
        viewport={{ amount: 0.5, once: true }}
        variants={parentVariants}
      >
        {/* Offers text container */}
        <motion.div
          className="text-snow p-4 lg:p-8 flex flex-col gap-8 relative"
          variants={childrenVariants}
        >
          {/* Content background */}
          <motion.div
            className="container bg-forest absolute inset-0 -z-10 rounded-4xl"
            variants={childrenVariants}
          />

          {/* Offers header */}
          <h1>What We Offer</h1>

          {/* Offers text */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            quas cum exercitationem. Dolores possimus, tenetur quae aperiam sed,
            ullam, nihil a odit nemo animi necessitatibus atque nostrum quo
            error blanditiis! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Accusantium nihil quod placeat voluptatem assumenda magni
            consequuntur sint. Autem ratione, illo doloremque suscipit sapiente
            possimus magni similique architecto quaerat, sequi ex.
          </p>
        </motion.div>

        {/* Offers image */}
        <div className="w-full sm:w-72 lg:w-96 flex-shrink-0 rounded-2xl">
          <img
            src={tempOffersImage}
            alt="Temporary What we offer image"
            className="w-full h-full object-contain rounded-2xl"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Offers;
