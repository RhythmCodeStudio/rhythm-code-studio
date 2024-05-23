// import from vercel
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter, Suranna, Anaheim, Vidaloka, Recursive } from "next/font/google";
import "./globals.css";
// import components
import { Footer } from "./components/footer";
import { Header } from "./components/header";
// import fonts
const inter = Inter({ subsets: ["latin"] });
const suranna = Suranna({
  subsets: ["latin"],
  weight: "400",
});
const anaheim = Anaheim({
  subsets: ["latin"],
  weight: "400",
});
const vidaloka = Vidaloka({
  subsets: ["latin"],
  weight: "400",
});
const recursive = Recursive({
  subsets: ["latin"],
  weight: "400",
});

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
    <html lang="en" className={`${recursive.className} overflow-x-hidden`}>
      <body className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500">
        {/* Flex container that occupies at least the viewport height */}
        <div className="flex flex-col min-h-screen">
          <Header />
          {/* Main content area, flex-grow allows it to expand */}
          <main className="flex-1">{children}</main>
          {/* Footer will be positioned at the bottom */}
          
            <Footer />
          
        </div>
        <Analytics />
      </body>
    </html>
  );
}
