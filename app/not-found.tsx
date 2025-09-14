"use client";

import { useEffect } from "react";

export default function NotFound() {
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