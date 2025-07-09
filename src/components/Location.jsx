import FadeIn from "./FadeIn";

/**
 * Location component with animated header and interactive google map
 */
const Location = () => {
  const mapsPublicKey = import.meta.env.VITE_GOOGLE_MAPS_API_PUBLIC_KEY;

  return (
    <section
      className="h-screen md:h-[55vh] mp-default flex justify-center items-center relative"
      aria-label="Location"
    >
      {/* Animated container */}
      <FadeIn className="container h-fit flex flex-col sm:flex-row justify-center items-center gap-8">
        {/* Location header */}
        <div className="bg-snow/25 w-fit p-2 flex flex-col flex-grow-0 basis-full gap-8 rounded-2xl">
          <h1>Location</h1>

          {/* Location text */}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            placeat tenetur accusantium dolores quidem consequuntur, molestiae
            sint corrupti nam hic doloremque error fugit fugiat! Eaque unde
            ipsum ut tenetur laudantium!
          </p>
        </div>

        {/* Google Maps embed API */}
        <div className="w-full sm:w-[40vw] 2xl:w-[30vw] h-[45vh] sm:h-[40vh] 2xl:h-[30vh]">
          <iframe
            className="w-full h-full"
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJh3GibEwbD4gRKCCmpnJvNGI&key=${mapsPublicKey}`}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Location;
