// "use client";
// // import from next
// import Link from "next/link";
// import Image from "next/image";
// // import themes
// import { useTheme } from "../context/theme-context";
// import { themes } from "../lib/themes";

// interface ArrowLinkOrButtonProps {
//   href?: string;
//   onClick?: () => void;
//   direction: string;
//   className?: string;
//   linkOrButton?: "link" | "button";
// }

// export default function ArrowLinkOrButton({ href, direction, className, linkOrButton }: ArrowLinkOrButtonProps) {
//   const { theme } = useTheme();
//   const themeObj = themes[theme];
//   const logoInvert = themeObj.logoInvert;

//   return(
//     <div className="">
//         <Link href={`${href}`}>
//           <Image
//             src={`/images/design-elements/${direction}-arrow.png`}
//             alt={`arrow ${direction}`}
//             width={175}
//             height={96}
//             className={`${logoInvert} ${className} mx-auto mt-2 animate-pulse hover:animate-none hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out`}
//           />
//         </Link>
//       </div>
//   );
// }

"use client";
// import from next
import Link from "next/link";
import Image from "next/image";
// import themes
import { useTheme } from "../context/theme-context";
import { themes } from "../lib/themes";

interface ArrowLinkOrButtonProps {
  href?: string;
  onClick?: () => void;
  direction: string;
  className?: string;
  linkOrButton?: "link" | "button";
  title?: string;
}

export default function ArrowLinkOrButton({
  href,
  onClick,
  direction,
  className,
  linkOrButton = "link", // default to link
  title,
}: ArrowLinkOrButtonProps) {
  const { theme } = useTheme();
  const themeObj = themes[theme];
  const logoInvert = themeObj.logoInvert;

  const image = (
    <Image
      src={`/images/design-elements/${direction}-arrow.png`}
      alt={`arrow ${direction}`}
      width={175}
      height={96}
      className={`${logoInvert} ${className} mx-auto mt-2 animate-pulse hover:animate-none hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out`}
      title={title}
    />
  );

  return (
    <div>
      {linkOrButton === "button" ? (
        <button type="button" onClick={onClick} className="p-0 bg-transparent border-none">
          {image}
        </button>
      ) : (
        <Link href={href || "#"}>
          {image}
        </Link>
      )}
    </div>
  );
}