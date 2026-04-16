"use client";

import React from "react";

const steps = [
  {
    week: "Week one",
    heading: "We listen before we build",
    body: "Intake meetings with you and your team to understand the real need.",
    color: "from-[#174747] to-[#1A2424]",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12" aria-hidden="true">
        <circle cx="32" cy="24" r="12" stroke="currentColor" strokeWidth="2.5" />
        <path d="M16 48c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M44 18c2.5 2 4 5 4 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".5" />
        <path d="M20 18c-2.5 2-4 5-4 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".5" />
      </svg>
    ),
    label: "Discovery",
  },
  {
    week: "Week two",
    heading: "We design what you need",
    body: "Job descriptions, scorecards, and sourcing strategy take shape.",
    color: "from-[#1A2424] to-[#174747]",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12" aria-hidden="true">
        <rect x="12" y="14" width="28" height="36" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <path d="M20 24h12M20 31h12M20 38h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="46" cy="46" r="8" fill="currentColor" fillOpacity=".15" stroke="currentColor" strokeWidth="2" />
        <path d="M43 46h6M46 43v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    label: "Design",
  },
  {
    week: "Weeks three to four",
    heading: "We execute and teach",
    body: "Your team learns the process. We source and coach through first interviews.",
    color: "from-[#174747] to-[#1A2424]",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12" aria-hidden="true">
        <path d="M12 32h8l6-14 8 28 6-18 4 8h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Execution",
  },
  {
    week: "Day thirty",
    heading: "You own it from here",
    body: "Handover complete. Your process is live and your team knows how to run it.",
    color: "from-[#1A2424] to-[#174747]",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12" aria-hidden="true">
        <path d="M20 34l8 8 16-18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    ),
    label: "Handover",
  },
];

export function Layout400() {
  return (
    <section id="process" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Process</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              How we work with you
            </h2>
            <p className="md:text-md">Four phases. Thirty days to a working system.</p>
          </div>
        </div>

        <div className="grid auto-cols-fr grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.label} className="flex flex-col border border-border-primary">
              {/* Distinct step illustration */}
              <div
                className={`flex flex-col items-center justify-center gap-3 px-6 py-10 bg-gradient-to-br ${step.color}`}
                style={{ color: "var(--accent)" }}
              >
                {step.icon}
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "rgba(233,168,50,0.7)", fontFamily: "'Poppins', Arial, sans-serif" }}
                >
                  Phase {i + 1} · {step.label}
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold">{step.week}</p>
                  <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                    {step.heading}
                  </h3>
                  <p>{step.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
