import { motion } from "motion/react"; // eslint-disable-line no-unused-vars
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import tiktok from "../assets/icons/tiktok.png";

/**
 * Footer component that contains contact information and social media links
 */
const Footer = () => {
  // Animation variants for social media links
  const socialMediaVariants = {
    animateLink: { scale: 1.15 },
  };

  return (
    <footer className="bg-forest mp-default my-0">
      {/* Footer container */}
      <div className="container mx-auto w-full flex justify-between items-center">
        {/* Footer header */}
        <h1 className="text-snow">Contact Us!</h1>

        {/* Phone and email for medium and larger devices */}
        <div className="hidden sm:flex gap-4">
          <a href="mailto:info@brewnbubble.com" className="footer-contact-info">
            info@brewnbubble.com
          </a>
          <a href="tel:2242768359" className="footer-contact-info">
            (224) 276-8359
          </a>
        </div>

        {/* Social media links */}
        <div className="flex gap-4">
          <motion.a
            href="https://www.facebook.com/people/Brew-n-Bubble/100084266333494/"
            target="_blank"
            aria-label="Facebook link"
            className="social-media-link"
            whileHover="animateLink"
            whileTap="animateLink"
            variants={socialMediaVariants}
          >
            <img src={facebook} alt="Facebook logo" className="w-full h-full" />
          </motion.a>

          <motion.a
            href="https://www.instagram.com/brewnbubble?utm_source=ig_web_button_share_sheet&igsh=azZxYWd4Nm84ODN4"
            target="_blank"
            aria-label="Instagram link"
            className="social-media-link"
            whileHover="animateLink"
            whileTap="animateLink"
            variants={socialMediaVariants}
          >
            <img
              src={instagram}
              alt="Instagram logo"
              className="w-full h-full"
            />
          </motion.a>

          <motion.a
            href="https://www.tiktok.com/@brew.n.bubble?is_from_webapp=1&sender_device=pc"
            target="_blank"
            aria-label="Tiktok link"
            className="social-media-link"
            whileHover="animateLink"
            whileTap="animateLink"
            variants={socialMediaVariants}
          >
            <img src={tiktok} alt="Tiktok logo" className="w-full h-full" />
          </motion.a>
        </div>
      </div>

      {/* Phone and email for mobile devices */}
      <div className="pt-2 flex sm:hidden justify-center gap-4">
        <a href="mailto:info@brewnbubble.com" className="footer-contact-info">
          info@brewnbubble.com
        </a>
        <a href="tel:2242768359" className="footer-contact-info">
          (224) 276-8359
        </a>
      </div>
    </footer>
  );
};

export default Footer;
