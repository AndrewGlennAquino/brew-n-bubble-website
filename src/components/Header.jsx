import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Header = () => {
  // Set state if hamburger menu is clicked
  const [clicked, setClicked] = useState(false);

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
      transition: {
        duration: 0.15,
      },
    },
    animateHover: {
      x: 10,
    },
  };

  // Animation variants for middle bar for hamburger menu
  const middleBarVariants = {
    animateMiddle: { opacity: 0 },
  };

  return (
    <header className="bg-snow shadow sticky top-0 left-0 right-0">
      <div className="container mp-default flex justify-between items-center">
        <motion.h1
          className="text-4xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.1 }}
        >
          <Link to="/">Brew 'n Bubble</Link>
        </motion.h1>

        <motion.nav
          id="hamburger-nav"
          className="w-12 h-12 flex flex-col justify-center items-center gap-2"
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
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;
