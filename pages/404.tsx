// redirect to home page
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function FourZeroFour() {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);

  return (
    <div className="text-black flex-col items-center justify-center bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500">
      404 - page not found
      Redirecting...
    </div>
  )
}

