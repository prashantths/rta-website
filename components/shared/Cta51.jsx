"use client";

import Link from "next/link";
import React from "react";

export function Cta51() {
  return (
    <section className="relative overflow-hidden px-[5%] py-20 md:py-28">
      {/* Dark background */}
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/cta-dark-bg.jpg"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
          className="w-full h-full object-cover opacity-20"
          alt=""
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(26,36,36,0.95) 0%, rgba(23,71,69,0.90) 60%, rgba(26,36,36,0.95) 100%)",
          }}
        />
      </div>

      {/* Grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Amber glow orb */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(233,168,50,0.12) 0%, transparent 65%)",
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Brand logo */}
          <div className="mb-8 flex justify-center">
            <img
              src="/images/logo-dark.png"
              alt="Resilience Talent Advisory"
              className="h-24 w-auto object-contain"
            />
          </div>

          {/* Eyebrow */}
          <div className="mb-6">
            <span className="badge-amber">Get Started Today</span>
          </div>

          <h2 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold mb-5 md:mb-6">
            Ready to reclaim{" "}
            <span style={{ color: "var(--accent)" }}>your time?</span>
          </h2>

          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8 md:mb-10" style={{ fontFamily: "'Lora', Georgia, serif" }}>
            Stop the manual grind. Start building a hiring system that works
            long after our engagement ends — one you own permanently.
          </p>

          {/* Divider accent */}
          <div className="divider-amber w-24 mx-auto mb-8" />

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/#contact">
              <button
                className="inline-flex items-center gap-2 px-8 py-4 rounded text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
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
                className="inline-flex items-center gap-2 px-8 py-4 rounded text-sm font-semibold border transition-all duration-200 hover:bg-white/10"
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

          {/* Social proof strip */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8">
            <div className="text-center">
              <p className="text-2xl font-bold" style={{ color: "var(--accent)", fontFamily: "'Poppins', Arial, sans-serif" }}>85–90%</p>
              <p className="text-white/40 text-xs uppercase tracking-wider mt-0.5" style={{ fontFamily: "'Poppins', Arial, sans-serif" }}>Offer Acceptance</p>
            </div>
            <div className="w-px h-8 bg-white/15" />
            <div className="text-center">
              <p className="text-2xl font-bold" style={{ color: "var(--accent)", fontFamily: "'Poppins', Arial, sans-serif" }}>Zero</p>
              <p className="text-white/40 text-xs uppercase tracking-wider mt-0.5" style={{ fontFamily: "'Poppins', Arial, sans-serif" }}>Agency Dependency</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
