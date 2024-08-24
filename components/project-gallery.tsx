// import data
import { projects } from "../app/lib/project-data";
// import tyoes
import { Project } from "../app/lib/definitions";
// import from next
import Image from "next/image";

export default function ProjectGallery() {
  return (
    <>
      <h2 className="tracking-tight text-center xs:text-lg sm:text-xl md:text-2xl lg:text-3xl 3xl:text-5xl ">
        CUSTOM WEB SOLUTIONS TO MATCH YOUR BEAT
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {projects.map((project: Project) => (
          <li key={project.client} className="shadow-2xl m-6">
            <h3 className="text-center font-bold text-lg sm:text-xl md:text-2xl mt-4">
              {project.client}
            </h3>
            <h4 className="text-center font-bold sm:text-lg md:text-xl mb-2">
              {project.url}
            </h4>
            
            <div className="flex items-center justify-center">
              <div className="w-52 md:w-72 h-auto">
                <figure className="">
                  <Image
                    src={project.mobile_image}
                    alt={project.client}
                    width={1080}
                    height={1920}
                  />
                  <figcaption className="text-center font-bold">
                    Mobile View
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="p-2">
              <p className="px-4">{project.description}</p>
            </div>
            <div className="flex items-center justify-center">
            <div className="w-96 md:w-128 lg:w-200 h-auto p-6">
              <figure>
                <Image
                  src={project.desktop_image}
                  alt={project.client}
                  width={1920}
                  height={1080}
                />
                <figcaption className="text-center font-bold">
                  Desktop View
                </figcaption>
              </figure>
            </div>
            </div>
            
          </li>
        ))}
      </ul>
    </>
  );
}
