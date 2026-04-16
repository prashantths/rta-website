"use client";

import {
  Checkbox,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "@relume_io/relume-ui";
import React, { useState } from "react";

const INITIAL = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  growth: "",
  message: "",
  terms: false,
};

export function Contact2() {
  const [fields, setFields] = useState(INITIAL);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const set = (key, val) => setFields((f) => ({ ...f, [key]: val }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fields.terms) {
      setErrorMsg("Please confirm you agree to be contacted.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Unexpected error");
      }
      setStatus("success");
      setFields(INITIAL);
    } catch (err) {
      setErrorMsg(err.message ?? "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  const labelStyle = {
    fontFamily: "'Poppins', Arial, sans-serif",
    color: "var(--charcoal)",
  };

  return (
    <section id="contact" className="px-[5%] py-16 md:py-24 lg:py-28 bg-section-alt">
      <div className="container max-w-2xl">
        {/* Header */}
        <div className="mx-auto mb-10 w-full text-center md:mb-12 lg:mb-14">
          <span className="eyebrow mb-4 inline-block">Start Here</span>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Let&apos;s talk
          </h2>
          <p className="md:text-md" style={{ fontFamily: "'Lora', Georgia, serif" }}>
            Tell us about your hiring challenge — we&apos;ll respond within 24 hours.
          </p>
        </div>

        {/* Form card */}
        <div
          className="relative rounded-xl overflow-hidden p-6 md:p-10"
          style={{
            background: "var(--white)",
            boxShadow: "var(--shadow-lg)",
            border: "1px solid var(--border)",
          }}
        >
          {/* Amber top accent — absolutely positioned so no width conflict */}
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{
              background: "linear-gradient(90deg, var(--accent-dark), var(--accent))",
            }}
          />

          {status === "success" ? (
            <div className="py-10 text-center">
              <div
                className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full"
                style={{ background: "var(--navy-light)" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-7 w-7"
                  style={{ color: "var(--navy)" }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3
                className="mb-2 text-xl font-bold"
                style={{ fontFamily: "'Poppins', Arial, sans-serif", color: "var(--charcoal)" }}
              >
                Message sent!
              </h3>
              <p
                className="text-sm"
                style={{ color: "var(--text-light)", fontFamily: "'Lora', Georgia, serif" }}
              >
                Thanks for reaching out. We&apos;ll be in touch within 24 hours.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm font-semibold underline transition-opacity hover:opacity-70"
                style={{ color: "var(--navy)", fontFamily: "'Poppins', Arial, sans-serif" }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 mt-2">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="grid w-full items-center">
                  <Label htmlFor="name" className="mb-2 text-sm font-semibold" style={labelStyle}>
                    Name <span style={{ color: "var(--accent-dark)" }}>*</span>
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    value={fields.name}
                    onChange={(e) => set("name", e.target.value)}
                    required
                  />
                </div>
                <div className="grid w-full items-center">
                  <Label htmlFor="email" className="mb-2 text-sm font-semibold" style={labelStyle}>
                    Email <span style={{ color: "var(--accent-dark)" }}>*</span>
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="you@company.com"
                    value={fields.email}
                    onChange={(e) => set("email", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="grid w-full items-center">
                  <Label htmlFor="company" className="mb-2 text-sm font-semibold" style={labelStyle}>
                    Company
                  </Label>
                  <Input
                    type="text"
                    id="company"
                    placeholder="Company name"
                    value={fields.company}
                    onChange={(e) => set("company", e.target.value)}
                  />
                </div>
                <div className="grid w-full items-center">
                  <Label htmlFor="phone" className="mb-2 text-sm font-semibold" style={labelStyle}>
                    Phone (optional)
                  </Label>
                  <Input
                    type="tel"
                    id="phone"
                    placeholder="(416) 000-0000"
                    value={fields.phone}
                    onChange={(e) => set("phone", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid w-full items-center">
                <Label className="mb-2 text-sm font-semibold" style={labelStyle}>
                  What are you looking for?
                </Label>
                <Select value={fields.service} onValueChange={(val) => set("service", val)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select one..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sprint">Talent Infrastructure Sprint (30-day)</SelectItem>
                    <SelectItem value="fractional">Fractional TA Partner (ongoing)</SelectItem>
                    <SelectItem value="not-sure">Not sure yet — let&apos;s talk</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid w-full items-center">
                <Label className="mb-3 text-sm font-semibold" style={labelStyle}>
                  Where are you in your growth?
                </Label>
                <RadioGroup
                  value={fields.growth}
                  onValueChange={(val) => set("growth", val)}
                  className="grid grid-cols-2 gap-x-6 gap-y-3"
                >
                  {[
                    { value: "first-hire", label: "First hire phase" },
                    { value: "multiple-roles", label: "Multiple open roles" },
                    { value: "scaling", label: "Scaling the team" },
                    { value: "broken-process", label: "Fixing broken process" },
                    { value: "exploring", label: "Just exploring" },
                    { value: "other", label: "Other" },
                  ].map((opt) => (
                    <div key={opt.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={opt.value} id={opt.value} />
                      <Label
                        htmlFor={opt.value}
                        className="text-sm cursor-pointer"
                        style={{ fontFamily: "'Lora', Georgia, serif", color: "var(--text)" }}
                      >
                        {opt.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="grid w-full items-center">
                <Label htmlFor="message" className="mb-2 text-sm font-semibold" style={labelStyle}>
                  Message <span style={{ color: "var(--accent-dark)" }}>*</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us what you're facing..."
                  className="min-h-[10rem] overflow-auto"
                  value={fields.message}
                  onChange={(e) => set("message", e.target.value)}
                  required
                />
              </div>

              <div className="flex items-center space-x-2 text-sm">
                <Checkbox
                  id="terms"
                  checked={fields.terms}
                  onCheckedChange={(checked) => set("terms", !!checked)}
                />
                <Label
                  htmlFor="terms"
                  className="cursor-pointer text-sm"
                  style={{ color: "var(--text-light)", fontFamily: "'Lora', Georgia, serif" }}
                >
                  I agree to be contacted about my hiring needs
                </Label>
              </div>

              {status === "error" && errorMsg && (
                <p
                  className="text-sm rounded px-3 py-2"
                  style={{
                    color: "#b91c1c",
                    background: "#fef2f2",
                    border: "1px solid #fecaca",
                    fontFamily: "'Lora', Georgia, serif",
                  }}
                >
                  {errorMsg}
                </p>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3.5 rounded text-sm font-semibold transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    background: "linear-gradient(135deg, var(--navy-dark), var(--navy))",
                    color: "white",
                    fontFamily: "'Poppins', Arial, sans-serif",
                    boxShadow: "var(--shadow-teal)",
                  }}
                >
                  {status === "loading" ? "Sending…" : "Send Message"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
