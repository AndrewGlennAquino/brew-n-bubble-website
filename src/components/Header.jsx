import { useContext } from "react";
import ScrolledContext from "../contexts/ScrolledContext";
import { motion } from "motion/react"; // eslint-disable-line no-unused-vars
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
      backgroundColor: "rgba(249, 245, 245, 0)",
      color: "rgb(255, 255, 133)",
    },
    animateBackground: {
      backgroundColor: "rgba(249, 245, 245, 1)",
      transition: { duration: 0.5 },
    },
    animateText: { color: "rgb(48, 95, 60)" },
  };

  // Animation variants that changes the button style on scroll
  const buttonVariants = {
    initial: {
      display: "none",
      opacity: 0
    },
    animateButton: {
      display: "block",
      opacity: 1,
      backgroundColor: "rgba(48, 95, 60)",
      color: "rgb(249, 245, 245)",
    },
  };

  return (
    // If the user scrolls below the hero, change header style
    <motion.header
      className={`${scrolled ? 'shadow' : null} fixed z-10 top-0 left-0 right-0`}
      initial="initial"
      animate={scrolled ? ["animateBackground", "animateText"] : null}
      variants={headerBackgroundVariants}
    >
      {/* Content container */}
      <div className="container mp-default flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
        >
          Brew 'n Bubble
        </motion.h1>

        {/* Order now button */}
        <Button
          style={`text-[rgb(249, 245, 245)]`}
          url="https://direct.chownow.com/order/34791/locations/52608"
          text="Order Now"
          ariaLabel="Order now button"
          initial="initial"
          animate={scrolled ? "animateButton" : null}
          variants={buttonVariants}
        />
      </div>
    </motion.header>
  );
};

export default Header;
