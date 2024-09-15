// import from next
import Image from "next/image";
import Link from "next/link";
// import components
import Nav from "./nav";

export default function Header() {
  return (
    <header className="m-4">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            className="w-full h-auto max-w-40 xl:max-w-48 3xl:max-w-64 3xl:m-4"
            src="/images/logos/horizontal-full-no-tag.png"
            width={1000}
            height={54}
            alt="Rhythm Code Studio - Custom web solutions to match your beat"
            priority
          />
        </Link>
        <div className="3xl:mr-12">
          <Nav />
        </div>
      </div>
    </header>
  );
}
