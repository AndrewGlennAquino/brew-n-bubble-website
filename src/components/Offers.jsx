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
          className="bg-forest text-snow card-shadow p-4 lg:p-8 flex flex-col gap-4 relative rounded-2xl"
          variants={childrenVariants}
        >
          {/* Offers header */}
          <h1>What We Offer</h1>

          {/* Offers text */}
          <p>
            We provide Caribou Coffee and the best bubble tea in town. We're a
            one stop shop for the whole family with something for everyone.
            <span>Quality, you can trust!</span>
            Brew and Bubble is committed to providing only the best quality
            drinks, food, and service, ensuring that your experience is nothing
            less than perfect.
            <span>Best bubble tea in town!</span>
            Our products are made fresh daily with premium ingredients to ensure
            that you get just the right amount of chewy tapioca.
          </p>
        </motion.div>

        {/* Offers image */}
        <div className="card-shadow w-full sm:w-72 lg:w-96 flex-shrink-0 rounded-2xl">
          <img
            src={tempOffersImage}
            alt="Temporary What we offer image"
            loading="lazy"
            className="w-full h-full object-contain rounded-2xl"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Offers;
