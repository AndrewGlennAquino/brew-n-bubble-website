import { motion } from "motion/react"; // eslint-disable-line no-unused-vars

/**
 * Vine component that adds an svg to the background of a container, positioned
 * based on user selection
 * @param {*} props left
 */
const Vine = ({ left = false }) => {
  return (
    <div
      className={`hidden md:block ${
        left
          ? "bg-[url(./assets/svgs/wave-haikei-left.svg)]"
          : "bg-[url(./assets/svgs/wave-haikei-right.svg)]"
      } bg-cover bg-center bg-no-repeat h-full absolute inset-0 -z-10`}
    />
  );
};

export default Vine;
