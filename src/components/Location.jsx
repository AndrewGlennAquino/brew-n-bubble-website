import { motion } from "motion/react"; // eslint-disable-line no-unused-vars

/**
 * Location component with animated header and interactive google map
 */
const Location = () => {
  // Get Google Maps public API key from environment variable
  const mapsPublicKey = import.meta.env.VITE_GOOGLE_MAPS_API_PUBLIC_KEY;

  // Animation variants for the container that staggers children
  const parentVariants = {
    animateFadeIn: {
      transition: { delayChildren: 0.25, staggerChildren: 0.25 },
    },
  };

  // Animation variants for the text and map element to fade in
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
    <section
      className="h-full mp-default flex justify-center items-center relative"
      aria-label="Location"
    >
      {/* Animated container */}
      <motion.div 
        className="container w-full h-full flex flex-col jusity-center"
        initial="initial"
        whileInView="animateFadeIn"
        viewport={{ amount: 0.5 }}
        variants={parentVariants}
      >
        {/* Location header */}
        <motion.div 
          className="bg-snow/25 p-2 flex flex-col gap-8"
          variants={childrenVariants}
        >
          <h1>Location</h1>
          <p>2415 Bowes Road, STE 108, Elgin, IL</p>
        </motion.div>

        {/* Google Maps embed API */}
        <motion.div 
          className="w-full h-[65vh]"
          variants={childrenVariants}
        >
          <iframe
            className="w-full h-full"
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJh3GibEwbD4gRKCCmpnJvNGI&key=${mapsPublicKey}`}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Location;
