import { motion } from "motion/react"; // eslint-disable-line no-unused-vars

/**
 * FadeIn component that animates or animates while in view the fade in for all children
 * @param {*} props className, animate, children
 */
const FadeIn = ({ className, animate = false, children }) => {
  // Animation variants for the parent container that staggers children
  const parentVariants = {
    animateFadeIn: {
      transition: { delayChildren: 0.25, staggerChildren: 0.25 },
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
    /* Parent container */
    <motion.div
      className={className}
      initial="initial"
      animate={animate ? "animateFadeIn" : null}
      whileInView={animate ? null : "animateFadeIn"}
      variants={parentVariants}
    >
      {/* Encapsulate each child in a div that animates fade in */}
      {children.map((child, index) => (
        <motion.div key={`${child}-animation-${index}`} variants={childrenVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
};

export default FadeIn;
