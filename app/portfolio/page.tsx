// import components
import ProjectGallery from "../../components/project-gallery";

export const metadata = {
  title: "Rhythm Code Studio | Portfolio",
  description:
    "Rhythm Code Studio's portfolio showcases custom web solutions for small businesses, musicians, artists, creatives, and organizations in St. Louis, Missouri and beyond.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function Portfolio() {
  return (
    <section>
      <h1 className="text-center text-3xl xs:text-4xl md:text-5xl lg:text-6xl 3xl:text-8xl font-blenny pb-2">
          Portfolio
        </h1>
      <ProjectGallery />
    </section>
  );
}
