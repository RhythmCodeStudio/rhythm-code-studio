// import from react
import React from "react";
interface ServicesProps {
  headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  subHeadingLevel: "h2" | "h3" | "h4" | "h5" | "h6";
  headingText: string;
  subHeadingText: string;
  headingClassName: string;
  subHeadingClassName: string;
}

export default function Services({
  headingLevel,
  // subHeadingLevel,
  headingText,
  // subHeadingText,
  headingClassName,
  // subHeadingClassName,
}: ServicesProps) {
  return (
    <section className="flex flex-col text-center">
      <div className="max-w-300">
        {React.createElement(
          headingLevel,
          { className: headingClassName },
          headingText
        )}
        <p className="px-6 m-4 md:text-xl text-balance">
          We use modern web technologies to craft custom solutions tailored to
          fit your unique needs. We manage it all for you so you can spend time
          focusing on doing what you do best.
        </p>
        {/* {React.createElement(
          subHeadingLevel,
          { className: subHeadingClassName },
          subHeadingText
        )}
        <ul className="grid grid-cols-1 md:grid-cols-2 md:text-xl">
          <li>Website Development</li>
          <li>Website Design</li>
          <li>Website Repair</li>
          <li>Application Development</li>
          <li>eCommerce Solutions</li>
          <li>Web Maintenance</li>
          <li>Web Hosting</li>
          <li>Content Management</li>
          <li>Analytics</li>
          <li>Security Monitoring</li>
          <li>Domain Registration</li>
          <li>Cookie Consent Management</li>
        </ul> */}
      </div>
     </section>
  );
}
