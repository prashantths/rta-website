"use client";

import Link from "next/link";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

const offerings = [
  {
    tag: "Sprint",
    heading: "Talent Infrastructure Sprint",
    body: "A fixed-scope, 30-day engagement that builds the hiring operating system your company doesn't have yet. You walk away owning every piece of it.",
    bullets: [
      "Intake process design tailored to your team",
      "Job description templates for your open roles",
      "Structured interview scorecards",
      "Hiring manager coaching sessions",
      "Sourcing strategy for up to 3 active roles",
    ],
    ideal: "Founders at 10–50 employees making their first structured hires.",
    img: "/images/services-pipeline.jpg",
    href: "/service-details",
  },
  {
    tag: "Partnership",
    heading: "Fractional Talent Acquisition Partner",
    body: "An embedded recruiting partner for companies that are actively hiring. Up to 15 hours per week. 3-month minimum. Real support, not a template.",
    bullets: [
      "Full-cycle recruiting on active roles",
      "Hiring manager partnership and alignment",
      "Pipeline reporting and funnel visibility",
      "Sourcing strategy and outbound execution",
      "Process improvements as you scale",
    ],
    ideal: "Companies with 3+ open roles and no internal TA function.",
    img: "/images/track-record.jpg",
    href: "/service-details",
  },
];

export function Layout519() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-xl text-center mb-12 md:mb-18 lg:mb-20">
          <span className="eyebrow mb-4 inline-block">Options</span>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Two ways to work with us
          </h2>
          <p className="md:text-md" style={{ fontFamily: "'Lora', Georgia, serif" }}>
            Pick the path that fits where you are right now.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {offerings.map((o, i) => (
            <div key={o.tag} className="relative overflow-hidden rounded-lg flex flex-col">
              {/* Background image + overlay */}
              <div className="absolute inset-0">
                <img
                  src={o.img}
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                  className="w-full h-full object-cover"
                  alt=""
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: i === 0
                      ? "linear-gradient(145deg, rgba(23,71,69,0.95) 0%, rgba(26,36,36,0.92) 100%)"
                      : "linear-gradient(145deg, rgba(26,36,36,0.95) 0%, rgba(23,71,69,0.90) 100%)",
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col flex-1 p-6 md:p-8 lg:p-10">
                {/* Amber top bar */}
                <div
                  className="w-10 h-0.5 mb-6 rounded"
                  style={{ background: "var(--accent)" }}
                />

                <span className="badge-amber mb-4">{o.tag}</span>

                <h3 className="text-3xl font-bold text-white mb-3 md:text-4xl md:leading-tight">
                  {o.heading}
                </h3>

                <p
                  className="mb-5"
                  style={{
                    color: "rgba(255,255,255,0.65)",
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: "0.95rem",
                    lineHeight: "1.7",
                  }}
                >
                  {o.body}
                </p>

                <ul className="flex flex-col gap-2 mb-5 flex-1">
                  {o.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Lora', Georgia, serif" }}
                    >
                      <span
                        className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                        style={{ background: "var(--accent)" }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Ideal for */}
                <div
                  className="p-3 rounded mb-6"
                  style={{
                    background: "rgba(233,168,50,0.1)",
                    border: "1px solid rgba(233,168,50,0.25)",
                  }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-1"
                    style={{ color: "var(--accent)", fontFamily: "'Poppins', Arial, sans-serif" }}
                  >
                    Ideal For
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Lora', Georgia, serif" }}
                  >
                    {o.ideal}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link href={o.href}>
                    <button
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-semibold border transition-all duration-200 hover:bg-white/10"
                      style={{
                        borderColor: "rgba(255,255,255,0.3)",
                        color: "white",
                        fontFamily: "'Poppins', Arial, sans-serif",
                      }}
                    >
                      Learn More
                    </button>
                  </Link>
                  <Link href="/#contact">
                    <button
                      className="inline-flex items-center gap-1.5 px-2 py-2.5 text-sm font-semibold transition-all hover:gap-2.5"
                      style={{
                        color: "var(--accent)",
                        fontFamily: "'Poppins', Arial, sans-serif",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Book a Discovery Call <RxChevronRight />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
