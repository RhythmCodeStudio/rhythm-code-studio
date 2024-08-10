"use client";
// import from next
import Image from "next/image";
// import from vercel
import { track } from "@vercel/analytics";
// import components
// import icons
import { FaCalendarDays } from "react-icons/fa6";

import CookieConsent from "react-cookie-consent";

export default function Home() {
  return (
    <section className="overflow-y-hidden flex flex-col items-center justify-content space-y-16 3xl:space-y-36">
      <div className="hidden">
        <h1 className="text-center">Rhythm Code Studio</h1>
        <h2 className="text-center">Custom web solutions to match your beat</h2>
      </div>

      <div className="flex flex-col justify-center items-center">
        <Image
          className="w-2/5 h-auto max-w-144"
          src="/images/logos/mark-only-full.png"
          width={796}
          height={816}
          alt="Rhythm Code Studio logo"
          priority
        />
      </div>

      <div className="text-md lg:text-lg 3xl:text-xl font-bold  md:hover:transform hover:scale-110 transition-transform">
        <a
          href="https://calendly.com/kevin-jnxz/30min"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("schedule-consultation")}>
          <div className="mb-2 flex justify-center items-center">
            <FaCalendarDays size={36} />
          </div>
          <h3 className="underline">Schedule a free consultation.</h3>
        </a>
      </div>
      {/* <CookieConsent
        location="bottom"
        buttonText="Sure man!!"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        // buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        onAccept={(acceptedByScrolling) => {
          if (acceptedByScrolling) {
            // triggered if user scrolls past threshold
            alert("Accept was triggered by user scrolling");
          } else {
            alert("Accept was triggered by clicking the Accept button");
          }
        }}
        enableDeclineButton
        onDecline={() => {
          alert("nay!");
        }}>
        This website uses cookies to enhance the user experience.{" "}
        <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
      </CookieConsent> */}
    </section>
  );
}
