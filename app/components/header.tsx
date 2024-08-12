// import from next
import Image from "next/image";
import Link from "next/link";
// import components
import Nav from "./nav";

export const Header = () => {
  return (
    <header className="py-4 m-4 mb-6">
      <div className="flex justify-between items-center">
        <Link href="/"> 
        <Image
          className="w-full h-auto max-w-32 lg:max-w-40 xl:max-w-48 3xl:max-w-64 lg:ml-4"
          src="/images/logos/horizontal-full-no-tag.png"
          width={1000}
          height={54}
          alt="Rhythm Code Studio - Custom web solutions to match your beat"
          priority
        />
        </Link>
        <div className="lg:mr-12">
        <Nav />
        </div>
      </div>
    </header>
  );
};
