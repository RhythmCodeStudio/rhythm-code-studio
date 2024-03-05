// redirect to home page
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function FourZeroFour() {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);

  return (
    <div>
      404 - page not found
      Redirecting...
    </div>
  )
}

