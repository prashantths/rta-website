"use client";

import Link from "next/link";
import React from "react";

export function Header84() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient min-h-[92vh] flex items-center px-[5%] py-20 md:py-28">
      {/* Ambient glow orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #2E7D7B 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #E9A832 0%, transparent 70%)" }}
      />
      {/* Grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: copy */}
          <div>
            <div className="mb-6">
              <span className="badge-amber">Ontario Startups &amp; SMBs</span>
            </div>

            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 md:mb-8">
              You do not have a{" "}
              <span style={{ color: "var(--accent)" }}>recruiting problem</span>.
              <br />
              You have an{" "}
              <span style={{ color: "var(--accent)" }}>infrastructure problem</span>.
            </h1>

            <p
              className="text-white/75 text-lg md:text-xl leading-relaxed mb-8 md:mb-10 max-w-lg"
              style={{ fontFamily: "'Lora', Georgia, serif" }}
            >
              Every bad hire, every stalled search, every week you spend doing
              recruiting yourself instead of running your business is a symptom
              of the same thing: no system underneath your hiring. Resilience
              Talent Advisory builds that system.
            </p>

            {/* Trust signals */}
            <div className="flex items-center gap-6 mb-8 md:mb-10">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold" style={{ color: "var(--accent)", fontFamily: "'Poppins', Arial, sans-serif", letterSpacing: "-0.04em" }}>85–90%</p>
                <p className="text-white/50 text-xs uppercase tracking-wider mt-1" style={{ fontFamily: "'Poppins', Arial, sans-serif" }}>Offer Acceptance</p>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold" style={{ color: "var(--accent)", fontFamily: "'Poppins', Arial, sans-serif", letterSpacing: "-0.04em" }}>$0</p>
                <p className="text-white/50 text-xs uppercase tracking-wider mt-1" style={{ fontFamily: "'Poppins', Arial, sans-serif" }}>Agency Fees</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/#contact">
                <button
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: "linear-gradient(135deg, var(--accent-dark), var(--accent))",
                    color: "var(--charcoal)",
                    fontFamily: "'Poppins', Arial, sans-serif",
                    boxShadow: "var(--shadow-amber)",
                  }}
                >
                  Book a Discovery Call
                </button>
              </Link>
              <Link href="/services">
                <button
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded text-sm font-semibold border transition-all duration-200 hover:bg-white/10"
                  style={{
                    borderColor: "rgba(255,255,255,0.3)",
                    color: "white",
                    fontFamily: "'Poppins', Arial, sans-serif",
                  }}
                >
                  View Services
                </button>
              </Link>
            </div>
          </div>

          {/* Right: image */}
          <div className="relative hidden lg:block">
            <div
              className="relative overflow-hidden rounded-lg"
              style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.5)" }}
            >
              <img
                src="/images/hero-main.jpg"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg";
                }}
                className="w-full h-full object-cover aspect-[4/3]"
                alt="Resilient hiring infrastructure"
              />
              <div
                className="absolute top-0 right-0 w-16 h-16"
                style={{ background: "linear-gradient(225deg, var(--accent) 0%, transparent 60%)" }}
              />
            </div>

            {/* Floating callout */}
            <div
              className="absolute -bottom-4 -left-4 xl:-bottom-6 xl:-left-8 px-5 py-4 rounded-lg"
              style={{
                background: "rgba(23,71,69,0.92)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(46,125,123,0.4)",
                boxShadow: "var(--shadow-teal)",
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-1"
                style={{ color: "var(--accent)", fontFamily: "'Poppins', Arial, sans-serif" }}
              >
                No agency dependency
              </p>
              <p className="text-white text-sm" style={{ fontFamily: "'Poppins', Arial, sans-serif" }}>
                Infrastructure you own permanently
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
