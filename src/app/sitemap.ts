import type { MetadataRoute } from "next";
import { navLinks, projects, site } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = navLinks.map((link) => ({
    url: `${site.url}${link.href}`,
    lastModified: now,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${site.url}/projects/${project.slug}`,
    lastModified: now,
  }));

  return [...routes, ...projectRoutes];
}
