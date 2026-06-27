import { ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeader } from "@/components/SectionHeader";
import { contactMethods, site } from "@/lib/data";

export const metadata = {
  title: "Contact",
  description:
    "Contact Jeevan Bohara for Unity game development, prototypes, mobile optimization, and game portfolio work.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div>
          <span className="eyebrow">Contact</span>
          <h1>Start a Unity project with Jeevan Bohara.</h1>
          <p>
            Share the game idea, prototype goal, platform target, current
            challenge, or production timeline. Jeevan will respond with a clear
            next step.
          </p>
        </div>
      </section>

      <section className="section contact-layout">
        <div>
          <SectionHeader
            eyebrow="Inquiry"
            title="Tell Jeevan what you are building."
            text={site.availability}
          />
          <div className="contact-methods">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a key={method.label} href={method.href} className="contact-method">
                  <Icon size={22} />
                  <span>
                    <strong>{method.label}</strong>
                    <small>{method.value}</small>
                  </span>
                  <ArrowUpRight size={16} />
                </a>
              );
            })}
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
