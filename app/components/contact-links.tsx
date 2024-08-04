// import icons
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import IconLink from "./icon-link";


export default function ContactLinks() {
  return (
    <div className="flex justify-center items-center space-x-16 lg:space-x-28 xl:space-x-48 ">
      <div className="sm:hover:transform hover:scale-125 transition-transform">
      <IconLink
        href="mailto:kevin@rhythmcodestudio.tech"
        icon={<FaEnvelope size={32} />}
        label="Click to email Rhythm Code Studio"
        name="Email Rhythm Code Studio"
      />
      </div>
      <div className="sm:hover:transform hover:scale-125 transition-transform">
      <IconLink
        href="https://www.instagram.com/rhythmcodestudio"
        icon={<FaInstagram size={32} />}
        label="Link to Rhythm Code Studio on Instagram"
        name="Link to Rhythm Code Studio on Instagram"
      />
      </div>
      <div className="sm:hover:transform hover:scale-125 transition-transform">
      <IconLink
        href="https://www.facebook.com/rhythm.code.studio"
        icon={<FaFacebook size={32} />}
        label="Link to Rhythm Code Studio on Facebook"
        name="Link to Rhythm Code Studio on Facebook"
      />
      </div>
      <div className="sm: hover:transform hover:scale-125 transition-transform">
      <IconLink
        href="https://www.linkedin.com/company/rhythm-code-studio/"
        icon={<FaLinkedin size={32} />}
        label="Link to Rhythm Code Studio on LinkedIn"
        name="Link to Rhythm Code Studio on LinkedIn"
      />
      </div>
    </div>
  );
}