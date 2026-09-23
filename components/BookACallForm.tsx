"use client";
import { useEffect, useRef, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function BookACallForm() {
  const challenge = useRef("");
  const submissionId = useRef("");
  const [errorMessage, setErrorMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    website: "",
  });

  async function refreshChallenge() {
    const response = await fetch("/api/lead-challenge", { cache: "no-store" });
    if (!response.ok) throw new Error("Verification is unavailable. Please try again or email us.");
    const data = await response.json();
    challenge.current = data.challenge;
  }

  useEffect(() => {
    submissionId.current = crypto.randomUUID();
    void refreshChallenge().catch(() => { challenge.current = ""; });
  }, []);

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((p) => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    try {
      if (!submissionId.current) submissionId.current = crypto.randomUUID();
      if (!challenge.current) {
        await refreshChallenge();
        // Allow the server-issued form challenge to mature, including fast autofill.
        await new Promise(resolve => setTimeout(resolve, 1100));
      }
      const res = await fetch("/api/book-a-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, challenge: challenge.current, submissionId: submissionId.current }),
        signal: AbortSignal.timeout(20000),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", phone: "", message: "", website: "" });
      } else {
        const data = await res.json();
        setErrorMessage(data.error || "We couldn’t save your inquiry. Please try again.");
        challenge.current = "";
        setStatus("error");
      }
    } catch {
      setErrorMessage("We couldn’t confirm your submission. Your details are still here; please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bac-success-box" role="status">
        <div className="bac-success-icon">✓</div>
        <h3 className="bac-success-heading">We&apos;ll be in touch soon!</h3>
        <p className="bac-success-text">
          Thanks for reaching out. We&apos;ll reply within one business day to
          schedule your call.
        </p>
      </div>
    );
  }

  return (
    <form className="bac-form" onSubmit={handleSubmit}>
      <div className="bac-honeypot" aria-hidden="true">
        <label htmlFor="booking-website">Leave this field empty</label>
        <input id="booking-website" name="website" type="text" tabIndex={-1}
          autoComplete="off" value={form.website} onChange={set("website")} />
      </div>
      <div className="bac-form-row">
        <div className="bac-field">
          <label className="bac-label" htmlFor="booking-name">
            Name *
          </label>
          <input
            className="bac-input"
            type="text"
            placeholder="Jane Smith"
            id="booking-name"
            name="name"
            maxLength={120}
            autoComplete="name"
            value={form.name}
            onChange={set("name")}
            required
          />
        </div>
        <div className="bac-field">
          <label className="bac-label" htmlFor="booking-email">
            Email *
          </label>
          <input
            className="bac-input"
            type="email"
            placeholder="jane@company.com"
            id="booking-email"
            name="email"
            maxLength={254}
            autoComplete="email"
            value={form.email}
            onChange={set("email")}
            required
          />
        </div>
      </div>

      <div className="bac-form-row">
        <div className="bac-field">
          <label className="bac-label" htmlFor="booking-company">
            Company
          </label>
          <input
            className="bac-input"
            type="text"
            placeholder="Acme Corp"
            id="booking-company"
            name="company"
            maxLength={200}
            autoComplete="organization"
            value={form.company}
            onChange={set("company")}
          />
        </div>
        <div className="bac-field">
          <label className="bac-label" htmlFor="booking-phone">
            Phone
          </label>
          <input
            className="bac-input"
            type="tel"
            placeholder="+1 (555) 000-0000"
            id="booking-phone"
            name="phone"
            maxLength={50}
            autoComplete="tel"
            value={form.phone}
            onChange={set("phone")}
          />
        </div>
      </div>

      <div className="bac-field">
        <label className="bac-label" htmlFor="booking-message">
          What would you like AI to improve in your business? *
        </label>
        <textarea
          className="bac-input bac-textarea"
          placeholder="Tell us about your business, your growth priorities, and the challenges your team needs help solving..."
          rows={5}
          id="booking-message"
          name="message"
          maxLength={5000}
          autoComplete="off"
          value={form.message}
          onChange={set("message")}
          required
        />
      </div>

      {status === "error" && (
        <p className="bac-error-msg" role="alert">
          {errorMessage}{" "}
          <a href="mailto:stephen@automationwarrior.ai">Email Stephen directly</a>.
        </p>
      )}

      <p className="bac-form-note">
        We use your details to respond to this inquiry. Please avoid including sensitive
        client or employee information. <a href="/privacy-policy">Privacy policy</a>.
      </p>
      <button
        type="submit"
        className="primary-button bac-submit-btn"
        disabled={status === "submitting"}
      >
        <span>
          {status === "submitting" ? "Sending…" : "Request an AI Strategy Call"}
        </span>
        {status !== "submitting" && (
          <span aria-hidden="true" className="button-icon">
            →
          </span>
        )}
      </button>
      <p className="bac-form-note">
        Prefer email? <a href="mailto:stephen@automationwarrior.ai">stephen@automationwarrior.ai</a>
      </p>
    </form>
  );
}
