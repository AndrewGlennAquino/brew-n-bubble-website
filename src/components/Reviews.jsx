import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react"; // eslint-disable-line no-unused-vars
import defaultUser from "../assets/images/user.png";
import star from "../assets/images/star.png";

/**
 * Review card component that takes a name and description
 */
const ReviewCard = ({ name, description }) => {
  return (
    <div className="bg-snow w-full max-w-80 h-full p-8 flex flex-col justify-center items-center gap-4 rounded-4xl">
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
        <h1 className="font-rubik text-2xl">{name}</h1>
        <p>{description}</p>
      </div>
    </div>
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
  ];

  return (
    <section
      className="h-[65vh] mp-default flex justify-center items-center relative"
      aria-label="Reviews"
    >
      {/* Container */}
      <div className="container flex flex-col gap-8 relative">
        {/* Reviews header */}
        <h1>Reviews</h1>

        {/* Review cards container */}
        <div className="flex justify-center items-center">
          <ReviewCard name={reviews[0].name} description={reviews[0].description} />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
