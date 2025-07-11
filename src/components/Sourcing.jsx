import { motion } from "motion/react"; // eslint-disable-line no-unused-vars
import FadeIn from "./FadeIn";
import caribouImage from "../assets/images/caribou.png";

/**
 * Sourcing component with animated header, text, and image
 */
const Sourcing = () => {
  // Animation variants that changes the background color when in view
  const sectionBackgroundVariants = {
    initial: {
      backgroundColor: "rgba(249, 245, 245, 0)",
    },
    animateBackground: {
      backgroundColor: "rgba(122, 176, 189, 1)",
      transition: { duration: 1 },
    },
  };

  return (
    <section
      className="mp-default flex justify-center items-center relative"
      aria-label="Sourcing"
    >
      {/* Content Background */}
      <motion.div
        className="container absolute top-0 bottom-0 -z-10 rounded-4xl"
        initial="initial"
        whileInView="animateBackground"
        viewport={{ amount: 0.5, once: true }}
        variants={sectionBackgroundVariants}
      />

      {/* Animated container */}
      <FadeIn className="container flex flex-col-reverse sm:flex-row-reverse justify-center items-center gap-8">
        {/* Sourcing header */}
        <div className="text-snow sm:pr-8 flex flex-col gap-8">
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
        </div>

        {/* Sourcing image */}
        <div className="w-64 h-auto sm:pl-8">
          <img
            src={caribouImage}
            alt="Caribou logo"
            className="w-full h-full object-cover"
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Sourcing;
