// import from next
import { connection } from "next/server";
// import components
import Heading from "../../components/heading";
import ProjectGallery from "../../components/project-gallery";

export const metadata = {
  title: "Rhythm Code Studio | Portfolio",
  description:
    "Rhythm Code Studio's portfolio showcases custom web solutions for small businesses, musicians, artists, creatives, and organizations in St. Louis, Missouri and beyond.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default async function Portfolio() {
  await connection();
  return (
    <section>
      <Heading
        headingLevel={1}
        text="Portfolio"
        className="text-center text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-blenny pb-2"
      />
      <ProjectGallery />
    </section>
  );
}
