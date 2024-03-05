import { useRouter } from "next/router";
import { useEffect } from "react";

export default function FourZeroFour() {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, [router]);
  return (
    <div>
      <h1>Not found | 404!</h1>
      <div></div>
    </div>
  );
}
