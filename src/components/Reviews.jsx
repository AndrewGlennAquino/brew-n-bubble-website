import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react"; // eslint-disable-line no-unused-vars
import defaultUser from "../assets/images/user.png";
import star from "../assets/images/star.png";

/**
 * Review card component that takes a name, description, and animation props
 */
const ReviewCard = ({
  name,
  description,
  initial,
  animate,
  exit,
  variants,
}) => {
  return (
    <motion.div
      className="bg-snow card-shadow w-full h-full p-4 sm:p-8 flex-shrink-0 flex flex-col justify-center items-center gap-4 rounded-4xl"
      initial={initial}
      animate={animate}
      exit={exit}
      variants={variants}
    >
      {/* Default profile picture */}
      <div className="bg-gray-200 w-16 h-16 rounded-full">
        <img
          src={defaultUser}
          alt="Default profile picture"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Stars container */}
      <div className="flex gap-2">
        <img src={star} alt="Star" className="star" />
        <img src={star} alt="Star" className="star" />
        <img src={star} alt="Star" className="star" />
        <img src={star} alt="Star" className="star" />
        <img src={star} alt="Star" className="star" />
      </div>

      {/* Text container */}
      <div className="flex flex-col">
        <h1 className="font-rubik font-bold text-lg">{name}</h1>
        <p className="text-base">{description}</p>
      </div>
    </motion.div>
  );
};

/**
 * Animated Reiviews component that fans through customer reviews
 */
const Reviews = () => {
  // Reviews array that holds review objects that contain name and description
  const reviews = [
    {
      name: "Anonymous-1",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto numquam excepturi nesciunt veritatis consectetur nemo perferendis laboriosam. Nisi, vero facere deserunt fugiat enim adipisci soluta minima dolores minus dolorum non?",
    },
    {
      name: "Anonymous-2",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto numquam excepturi nesciunt veritatis consectetur nemo perferendis laboriosam. Nisi, vero facere deserunt fugiat enim adipisci soluta minima dolores minus dolorum non?",
    },
    {
      name: "Anonymous-3",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto numquam excepturi nesciunt veritatis consectetur nemo perferendis laboriosam. Nisi, vero facere deserunt fugiat enim adipisci soluta minima dolores minus dolorum non?",
    },
    {
      name: "Anonymous-4",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto numquam excepturi nesciunt veritatis consectetur nemo perferendis laboriosam. Nisi, vero facere deserunt fugiat enim adipisci soluta minima dolores minus dolorum non?",
    },
    {
      name: "Anonymous-5",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto numquam excepturi nesciunt veritatis consectetur nemo perferendis laboriosam. Nisi, vero facere deserunt fugiat enim adipisci soluta minima dolores minus dolorum non?",
    },
    {
      name: "Anonymous-6",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto numquam excepturi nesciunt veritatis consectetur nemo perferendis laboriosam. Nisi, vero facere deserunt fugiat enim adipisci soluta minima dolores minus dolorum non?",
    },
  ];

  // Keep active review in state
  const [activeCard, setActiveCard] = useState(reviews[0].name);

  // Animation variants for cards
  const cardVariants = {
    initial: {
      y: -25,
      opacity: 0,
      display: "hidden",
      transition: { duration: 0.5, ease: "easeOut" },
    },
    animateFadeIn: {
      y: 0,
      opacity: 1,
      display: "flex",
      transition: { duration: 0.5, ease: "easeOut" },
    },
    animateExit: {
      y: 25,
      opacity: 0,
      display: "hidden",
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Every 5 seconds,
  useEffect(() => {
    let i = 1;

    const interval = setInterval(() => {
      setActiveCard(reviews[i].name);
      i++;

      if (i >= reviews.length) {
        i = 0;
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="h-full mp-default flex justify-center items-center relative"
      aria-label="Reviews"
    >
      {/* Container */}
      <div className="container flex flex-col gap-8 relative">
        {/* Reviews header */}
        <motion.h1
          initial={{ y: 25, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" },
          }}
          viewport={{ viewport: 1, once: true }}
        >
          Reviews
        </motion.h1>

        {/* Review cards container for one card */}
        <div className="flex justify-center items-center">
          <AnimatePresence mode="wait">
            {reviews.map(
              (review, index) =>
                activeCard === review.name && (
                  <ReviewCard
                    key={`${review.name}-${index}`}
                    name={review.name}
                    description={review.description}
                    initial="initial"
                    animate="animateFadeIn"
                    exit="animateExit"
                    variants={cardVariants}
                  />
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
