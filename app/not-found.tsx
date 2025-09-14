"use client";
// import from next
import { connection } from "next/server";
// import from react
import { useEffect } from "react";

export default async function NotFound() {
  await connection();
  useEffect(() => {
    window.location.href = "/";
  }, []);

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold">Page Not Found</h1>
      <p className="mt-4">Redirecting to home...</p>
    </div>
  );
}
