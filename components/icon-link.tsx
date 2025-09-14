// import from vercel
import { track } from "@vercel/analytics";
// import { JSX } from "react";

// export default function IconLink({
//   href,
//   icon,
//   label,
//   name,
// }: {
//   href: string;
//   icon: JSX.Element;
//   label: string;
//   name: string;
// }) {
//   return (
//     <a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       aria-label={label}
//       onClick={() => {
//         track("contact icon link clicked", {name: `${name}`});
//       }}
//     >
//       {icon}
//     </a>
//   );
// }
export default function IconLink({
  href,
  icon: Icon,
  size,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
  size: number;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center"
      title={label}
      aria-label={label}
      onClick={() => {
        track("contact icon link clicked", { name: `${label}` });
      }}
    >
      {/* Screen reader only text for accessibility */}
      <span className="sr-only">{label}</span>
      <Icon className="icon-link" size={size} />
    </a>
  );
}