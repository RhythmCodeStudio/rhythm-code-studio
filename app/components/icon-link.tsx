// import from vercel
import { track } from "@vercel/analytics";

<<<<<<< HEAD
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
        track(`${name} clicked`);
      }}>
      {icon}
    </a>
  );
}
=======
export default function IconLink({ href, icon, label, name }: { href: string, icon: JSX.Element, label: string, name: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} onClick={() => {
      track(`${name} clicked`);
    }}>
      {icon}
    </a>
  );
}
>>>>>>> 52f854a0fec516d4fd19448e728e161cc06b0d40
