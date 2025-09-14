"use client";
// import from next
import { connection } from "next/server";
import Link from "next/link";
import Image from "next/image";

export default async function NotFound() {
  await connection();

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold">Page Not Found</h1>
      <p className="mt-4">The page you are looking for does not exist.</p>
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
    </div>
  );
}
