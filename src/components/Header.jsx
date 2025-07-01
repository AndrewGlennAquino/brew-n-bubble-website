import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Link } from "react-router-dom";

const Header = () => {
  // Set state if hamburger menu is clicked
  const [clicked, setClicked] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  // Motion hook that tracks the absolute Y scroll position and returns a MotionValue object
  const { scrollY } = useScroll();

  /**
   * Motion hook that extracts the value from the scrollY MotionValue object when it changes.
   * Use the latest value to track if a user scrolls down from the top of the page, and change
   * the header background if the user is at the very top of the page or scrolled past the top.
   */
  useMotionValueEvent(scrollY, "change", (latest) => {
    latest > 0 ? setScrolled(true) : setScrolled(false);
  });

  // On click, store the inverse of the current state
  const handleClick = (e) => {
    e.preventDefault();
    setClicked(!clicked);
  };

  // Animation variants for top and bottom bars for hamburger menu
  const topBottomBarVariants = {
    animateTop: {
      rotate: 45,
      y: "0.875rem",
      transition: {
        duration: 0.15,
      },
    },
    animateBottom: {
      rotate: -45,
      y: "-0.875rem",
      transition: { duration: 0.15 },
    },
    animateHover: { x: 10 },
  };

  // Animation variants for middle bar for hamburger menu
  const middleBarVariants = {
    animateMiddle: { opacity: 0 },
  };

  const headerBackgroundVariants = {
    initial: { backgroundColor: "rgba(255, 212, 202, 0.75)" },
    animateBackground: { backgroundColor: "rgba(255, 212, 202, 1)", transition: { duration: 0.25 }}
  };

  return (
    <motion.nav
      className={"fixed z-10 top-0 left-0 right-0"}
      initial="initial"
      animate={scrolled ? "animateBackground" : null}
      variants={headerBackgroundVariants}
    >
      <div className="container mp-default flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          className="text-coffee text-4xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { duration: 0.25 } }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 1.15 }}
        >
          <Link to="/">Brew 'n Bubble</Link>
        </motion.h1>

        {/* Hamburger menu stack */}
        <motion.button
          id="hamburger-nav"
          className="w-12 h-12 flex flex-col justify-center items-center gap-2"
          aria-label="hamburger-menu"
          onClick={handleClick}
          whileHover="animateHover"
        >
          <motion.div
            className="bar"
            animate={clicked ? "animateTop" : null}
            variants={topBottomBarVariants}
          />
          <motion.div
            className="bar"
            animate={clicked ? "animateMiddle" : null}
            variants={middleBarVariants}
          />
          <motion.div
            className="bar"
            animate={clicked ? "animateBottom" : null}
            variants={topBottomBarVariants}
          />
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Header;
