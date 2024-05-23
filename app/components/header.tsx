// import from next
import Image from "next/image";

export const Header = () => {
  return (
    <header className=" text-center justify-center items-center p-4 pb-0  m-4 mb-0 sm:p-8 sm:m=8">
      <div className="flex justify-center">
        <Image
          className="w-full h-auto max-w-400"
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
