import { motion } from "motion/react"; // eslint-disable-line no-unused-vars

/**
 * Fully customizeable button component that takes
 * className, url, text, ariaLabel, and Motion props as props.
 *
 * @param {*} props className, url, text, ariaLabel, initial, animate, whileInView, variants
 */
const Button = ({
  className,
  url,
  text,
  ariaLabel,
  initial,
  animate,
  whileInView,
  variants,
}) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      className={`rounded-text-bg text-lg font-bold ${className}`}
      aria-label={ariaLabel}
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 1.15 }}
      variants={variants}
    >
      {text}
    </motion.a>
  );
};

export default Button;
