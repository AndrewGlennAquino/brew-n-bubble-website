import FadeIn from "./FadeIn";
import tempAboutImage from "../assets/images/temp-about-image.jpg";

/**
 * About component with animated header, text, and image
 */
const About = () => {
  return (
    <section
      className="h-screen md:h-[65vh] mp-default flex justify-center items-center relative"
      aria-label="About"
    >
      {/* Animated container */}
      <FadeIn className="container h-fit flex flex-col sm:flex-row justify-center items-center gap-8">
        {/* About header */}
        <div className="bg-snow/25 w-fit p-2 flex flex-col flex-grow-0 basis-full gap-8 rounded-2xl">
          <h1>About us</h1>

          {/* About text */}
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

        {/* About image */}
        <div className="w-fit sm:w-[40vw] 2xl:w-[30vw] h-fit sm:h-[40vh] 2xl:h-[30vh]">
          <img
            src={tempAboutImage}
            alt="Temporary about image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default About;
