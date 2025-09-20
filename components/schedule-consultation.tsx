"use client";
// import from vercel
import { track } from "@vercel/analytics";
// import icons
import { FaCalendarDays } from "react-icons/fa6";

export default function ScheduleConsultation() {
  return (
    <section className="text-md lg:text-lg 3xl:text-xl font-bold">
      <a
        href="https://calendly.com/kevin-jnxz/30min"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Schedule a free consultation with Rhythm Code Studio"
        onClick={() => {
          track(`Calendar link clicked`);
        }}
      >
        <div className="mb-2 flex justify-center items-center transition-colors duration-700">
          <FaCalendarDays 
            size={36}
            className="icon-link" 
            title="Schedule a free consultation with Rhythm Code Studio"
          />
        </div>
      </a>
      <span>Schedule a free consultation.</span>
    </section>
  );
}
