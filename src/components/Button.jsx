import { motion } from "motion/react"; // eslint-disable-line no-unused-vars

/**
 * Fully customizeable button component that takes
 * style, url, text, ariaLabel, and Motion props as props.
 *
 * @param {*} props style, url, text, ariaLabel, initial, animate, variants
 */
const Button = ({
  style,
  url,
  text,
  ariaLabel,
  initial,
  animate,
  variants,
}) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      className={`rounded-text-bg text-lg xl:text-xl font-bold ${style}`}
      aria-label={ariaLabel}
      initial={initial}
      animate={animate}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 1.15 }}
      variants={variants}
    >
      {text}
    </motion.a>
  );
};

export default Button;
