// import from next
import Image from "next/image";

export const Header = () => {
  return (
    <header className=" text-center justify-center items-center p-6 pb-0 m-2 -mb-20 sm:mb-6 ">
      <div className="flex justify-center">
        <Image
          className="w-full h-auto max-w-144"
          src="/images/logos/horizontal-text-only-tag.png"
          width={1747}
          height={183}
          alt="Rhythm Code Studio - Custom web solutions to match your beat"
          priority
        />
      </div>
    </header>
  );
};
