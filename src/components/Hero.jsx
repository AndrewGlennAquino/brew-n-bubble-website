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
      <div className="bg-coffee/50 w-screen h-screen absolute inset-0 -z-10" />

      {/* Animated container */}
      <FadeIn className="text-butter w-full h-full flex flex-col justify-center gap-8">
        {/* Hero subtext */}
        <p className="text-xl xl:text-2xl font-bold">Welcome to</p>

        {/* Hero header */}
        <h1 className="font-pacifico text-glow text-5xl xl:text-6xl">
          Brew 'n Bubble
        </h1>

        {/* View our menu button */}
        <Button
          style="bg-butter text-night"
          url="https://direct.chownow.com/order/34791/locations/52608"
          text="View Our Menu"
          ariaLabel="View our menu button"
        />
      </FadeIn>
    </section>
  );
};

export default Hero;
