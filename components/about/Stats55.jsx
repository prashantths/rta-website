"use client";

import React from "react";

const stats = [
  { number: "300+", label: "Hires Sourced Outbound", sub: "in the last 3 years" },
  { number: "85–90%", label: "Offer Acceptance Rate", sub: "across all engagements" },
  { number: "60%", label: "Sourced Without Agencies", sub: "proactive, outbound talent" },
  { number: "20–35%", label: "Faster Hiring Velocity", sub: "vs unstructured process" },
];

export function Stats55() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-section-alt">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-[0.5fr_1fr] lg:items-center lg:gap-x-20">
          {/* Copy */}
          <div>
            <span className="eyebrow mb-4 inline-block">Results</span>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              What eight years of building looks like
            </h2>
            <p className="md:text-md" style={{ fontFamily: "'Lora', Georgia, serif" }}>
              Real numbers from real hiring systems. No inflated metrics. No
              agency spin. Just what happens when you build infrastructure that
              actually works.
            </p>

            {/* Divider */}
            <div className="divider-amber w-16 mt-8" />
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="rounded-lg p-6 md:p-8 text-center flex flex-col items-center justify-center"
                style={{
                  background: i % 2 === 0 ? "var(--white)" : "linear-gradient(145deg, var(--navy-deeper), var(--charcoal))",
                  border: i % 2 === 0 ? "1px solid var(--border)" : "1px solid rgba(46,125,123,0.3)",
                  boxShadow: i % 2 === 0 ? "var(--shadow-md)" : "var(--shadow-teal)",
                }}
              >
                <p
                  className="mb-1 font-bold leading-none"
                  style={{
                    fontSize: "clamp(2rem, 5vw, 3.5rem)",
                    color: i % 2 === 0 ? "var(--navy)" : "var(--accent)",
                    fontFamily: "'Poppins', Arial, sans-serif",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {s.number}
                </p>
                <p
                  className="font-bold text-sm md:text-base mb-1"
                  style={{
                    color: i % 2 === 0 ? "var(--text)" : "white",
                    fontFamily: "'Poppins', Arial, sans-serif",
                  }}
                >
                  {s.label}
                </p>
                <p
                  className="text-xs uppercase tracking-wider"
                  style={{
                    color: i % 2 === 0 ? "var(--text-light)" : "rgba(255,255,255,0.45)",
                    fontFamily: "'Poppins', Arial, sans-serif",
                  }}
                >
                  {s.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
