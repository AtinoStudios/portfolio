import {
  ArrowRight,
  CheckCircle2,
  GitBranch,
  Mail,
  Play,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import {
  metrics,
  processSteps,
  projects,
  proofPoints,
  site,
  specialties,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <Image
          src="/images/hero-unity-nepal.png"
          alt="Unity game development workstation in Nepal"
          fill
          priority
          className="hero-image"
          sizes="100vw"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="eyebrow">Unity developer from Nepal</span>
          <h1>{site.name}</h1>
          <p className="hero-lede">
            {site.headline} building gameplay systems, mobile-optimized Unity
            prototypes, and polished action game experiences for teams that want
            production-minded execution.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/projects">
              <Play size={18} />
              View projects
            </Link>
            <Link className="button secondary" href="/contact">
              <Mail size={18} />
              Start a project
            </Link>
          </div>
          <div className="hero-trust">
            <span>
              <CheckCircle2 size={17} />
              Unity and C#
            </span>
            <span>
              <CheckCircle2 size={17} />
              Mobile-first builds
            </span>
            <span>
              <CheckCircle2 size={17} />
              Vercel-ready portfolio
            </span>
          </div>
        </div>
      </section>

      <section className="metrics-band" aria-label="Portfolio highlights">
        {metrics.map((item) => (
          <div key={item.value} className="metric-item">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="section">
        <SectionHeader
          eyebrow="Selected work"
          title="Playable ideas shaped into production-ready systems."
          text="The portfolio is built around the parts of Unity development that decide whether a game feels good, runs well, and stays maintainable."
        />
        <div className="project-grid">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="section-action">
          <Link className="button ghost" href="/projects">
            All projects
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="section split-section">
        <div>
          <SectionHeader
            eyebrow="Specialties"
            title="Unity work with a game-feel brain and an engineer's discipline."
            text="Jeevan brings together fast iteration, clean C# systems, and mobile production awareness for teams that need more than a prototype that only works once."
          />
          <div className="inline-actions">
            <Link className="button primary" href="/services">
              <Sparkles size={18} />
              Explore services
            </Link>
            <a className="button secondary light" href={site.github} target="_blank" rel="noreferrer">
              <GitBranch size={18} />
              GitHub
            </a>
          </div>
        </div>
        <div className="specialty-list">
          {specialties.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="feature-card">
                <Icon size={24} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section process-band">
        <SectionHeader
          eyebrow="Workflow"
          title="A clear path from rough idea to confident build."
          align="center"
        />
        <div className="process-grid">
          {processSteps.map((item) => (
            <article key={item.step} className="process-step">
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeader
          eyebrow="Why teams choose Jeevan"
          title="A portfolio positioned for trust, clarity, and technical depth."
        />
        <div className="proof-grid">
          {proofPoints.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="proof-card">
                <Icon size={24} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="cta-section">
        <div>
          <span className="eyebrow">Available for collaboration</span>
          <h2>Bring a Unity game idea, prototype, or production problem.</h2>
          <p>
            Jeevan can help shape the loop, build the systems, optimize the
            experience, and present the work with a launch-ready portfolio.
          </p>
        </div>
        <Link className="button primary" href="/contact">
          Start the conversation
          <ArrowRight size={18} />
        </Link>
      </section>
    </>
  );
}
