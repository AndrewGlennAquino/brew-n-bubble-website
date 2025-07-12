import { useContext } from "react";
import ScrolledContext from "../contexts/ScrolledContext";
import { motion, AnimatePresence } from "motion/react"; // eslint-disable-line no-unused-vars
import Button from "./Button";

/**
 * Header component that contains the logo and order now button
 */
const Header = () => {
  // Extract scrolled state from context
  const scrolled = useContext(ScrolledContext);

  // Animation variants that changes the background color on scroll
  const headerBackgroundVariants = {
    initial: {
      opacity: 0,
    },
    animateBackground: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Animation variants that changes the button style on scroll
  const buttonVariants = {
    initial: {
      opacity: 0,
      pointerEvents: "none",
    },
    animateButton: {
      opacity: 1,
      pointerEvents: "auto",
    },
  };

  return (
    // If the user scrolls below the hero, change header style
    <header className={`fixed z-10 top-0 left-0 right-0`}>
      {/* Header background */}
      <motion.div
        className={`bg-snow w-full h-19 fixed top-0 left-0 right-0 -z-10`}
        initial="initial"
        animate={scrolled ? ["animateBackground", "animateText"] : null}
        variants={headerBackgroundVariants}
      />

      {/* Content container */}
      <div className="container mp-default my-0 flex justify-between items-center relative">
        {/* Animate exit animations */}
        <AnimatePresence>
          {/* Hero logo */}
          <motion.h1
            key="hero-logo"
            className={`text-butter`}
            initial={{ opacity: 0, scale: 0 }}
            animate={
              scrolled
                ? { opacity: 0, scale: 0, transition: { duration: 0.5 } }
                : { opacity: 1, scale: 1, transition: { duration: 0.5 } }
            }
          >
            Brew 'n Bubble
          </motion.h1>

          {/* Sticky logo */}
          <motion.h1
            key="sticky-logo"
            className="text-forest absolute"
            initial={{ opacity: 0 }}
            animate={
              scrolled
                ? { opacity: 1, transition: { duration: 0.5 } }
                : null
            }
          >
            Brew 'n Bubble
          </motion.h1>
        </AnimatePresence>

        {/* Order now button */}
        <Button
          className="bg-forest text-snow"
          url="https://direct.chownow.com/order/34791/locations/52608"
          text="Order Now"
          ariaLabel="Order now button"
          initial="initial"
          animate={scrolled ? "animateButton" : null}
          variants={buttonVariants}
        />
      </div>
    </header>
  );
};

export default Header;
