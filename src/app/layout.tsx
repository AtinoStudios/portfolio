import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.headline}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Portfolio of Jeevan Bohara, a Nepal-based Unity game developer specializing in gameplay systems, mobile optimization, prototypes, and polished game production.",
  keywords: [
    "Jeevan Bohara",
    "Unity developer Nepal",
    "Unity game developer",
    "game developer portfolio",
    "Atino Studios",
    "C# developer",
    "mobile game developer",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} | ${site.headline}`,
    description:
      "Unity gameplay engineering, mobile optimization, and action game prototypes from Nepal.",
    url: site.url,
    siteName: `${site.name} Portfolio`,
    images: [
      {
        url: "/images/hero-unity-nepal.png",
        width: 1600,
        height: 900,
        alt: "Unity game development workstation with Himalayan mountains.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.headline}`,
    description:
      "Unity gameplay engineering, mobile optimization, and portfolio-ready game systems.",
    images: ["/images/hero-unity-nepal.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
