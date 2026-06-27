import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, site } from "@/lib/data";

export const metadata = {
  title: "Projects",
  description:
    "Selected Unity game development projects and systems by Jeevan Bohara.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero">
        <div>
          <span className="eyebrow">Projects</span>
          <h1>Unity showcases for gameplay, mobile performance, and action systems.</h1>
          <p>
            Explore selected builds that communicate Jeevan Bohara&apos;s strengths:
            fast prototyping, practical C# systems, optimization awareness, and
            a strong sense for game feel.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div>
          <span className="eyebrow">Need similar work?</span>
          <h2>Bring Jeevan into a prototype, gameplay feature, or optimization pass.</h2>
          <p>{site.availability}</p>
        </div>
        <Link className="button primary" href="/contact">
          Discuss a project
          <ArrowRight size={18} />
        </Link>
      </section>
    </>
  );
}
