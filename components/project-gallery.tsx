// import data
import { projects } from "../app/lib/project-data";
// import tyoes
import { Project } from "../app/lib/definitions";
// import from next
import Image from "next/image";

export default function ProjectGallery() {
  return (
    <>
      <h2 className="tracking-tight text-center xs:text-lg md:text-2xl lg:text-3xl 3xl:text-5xl ">
        CUSTOM WEB SOLUTIONS TO MATCH YOUR BEAT
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2">
        {projects.map((project: Project) => (
          <li key={project.client}>
            <h3>{project.client}</h3>
            <h4>{project.project}</h4>
            <p>{project.description}</p>
            <div className="w-96 md:w-128 lg:w-200 h-auto p-6">
            <Image 
              src={project.desktop_image} 
              alt={project.client} 
              width={1920}
              height={1080}
            />
            </div>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              Visit {project.client}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
