import { Calendar, Code2, Trophy } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { experience, metrics, recognition, toolbelt } from "@/lib/data";

export const metadata = {
  title: "Experience",
  description:
    "Experience, capabilities, and technical stack for Jeevan Bohara, Unity game developer in Nepal.",
};

export default function ExperiencePage() {
  return (
    <>
      <section className="page-hero">
        <div>
          <span className="eyebrow">Experience</span>
          <h1>Focused Unity experience across gameplay, mobile, and technical delivery.</h1>
          <p>
            Jeevan&apos;s portfolio is designed to show the work that matters to
            studios: playable progress, maintainable code, performance thinking,
            and clear collaboration.
          </p>
        </div>
      </section>

      <section className="metrics-band page-metrics" aria-label="Experience highlights">
        {metrics.map((item) => (
          <div key={item.value} className="metric-item">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="section split-section">
        <div>
          <SectionHeader
            eyebrow="Timeline"
            title="Built through practical Unity work."
            text="The timeline emphasizes capability growth and the kind of problems Jeevan is ready to solve for client and studio projects."
          />
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article key={`${item.period}-${item.title}`} className="timeline-item">
              <Calendar size={20} />
              <div>
                <span>{item.period}</span>
                <h2>{item.title}</h2>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section tinted-section">
        <SectionHeader
          eyebrow="Stack"
          title="Technical toolkit."
          align="center"
        />
        <div className="toolbelt">
          {toolbelt.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </section>

      <section className="section recognition-grid">
        {recognition.map((item, index) => {
          const Icon = index === 0 ? Trophy : Code2;
          return (
            <article key={item.title} className="recognition-card">
              <Icon size={28} />
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          );
        })}
      </section>
    </>
  );
}
