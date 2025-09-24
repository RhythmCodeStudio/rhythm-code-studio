"use client";
// import from next
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function CircularTexture() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  if (isHome) {
    return null; // Don't render anything on the home page
  }
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/images/design-elements/circular-texture.png"
          alt=""
          fill
          objectFit="cover"
          quality={100}
        />
      </div>
    </div>
  );
}