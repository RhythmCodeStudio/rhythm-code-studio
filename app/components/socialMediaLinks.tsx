// import icons
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import IconLink from "./iconLink";


export default function SocialMediaLinks() {
  return (
    <div className="flex justify-center items-center space-x-16 lg:space-x-28 ">
      <div className="sm:hover:transform hover:scale-125 transition-transform">
      <IconLink
        href="https://www.instagram.com/rhythmcodestudio"
        icon={<FaInstagram size={36} />}
        label="link to Rhythm Code Studio on Instagram"
        name="link to Rhythm Code Studio on Instagram"
      />
      </div>
      <div className="sm:hover:transform hover:scale-125 transition-transform">
      <IconLink
        href="https://www.facebook.com/rhythm.code.studio"
        icon={<FaFacebook size={36} />}
        label="link to Rhythm Code Studio on Facebook"
        name="link to Rhythm Code Studio on Facebook"
      />
      </div>
      <div className="sm: hover:transform hover:scale-125 transition-transform">
      <IconLink
        href="https://www.linkedin.com/company/rhythm-code-studio/"
        icon={<FaLinkedin size={36} />}
        label="link to Rhythm Code Studio on LinkedIn"
        name="link to Rhythm Code Studio on LinkedIn"
      />
      </div>
    </div>
  );
}