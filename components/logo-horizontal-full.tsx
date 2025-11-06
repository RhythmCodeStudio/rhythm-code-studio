// import from next
import Image from "next/image";

export default function LogoHorizontalFull({
  logoInvert,
}: {
  logoInvert: string;
}) {
  return (
    <Image
      priority
      fetchPriority="high"
      alt="Rhythm Code Studio logo"
      src="/images/logos/horizontal-full.png"
      width={1000}
      height={594}
      className={`${logoInvert} w-full h-auto`}
    />
  );
}
