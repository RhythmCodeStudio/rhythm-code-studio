// import from vercel
import { track } from "@vercel/analytics";
import { JSX } from "react";

export default function IconLink({
  href,
  icon,
  label,
  name,
}: {
  href: string;
  icon: JSX.Element;
  label: string;
  name: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onClick={() => {
        track("contact icon link clicked", {name: `${name}`});
      }}
    >
      {icon}
    </a>
  );
}
