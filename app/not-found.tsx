import { useRouter } from "next/router";
import { useEffect } from "react";

export default function FourZeroFour() {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, [router]);

  return (
    <main className="text-black flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500">
      <h1>Not found | 404!</h1>
      <div></div>
    </main>
  );
}
