import { ArrowUpRight, GitBranch, Mail } from "lucide-react";
import Link from "next/link";
import { navLinks, site } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Link className="brand footer-brand" href="/">
            <span className="brand-mark">JB</span>
            <span>
              <strong>{site.name}</strong>
              <small>{site.headline}</small>
            </span>
          </Link>
          <p>
            Unity gameplay engineering, mobile optimization, and polished
            portfolio-ready game experiences from Nepal.
          </p>
        </div>

        <div>
          <h3>Pages</h3>
          <div className="footer-links">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3>Connect</h3>
          <div className="footer-links">
            <a href={`mailto:${site.email}`}>
              <Mail size={16} />
              {site.email}
            </a>
            <a href={site.github} target="_blank" rel="noreferrer">
              <GitBranch size={16} />
              GitHub
            </a>
            <a href={site.repo} target="_blank" rel="noreferrer">
              <ArrowUpRight size={16} />
              Repository
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Jeevan Bohara.</span>
        <span>Built with Next.js for Vercel.</span>
      </div>
    </footer>
  );
}
