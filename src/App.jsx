import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import ScrolledContext from "./contexts/ScrolledContext.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";

/**
 *  App component that contains all application content
 */
const App = () => {
  // Hold state if user scrolled below scrollbar origin
  const [scrolled, setScrolled] = useState(false);

  // Hold state of the current window height
  const [windowHeight, setWindowHeight] = useState(window.innerHeight - 1);

  // On screen resize, set windowHeight state to new height then clean up
  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight - 1);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Motion hook that tracks the absolute Y scroll position and returns a MotionValue object
  const { scrollY } = useScroll();

  /**
   * Motion hook that extracts the value from the scrollY MotionValue object when it changes.
   * Use the latest value to track if a user is at the scroll bar origin or below it.
   */
  useMotionValueEvent(scrollY, "change", (latest) => {
    latest > windowHeight ? setScrolled(true) : setScrolled(false);
  });

  return (
    <>
      {/* Pass scrolled value to all descendants */}
      <ScrolledContext.Provider value={scrolled}>
        <Header />
        <main>
          <Hero />
          <section className="h-screen" aria-label="Temp" />
        </main>
      </ScrolledContext.Provider>
    </>
  );
};

export default App;
