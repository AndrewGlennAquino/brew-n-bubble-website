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
      className="bg-snow card-shadow w-full h-fit p-4 sm:p-8 flex flex-col items-center gap-4 rounded-4xl"
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
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Stars container */}
      <div className="flex gap-2">
        <img src={star} alt="Star" loading="lazy" className="star" />
        <img src={star} alt="Star" loading="lazy" className="star" />
        <img src={star} alt="Star" loading="lazy" className="star" />
        <img src={star} alt="Star" loading="lazy" className="star" />
        <img src={star} alt="Star" loading="lazy" className="star" />
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
      name: "Tomaskir",
      description:
        "Brew 'n Bubble is an absolute gem! The service here is impressively fast, ensuring you never have to wait long to enjoy their delicious offerings. Whether you're grabbing a quick coffee or indulging in one of their unique bubble teas, the staff is always prompt and efficient. The atmosphere is cozy, making it a great spot to relax or work while sipping on your favorite drink ... I highly recommend Brew 'n Bubble for anyone looking for a speedy yet delightful experience.",
    },
    {
      name: "Ketan",
      description:
        "Extremely friendly service. This place has a lot of decorations and the ambiance is awesome for a bubble tea/smoothie/coffee joint. Ordered the Twisted Taro and Oreo Bubble teas with tapioca. Both were really good and kids enjoyed them ... Would definitely recommend this location for your bubble tea needs.",
    },
    {
      name: "Tiff",
      description:
        "We really enjoyed our visit. Everything was clean inside, staff members were busy but so kind. Always attentive. We ordered one large mango bubble smoothie and one large passion fruit bubble smoothie. Both were delicious! We hung out: played cards while sipping on our drinks and enjoying the music.",
    },
    {
      name: "Rae",
      description:
        "I stopped at Brew ‘n Bubble yesterday. It was my first time there and they were very friendly. I got a delicious taro milk tea and really appreciated that you can choose your sweetness level. I will be back. 😊",
    },
    {
      name: "Nazia",
      description:
        "We were in Elgin for family gathering and ended up coming to this new business. Absolutely loved the ambiance and vibe. I ordered Mango bubble tea with Mango pop, it was delicious. People working behind the counter were friendly and recommended few other option to try.",
    },
    {
      name: "Urawsum",
      description:
        "We went in today for the grand opening, as the schools were letting out. Everyone greeted us happily and all were clearly doing lots of work. I had the twisted taro with tapioca pearls and its was amazing!!!! they come in such cute cat cups too! My friend had the strawberry smoothie with strawberry popping boba and it was great too!! I got to try some hehe~☆",
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
      className="mp-default flex justify-center relative"
      aria-label="Reviews"
    >
      {/* Container */}
      <div className="container flex flex-col gap-8">
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

        {/* Review cards container for review card */}
        <div className="h-96 md:h-72 lg:h-64">
          <AnimatePresence mode="wait">
            {reviews.map(
              (review) =>
                activeCard === review.name && (
                  <ReviewCard
                    key={`${review.name}`}
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
