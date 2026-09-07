"use client";
import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function BookACallForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "", email: "", company: "", phone: "", message: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/book-a-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bac-success-box">
        <div className="bac-success-icon">✓</div>
        <h3 className="bac-success-heading">We&apos;ll be in touch soon!</h3>
        <p className="bac-success-text">
          Thanks for reaching out. We&apos;ll reply within one business day to schedule your call.
        </p>
      </div>
    );
  }

  return (
    <form className="bac-form" onSubmit={handleSubmit}>
      <div className="bac-form-row">
        <div className="bac-field">
          <label className="bac-label" htmlFor="booking-name">Name *</label>
          <input
            className="bac-input"
            type="text"
            placeholder="Jane Smith"
            id="booking-name"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={set("name")}
            required
          />
        </div>
        <div className="bac-field">
          <label className="bac-label" htmlFor="booking-email">Email *</label>
          <input
            className="bac-input"
            type="email"
            placeholder="jane@company.com"
            id="booking-email"
            name="email"
            autoComplete="email"
            value={form.email}
            onChange={set("email")}
            required
          />
        </div>
      </div>

      <div className="bac-form-row">
        <div className="bac-field">
          <label className="bac-label" htmlFor="booking-company">Company</label>
          <input
            className="bac-input"
            type="text"
            placeholder="Acme Corp"
            id="booking-company"
            name="company"
            autoComplete="organization"
            value={form.company}
            onChange={set("company")}
          />
        </div>
        <div className="bac-field">
          <label className="bac-label" htmlFor="booking-phone">Phone</label>
          <input
            className="bac-input"
            type="tel"
            placeholder="+1 (555) 000-0000"
            id="booking-phone"
            name="phone"
            autoComplete="tel"
            value={form.phone}
            onChange={set("phone")}
          />
        </div>
      </div>

      <div className="bac-field">
        <label className="bac-label" htmlFor="booking-message">What do you want to automate? *</label>
        <textarea
          className="bac-input bac-textarea"
          placeholder="Tell us about your business and where you're spending too much time on manual work..."
          rows={5}
          id="booking-message"
          name="message"
          autoComplete="off"
          value={form.message}
          onChange={set("message")}
          required
        />
      </div>

      {status === "error" && (
        <p className="bac-error-msg">Something went wrong — please try again or email us directly.</p>
      )}

      <button
        type="submit"
        className="primary-button bac-submit-btn"
        disabled={status === "submitting"}
      >
        <span>{status === "submitting" ? "Sending…" : "Request a Strategy Call"}</span>
        {status !== "submitting" && <span aria-hidden="true" className="button-icon">→</span>}
      </button>
    </form>
  );
}
