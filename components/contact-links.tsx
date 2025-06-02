// import icons
import { FaLinkedin } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import IconLink from "./icon-link";


export default function ContactLinks() {
  return (
    <div className="flex justify-center items-center space-x-16 ">
      <div className="sm:hover:transform hover:scale-125 transition-transform">
      <IconLink
        href="mailto:kevin@rhythmcodestudio.tech"
        icon={<FaEnvelope size={32} />}
        label="Click to email Rhythm Code Studio"
        name="Link to Email Rhythm Code Studio"
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