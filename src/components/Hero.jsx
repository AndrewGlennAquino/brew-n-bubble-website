import { motion } from "motion/react";
import tempBobaVideo from "../assets/videos/temp-boba-video.mp4";

const Hero = () => {
  return (
    <div className="container h-screen mp-default">
      {/* Hero background video */}
      <video
        className="w-screen h-screen absolute inset-0 -z-10 object-cover"
        src={tempBobaVideo}
        playsInline
        autoPlay
        muted
        loop
      />

      {/* Text container */}
      <div className="text-rose w-full h-full flex flex-col justify-center gap-8">
        <p className="rounded-text-bg text-lg md:text-2xl font-bold">
          Welcome to
        </p>
        <h1 className="rounded-text-bg text-5xl md:text-7xl">Brew 'n Bubble</h1>
        <motion.button
          className="rounded-text-bg bg-rose text-forest text-lg md:text-2xl font-bold"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 1.15 }}
        >
          View Our Menu
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
