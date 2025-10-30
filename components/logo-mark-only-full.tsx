// import from next
import Image from "next/image";

interface LogoMarkOnlyFullProps {
  logoInvert: string;
  priority: boolean;
  fetchPriority?: "high" | "low" | "auto";
}

export default function LogoMarkOnlyFull({ logoInvert, priority, fetchPriority }: LogoMarkOnlyFullProps) {

  return (
      <Image
        alt="Rhythm Code Studio logo"
        src="/images/logos/mark-only-full.png"
        width={796}
        height={816}
        className={`${logoInvert} w-full h-auto p-`}
        priority={priority}
        fetchPriority={fetchPriority}
        sizes="(max-width: 768px) 192px, (max-width: 1280px) 208px, (max-width: 1536px) 216px, 256px"
      />
  );
}