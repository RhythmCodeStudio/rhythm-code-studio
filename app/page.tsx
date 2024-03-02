import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500">
      <h1 className=" hidden text-2xl md:text-4xl font-bold  text-center">
        Rhythm Code Studio
      </h1>
      <h2 className=" hidden text-2xl md:text-4xl font-bold  text-center">
        Custom web solutions to match your beat
      </h2>
      <div className="w-72 md:w-200 mb-12 mt-12">
        <Image
          src="/images/logos/horizontal-full.png"
          width={1000}
          height={594}
          alt="Rhythm Code Studio - Custom web solutions to match your beat"
          priority
        />
      </div>

      <a
        href="mailto:kevin@rhythmcodestudio.tech"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="email Mike Martin Media">
        <h4 className="text-xl underline">kevin@rhythmcodestudio.tech</h4>
      </a>
    </main>
  );
}
