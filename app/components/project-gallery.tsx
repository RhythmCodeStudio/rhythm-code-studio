// import data
import { projects } from '../lib/project-data';
// import tyoes
import { Project } from '../lib/definitions';

export default function ProjectGallery() {
  return (
    <section>
      <h1>PROJECTS</h1>
      <ul>
        {projects.map((project: Project) => (
          <li key={project.client}>
            <h2>{project.client}</h2>
            <h3>{project.project}</h3>
            <p>{project.description}</p>
            <img src={project.desktop_image} alt={project.client} />
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              Visit {project.client}
            </a>
          </li>
        ))}
      </ul>
      
    </section>

  );
}