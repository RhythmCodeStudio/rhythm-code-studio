// import from next
import Image from "next/image";

export default function LogoMarkOnlyFull({ logoInvert }: { logoInvert: string }) {

  return (
      <Image
        alt="Rhythm Code Studio logo"
        src="/images/logos/mark-only-full.png"
        width={796}
        height={816}
        className={`${logoInvert} w-full h-auto p-`}
      />
  );
}