"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/lib/data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link className="brand" href="/" onClick={() => setOpen(false)}>
        <span className="brand-mark">JB</span>
        <span>
          <strong>{site.name}</strong>
          <small>{site.title}</small>
        </span>
      </Link>

      <button
        className="icon-button menu-toggle"
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={`site-nav ${open ? "open" : ""}`} aria-label="Main navigation">
        {navLinks.map((link) => {
          const active =
            link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              className={active ? "active" : ""}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
