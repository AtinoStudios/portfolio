import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { processSteps, services, specialties } from "@/lib/data";

export const metadata = {
  title: "Services",
  description:
    "Unity development services by Jeevan Bohara: prototypes, gameplay systems, mobile optimization, and technical reviews.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div>
          <span className="eyebrow">Services</span>
          <h1>Unity development services for teams that want momentum.</h1>
          <p>
            Hire Jeevan Bohara for focused Unity support across gameplay
            prototypes, C# systems, Android optimization, and technical project
            reviews.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="service-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <div>
                <span>{service.price}</span>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
              <ul>
                {service.includes.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={17} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link className="text-link" href="/contact">
                Request this service
                <ArrowRight size={17} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section tinted-section">
        <div>
          <SectionHeader
            eyebrow="Capability map"
            title="Deep enough for engineering, flexible enough for creative iteration."
            text="Services can be scoped as a sprint, a feature build, or a review depending on the state of the game."
          />
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
          eyebrow="Engagement"
          title="A delivery rhythm that makes the work easy to follow."
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
    </>
  );
}
