// import from vercel
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import components
import { Footer } from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rhythm Code Studio",
  description: "Rhythm Code Studio - Custom web solutions to match your beat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
    <body className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500">
      {/* Flex container that occupies at least the viewport height */}
      <div className="flex flex-col min-h-screen">
        {/* Main content area, flex-grow allows it to expand and push the footer down */}
        <main className="flex-grow">
          {children}
        </main>
        {/* Footer will be pushed to the bottom */}
        <Footer />
      </div>
      <Analytics />
    </body>
  </html>
  );
}
