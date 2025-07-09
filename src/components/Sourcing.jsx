import FadeIn from "./FadeIn";
import tempSourcingImage from "../assets/images/temp-sourcing-image.png";

/**
 * Sourcing component with animated header, text, and image
 */
const Sourcing = () => {
  return (
    <section
      className="h-screen md:h-[55vh] mp-default flex justify-center items-center relative"
      aria-label="Sourcing"
    >
      {/* Animated container */}
      <FadeIn className="container h-fit flex flex-col sm:flex-row-reverse justify-center items-center gap-8">
        {/* Sourcing header */}
        <div className="bg-snow/25 w-fit p-2 flex flex-col flex-grow-0 basis-full gap-8 rounded-2xl">
          <h1>Sourcing</h1>

          {/* Sourcing text */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            neque nam numquam id officia voluptate dolores, mollitia corporis
            doloremque laudantium, corrupti veritatis similique. Pariatur unde
            nam, repellendus debitis illum aut? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Possimus aperiam sequi id officia ea
            neque dolore modi. Magni possimus laudantium omnis odit quas, at
            facere quisquam fugit, dolor ullam commodi?
          </p>
        </div>

        {/* Sourcing image */}
        <div className="w-fit sm:w-[40vw] 2xl:w-[30vw] h-fit sm:h-[40vh] 2xl:h-[30vh]">
          <img
            src={tempSourcingImage}
            alt="Temporary sourcing image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Sourcing;
