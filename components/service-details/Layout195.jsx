"use client";

import Link from "next/link";
import React from "react";

export function Layout195() {
  return (
    <section id="embedded-partnership" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            {/* Fractional partner visual — partnership metrics card */}
            <div
              className="w-full rounded-lg overflow-hidden"
              style={{ background: "linear-gradient(145deg, #174747 0%, #1A2424 100%)", minHeight: "320px" }}
            >
              <div className="flex flex-col gap-5 p-8 md:p-10 h-full">
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg flex-shrink-0"
                    style={{ background: "rgba(233,168,50,0.15)", border: "1px solid rgba(233,168,50,0.3)" }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true" style={{ color: "var(--accent)" }}>
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--accent)", fontFamily: "'Poppins', Arial, sans-serif" }}>
                      Embedded Partnership
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Lora', Georgia, serif" }}>
                      Up to 15 hrs/week · 3-month minimum
                    </p>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "15h", label: "hrs/week" },
                    { value: "3mo", label: "minimum" },
                    { value: "100%", label: "full-cycle" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-lg p-3 text-center"
                      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <p className="text-xl font-bold" style={{ color: "var(--accent)", fontFamily: "'Poppins', Arial, sans-serif" }}>
                        {stat.value}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Poppins', Arial, sans-serif" }}>
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Activity feed */}
                <div className="flex flex-col gap-2.5 flex-1">
                  {[
                    { icon: "✓", text: "Pipeline built for 3 active roles", done: true },
                    { icon: "✓", text: "Scorecards delivered to hiring managers", done: true },
                    { icon: "✓", text: "Outbound sourcing live — 42 prospects", done: true },
                    { icon: "→", text: "Interviews scheduled this week", done: false },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-lg px-3 py-2.5"
                      style={{ background: item.done ? "rgba(46,125,123,0.12)" : "rgba(233,168,50,0.08)", border: `1px solid ${item.done ? "rgba(46,125,123,0.2)" : "rgba(233,168,50,0.2)"}` }}
                    >
                      <span
                        className="text-xs font-bold mt-0.5"
                        style={{ color: item.done ? "var(--navy)" : "var(--accent)", fontFamily: "'Poppins', Arial, sans-serif", minWidth: "1rem" }}
                      >
                        {item.icon}
                      </span>
                      <p className="text-xs leading-relaxed" style={{ color: item.done ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.5)", fontFamily: "'Lora', Georgia, serif" }}>
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 font-semibold md:mb-4">Partner</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Embedded Talent Acquisition, up to 15 hours weekly
            </h2>
            <p className="mb-6 md:mb-8 md:text-md">
              An embedded recruiting partner for teams with 3+ open roles and no
              Talent Acquisition function. Full-cycle recruiting, pipeline
              management, and process refinement. Minimum 3 months.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Always there
                </h6>
                <p>
                  Someone on your team who knows your business, your bar, and
                  your market.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Recruiting that scales
                </h6>
                <p>
                  Full-cycle sourcing, screening, and pipeline management
                  without the agency markup.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Link href="/#contact">
                <button
                  className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: "linear-gradient(135deg, var(--navy-dark), var(--navy))",
                    color: "white",
                    fontFamily: "'Poppins', Arial, sans-serif",
                    boxShadow: "var(--shadow-teal)",
                  }}
                >
                  Get started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
