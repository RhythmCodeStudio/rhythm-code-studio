// import from vercel
import { Analytics } from "@vercel/analytics/react";
// import from next
import type { Metadata } from "next";
import localFont from "next/font/local";
const blenny = localFont({
  src: "../public/fonts/Blenny_Trial_Blk.ttf",
  display: "swap",
  variable: "--font-blenny",
});
// import fonts
import { Karla } from "next/font/google";

// import from google
// import { GoogleTagManager } from "@next/third-parties/google";
// import { GoogleAnalytics } from "@next/third-parties/google";
// import css
import "./globals.css";
// import components
import { Footer } from "../components/footer";
import { Header } from "../components/header";
// import fonts
const karla = Karla({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rhythmcodestudio.tech"),
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
      <body className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 max-h-screen">
        {/* Flex container that occupies at least the viewport height */}
        <div className="flex flex-col min-h-screen ">
          <Header />
          {/* Main content area, flex-grow allows it to expand */}
          <main className="flex flex-grow items-center justify-center ">
            {children}
          </main>
          {/* Footer will be positioned at the bottom */}
          <div className="lg:mt-6 xl:mt-12">
            <Footer />
          </div>
        </div>
        <Analytics />
      </body>
      {/* <GoogleAnalytics gaId={process.env.GA_ID || ""} /> */}
    </html>
  );
}