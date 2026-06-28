"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { site } from "@/lib/data";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const projectType = String(formData.get("projectType") || "Unity project").trim();
    const messageText = String(formData.get("message") || "").trim();

    if (name.length < 2 || !email.includes("@") || messageText.length < 20) {
      setStatus("error");
      setMessage("Please complete the form with a valid email and project detail.");
      return;
    }

    const subject = `Portfolio inquiry: ${projectType}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Project type: ${projectType}`,
      "",
      messageText,
    ].join("\n");

    setStatus("success");
    setMessage("Your email app is opening with the inquiry ready.");
    form.reset();
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        <span>Email</span>
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        <span>Project type</span>
        <select name="projectType" defaultValue="Unity prototype">
          <option>Unity prototype</option>
          <option>Gameplay systems</option>
          <option>Mobile optimization</option>
          <option>Technical review</option>
          <option>Portfolio collaboration</option>
        </select>
      </label>
      <label>
        <span>Message</span>
        <textarea
          name="message"
          rows={6}
          minLength={20}
          required
        />
      </label>
      <button className="button primary" type="submit" disabled={status === "loading"}>
        <Send size={18} />
        Send inquiry
      </button>
      {message ? (
        <p className={`form-message ${status === "error" ? "error" : ""}`}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
