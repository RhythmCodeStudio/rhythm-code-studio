// import from vercel
import { Analytics } from "@vercel/analytics/react";
// import client wrapper
import ClientWrapper from "@/components/client-wrapper";
// import from next
import type { Metadata } from "next";
import localFont from "next/font/local";
const blenny = localFont({
  src: "../public/fonts/Blenny_Trial_Blk.ttf",
  display: "swap",
  variable: "--font-blenny",
});
// import fonts
import { karla } from "@/fonts";

import "./globals.css";
// import components
import Footer from "../components/footer";
import Header from "../components/header";
import ScrollToTopButton from "../components/scroll-to-top-button";
import Background from "@/components/theme";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rhythmcodestudio.tech"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  title: {
    template:
      "%s | Custom web solutions to match your beat",
    default: "Rhythm Code Studio | Custom web solutions to match your beat",
  },
  description:
    "Custom web solutions to match your beat. Custom coded websites and web based software for small businesses, musicians, bands, artists, organizations, and individuals. Let Rhythm Code Studio take care of your website. You've got more important things to do.",
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${karla.className} ${blenny.variable} overflow-x-hidden`}>
      {/* <GoogleTagManager gtmId={process.env.GTM_ID || ""} /> */}
      {/* <body className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 max-h-screen"> */}
      <body className="max-h-screen">
        <ClientWrapper>
        {/* Flex container that occupies at least the viewport height */}
        <div className="flex flex-col min-h-screen ">
          <Header />
          {/* Main content area, flex-grow allows it to expand */}
          <main className="flex flex-grow items-center justify-center">
            {children}
          </main>
          {/* Footer will be positioned at the bottom */}
          <Footer />
        </div>
        <ScrollToTopButton />
        <Analytics />
        </ClientWrapper>
      </body>
      {/* <GoogleAnalytics gaId={process.env.GA_ID || ""} /> */}
    </html>
  );
}
