import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/lib/data";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <section className="project-detail-hero">
        <Link className="text-link back-link" href="/projects">
          <ArrowLeft size={17} />
          Projects
        </Link>
        <div className="project-detail-grid">
          <div>
            <span className="eyebrow">{project.category}</span>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <div className="tag-row large">
              {project.stack.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
          <Image
            src={project.image}
            alt={`${project.title} project cover`}
            width={900}
            height={630}
            className="detail-image"
            priority
          />
        </div>
      </section>

      <section className="section detail-section">
        <div className="detail-copy">
          <SectionHeader eyebrow="Challenge" title={project.challenge} />
          <p>{project.outcome}</p>
        </div>
        <div className="metric-list">
          {project.metrics.map((metric) => (
            <span key={metric}>{metric}</span>
          ))}
        </div>
      </section>

      <section className="section tinted-section">
        <SectionHeader
          eyebrow="Build highlights"
          title="The systems behind the showcase."
        />
        <div className="highlight-grid">
          {project.highlights.map((highlight) => (
            <article key={highlight} className="highlight-card">
              <span />
              <p>{highlight}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="next-project">
        <span className="eyebrow">Next project</span>
        <Link href={`/projects/${nextProject.slug}`}>
          {nextProject.title}
          <ArrowRight size={22} />
        </Link>
      </section>
    </>
  );
}
