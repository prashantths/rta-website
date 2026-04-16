"use client";

import React from "react";

export function Header64({ title = null, subtitle = null }) {
  const heading = title || "Hiring systems that endure.";
  const sub = subtitle || "We build the infrastructure that runs long after we leave — documented, repeatable, and owned by your team.";

  return (
    <section className="relative overflow-hidden px-[5%] py-20 md:py-28 lg:py-32">
      <div className="absolute inset-0 bg-hero-gradient" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(46,125,123,0.25) 0%, transparent 70%)" }}
      />

      <div className="container relative z-10 max-w-3xl">
        <div
          className="w-12 h-1 rounded mb-6"
          style={{ background: "linear-gradient(90deg, var(--accent-dark), var(--accent))" }}
        />
        <h1 className="text-white text-6xl font-bold md:text-9xl lg:text-10xl mb-5 md:mb-6">
          {heading}
        </h1>
        <p
          className="text-white/70 text-lg md:text-xl max-w-xl"
          style={{ fontFamily: "'Lora', Georgia, serif" }}
        >
          {sub}
        </p>
      </div>
    </section>
  );
}
