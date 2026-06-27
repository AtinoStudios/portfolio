import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { projects } from "@/lib/data";

type Project = (typeof projects)[number];

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link href={`/projects/${project.slug}`} className="project-image-link">
        <Image
          src={project.image}
          alt={`${project.title} project cover`}
          width={700}
          height={490}
          className="project-image"
        />
      </Link>
      <div className="project-card-body">
        <div className="project-card-meta">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="tag-row">
          {project.stack.slice(0, 4).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <Link className="text-link" href={`/projects/${project.slug}`}>
          View case study
          <ArrowUpRight size={17} />
        </Link>
      </div>
    </article>
  );
}
