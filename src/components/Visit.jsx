import { motion } from "motion/react"; // eslint-disable-line no-unused-vars
import tempVisitImage from "../assets/images/temp-visit-image.jpg";

/**
 * Visit component with animated header, text, and image
 */
const Visit = () => {
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
      aria-label="Come visit"
    >
      {/* Container */}
      <motion.div
        className="container flex flex-col-reverse sm:flex-row justify-center items-center gap-8 relative"
        initial="initial"
        whileInView="animateFadeIn"
        viewport={{ amount: 0.5, once: true }}
        variants={parentVariants}
      >
        {/* Visit image */}
        <div className="w-full sm:w-72 lg:w-96 flex-shrink-0 rounded-2xl">
          <img
            src={tempVisitImage}
            alt="Temporary come visit image"
            loading="lazy"
            className="card-shadow w-full h-full object-contain rounded-2xl"
          />
        </div>

        {/* Visit text container */}
        <motion.div
          className="bg-snow text-night card-shadow p-4 lg:p-8 flex flex-col gap-4 relative rounded-2xl"
          variants={childrenVariants}
        >
          {/* Visit header */}
          <h1>Come Visit!</h1>

          {/* Visit text */}
          <p>
            We're your go-to spot for the most mesmerizing bubble tea creations
            and tantalizing flavors in town. Come visit us at 2415 Bowes Rd
            Elgin IL (Walmart Plaza).
          </p>

          {/* Hours container */}
          <div>
            {/* Hours header */}
            <h2 className="font-bold">Store Hours</h2>
            {/* Days of the week */}
            <div className="flex gap-16">
              <ul>
                <li>Monday</li>
                <li>Tuesday</li>
                <li>Wednesday</li>
                <li>Thursday</li>
                <li>Friday</li>
                <li>Saturday</li>
                <li>Sunday</li>
              </ul>

              {/* Hours for each day */}
              <ul>
                <li>11:00 AM - 9:00 PM</li>
                <li>11:00 AM - 9:00 PM</li>
                <li>11:00 AM - 9:00 PM</li>
                <li>11:00 AM - 9:00 PM</li>
                <li>11:00 AM - 10:00 PM</li>
                <li>9:00 AM - 10:00 PM</li>
                <li>9:00 AM - 10:00 PM</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Visit;
