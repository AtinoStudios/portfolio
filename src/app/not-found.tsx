import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero not-found">
      <div>
        <span className="eyebrow">404</span>
        <h1>This page is not in the build.</h1>
        <p>
          The portfolio route you opened does not exist. Head back to the main
          showcase and keep exploring.
        </p>
        <Link className="button primary" href="/">
          <ArrowLeft size={18} />
          Home
        </Link>
      </div>
    </section>
  );
}
