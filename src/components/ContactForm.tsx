"use client";

import { Loader2, Send } from "lucide-react";
import { FormEvent, useState } from "react";

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

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        message?: string;
        mailto?: string;
      };

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Unable to send message.");
      }

      setStatus("success");
      setMessage(result.message || "Message prepared.");
      form.reset();

      if (result.mailto) {
        window.location.href = result.mailto;
      }
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please email directly.",
      );
    }
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
        {status === "loading" ? <Loader2 className="spin" size={18} /> : <Send size={18} />}
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
