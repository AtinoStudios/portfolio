import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { proofPoints, recognition, site, toolbelt } from "@/lib/data";

export const metadata = {
  title: "About",
  description:
    "Learn about Jeevan Bohara, a Nepal-based Unity game developer focused on gameplay systems, mobile optimization, and clean delivery.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero compact">
        <div>
          <span className="eyebrow">About Jeevan</span>
          <h1>Unity development with focus, taste, and reliable execution.</h1>
          <p>
            Jeevan Bohara is a Nepal-based Unity game developer building
            gameplay systems, action prototypes, mobile optimization workflows,
            and portfolio-grade web presentation through Atino Studios.
          </p>
        </div>
        <Image
          src="/images/portrait-mark.png"
          alt="Jeevan Bohara initials portrait mark"
          width={520}
          height={520}
          className="portrait-image"
          priority
        />
      </section>

      <section className="section split-section">
        <div>
          <SectionHeader
            eyebrow="Profile"
            title="A developer profile built for teams that value playable progress."
          />
          <p className="body-large">
            The best game developers protect the player experience while keeping
            production practical. Jeevan&apos;s work centers on that balance:
            responsive feel, clean code, stable builds, and honest communication
            across each milestone.
          </p>
          <p className="body-large">
            From Nepal, he collaborates remotely with teams that need Unity
            gameplay implementation, C# architecture, mobile performance passes,
            and fast prototypes that can become real products.
          </p>
        </div>
        <div className="location-panel">
          <MapPin size={28} />
          <h2>{site.location}</h2>
          <p>
            Remote-ready, GitHub-based, and prepared for async milestone
            reviews with studios, founders, and creative teams.
          </p>
          <Link className="text-link" href="/contact">
            Contact Jeevan
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="section tinted-section">
        <SectionHeader
          eyebrow="Principles"
          title="How the work stays clear."
          text="A portfolio can look impressive, but real value comes from repeatable habits that make game development less fragile."
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

      <section className="section">
        <SectionHeader
          eyebrow="Toolbelt"
          title="Unity production stack."
          align="center"
        />
        <div className="toolbelt">
          {toolbelt.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </section>

      <section className="section recognition-grid">
        {recognition.map((item) => {
          const Icon = item.icon;
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
