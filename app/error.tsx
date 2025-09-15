'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold">Something went wrong.</h1>
      <p className="mt-4">{error.message}</p>
    </div>
  );
}