import FadeIn from "./FadeIn.jsx";
import tempBobaVideo from "../assets/videos/temp-boba-video.mp4";
import Button from "./Button.jsx";

/**
 * Hero component with store branding, view menu button, and looping video background
 */
const Hero = () => {
  return (
    <section className="container h-screen mp-default" aria-label="Hero">
      {/* Hero background video */}
      <video
        className="w-screen h-screen absolute inset-0 -z-10 object-cover"
        src={tempBobaVideo}
        aria-label="Temporary Boba Video"
        playsInline
        autoPlay
        muted
        loop
      />

      {/* Transparent background filter */}
      <div className="bg-coffee/50 h-screen absolute inset-0 -z-10" />

      {/* Text container */}
      <div className="text-butter w-full h-full flex flex-col justify-center gap-8">
        <FadeIn 
          className="flex flex-col justify-center gap-8"
          animate={true}
        >
          {/* Hero subtext */}
          <p className="text-xl xl:text-2xl font-bold leading-none">
            Welcome to
          </p>

          {/* Hero header */}
          <h1 className="font-pacifico text-glow text-5xl xl:text-6xl">
            Brew 'n Bubble
          </h1>
        </FadeIn>

        {/* View our menu button */}
        <Button
          className="bg-butter text-night"
          url="https://direct.chownow.com/order/34791/locations/52608"
          text="View Our Menu"
          aria-label="View our menu button"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.75 } }}
        />
      </div>
    </section>
  );
};

export default Hero;
