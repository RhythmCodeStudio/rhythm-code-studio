// "use client";
// // import from next
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// // import clsx
// import { clsx } from "clsx";
// // import themes
// import { useTheme } from "../context/theme-context";
// import { themes } from "../lib/themes";
// // import from headlessui
// import { Button } from "@headlessui/react";

// export default function NavListItem({
//   label,
//   href,
//   htmlElement,
//   onClick,
// }: {
//   label: string;
//   href: string;
//   htmlElement: string;
//   onClick?: () => void;
// }) {
//   const pathname = usePathname();
//   const isActive = pathname === href;
//   const { theme } = useTheme();
//   const themeObj = themes[theme];
//   const color = themeObj.color;
//   // const textOpposite = themeObj.textOpposite;
//   const bgColor = themeObj.bgColor;
//   // const bgOpposite = themeObj.bgOpposite;
//   const textShadow = themeObj.textShadow;

//   return (
//     <li
//       className={`tracking-wider font-semibold text-${color} ${textShadow} transition-all duration-700 ease-in-out`}>
//       {label === "Contact" ? (
//         isActive ? (
//           <span aria-current="page">
//             <span
//               className="border border-2 rounded-full py-1 px-6"
//               onClick={onClick}>
//               {label}
//             </span>
//           </span>
//         ) : (
//           <Link
//             href="/contact"
//             className="transition-all duration-300 ease-in-out">
//             <span
//               className={clsx(
//                 `border-2 rounded-full shadow-md shadow-${color} px-6 py-1 transition-all duration-700 ease-in-out`,
//                 {
//                   "lg:hover:font-bold lg:hover:bg-white shadow-black":
//                     theme === "funk" || theme === "rock",
//                   "shadow-white lg:hover:font-bold lg:hover:text-black lg:hover:bg-white":
//                     theme === "blues" || theme === "jazz",
//                 }
//               )}
//               onClick={onClick}>
//               {label}
//             </span>
//           </Link>
//         )
//       ) : htmlElement === "button" ? (
//         <Button
//           className="px-6 py-1 border-2 rounded-full hover:bg-white font-bold shadow-md shadow-black transition-all duration-300 ease-in-out"
//           onClick={onClick}>
//           <span>{label}</span>
//         </Button>
//       ) : htmlElement === "internalLink" ? (
//         isActive ? (
//           <span
//             className="transition-colors duration-700 ease-in-out"
//             aria-current="page">
//             <span onClick={onClick}>{label}</span>
//           </span>
//         ) : (
//           <Link href={href} className="flex items-center relative group">
//             <span
//               className={clsx(
//                 "lg:group-hover:font-bold transition-colors duration-700 ease-in-out"
//                 // "text-shadow-white-background-black",
//                 // "hover:text-shadow-black-background-black"
//               )}
//               onClick={onClick}>
//               {label}
//             </span>
//             <span
//               className={`absolute bottom-[-.25rem] left-0 w-0 h-[2.75px] ${bgColor} transition-all ease-in-out duration-700 group-hover:w-full`}></span>
//           </Link>
//         )
//       ) : htmlElement === "externalLink" ? (
//         <a
//           href={href}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center">
//           <span>{label}</span>
//         </a>
//       ) : null}
//     </li>
//   );
// }

"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { clsx } from "clsx";
import { useTheme } from "../context/theme-context";
import { themes } from "../lib/themes";
import { Button } from "@headlessui/react";

export default function NavListItem({
  label,
  href,
  htmlElement,
  onClick,
}: {
  label: string;
  href: string;
  htmlElement: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const { theme } = useTheme();
  const themeObj = themes[theme];
  const color = themeObj.color;
  // const bgColor = themeObj.bgColor;
  const textShadow = themeObj.textShadow;

  return (
    <li className={`tracking-wider font-semibold text-${color} ${textShadow}`}>
      {label === "Contact" ? (
        isActive ? (
          <span aria-current="page">
            <span
              className="border border-2 rounded-full py-1 px-6"
              onClick={onClick}>
              {label}
            </span>
          </span>
        ) : (
          <Link
            href="/contact"
            className="transition-colors duration-150 ease-in-out">
            <span
              className={clsx(
                `border-2 rounded-full shadow-md shadow-${color} px-6 py-1 transition-colors duration-150 ease-in-out`,
                {
                  "lg:hover:bg-white shadow-black":
                    theme === "funk" || theme === "rock",
                  "shadow-white lg:hover:shadow-lg":
                    theme === "blues" || theme === "jazz",
                }
              )}
              onClick={onClick}>
              {label}
            </span>
          </Link>
        )
      ) : htmlElement === "button" ? (
        <Button
          className="px-6 py-1 border-2 rounded-full hover:bg-white font-bold shadow-md shadow-black transition-colors duration-150 ease-in-out"
          onClick={onClick}>
          <span>{label}</span>
        </Button>
      ) : htmlElement === "internalLink" ? (
        isActive ? (
          <span
            className="transition-colors duration-150 ease-in-out"
            aria-current="page">
            <span onClick={onClick}>{label}</span>
          </span>
        ) : (
          <Link href={href} className="flex items-center relative group">
            <span
              className={clsx(
                "lg:group-hover:font-bold lg:group-hover:scale-110 transition-all duration-150 ease-in-out"
              )}
              onClick={onClick}>
              {label}
            </span>
          </Link>
        )
      ) : htmlElement === "externalLink" ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center">
          <span>{label}</span>
        </a>
      ) : null}
    </li>
  );
}