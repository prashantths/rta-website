"use client";

import Link from "next/link";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          {/* Copy */}
          <div>
            <span className="eyebrow mb-4 inline-block">Origin</span>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Eight years building talent systems from the ground up.
            </h2>
            <p className="md:text-md mb-4" style={{ fontFamily: "'Lora', Georgia, serif" }}>
              I spent eight years designing and scaling Talent Acquisition
              functions across nonprofit, public sector, high-volume hospitality,
              and contract recruiting — sometimes as the only Talent Advisor,
              sometimes as the architect of an operation already in motion.
              Both taught me the same lesson: hiring at scale requires systems
              thinking, not just sourcing instinct.
            </p>
            <p className="md:text-md mb-6" style={{ fontFamily: "'Lora', Georgia, serif", color: "var(--text-light)" }}>
              I started Resilience Talent Advisory because I kept watching the
              same pattern repeat. Growing companies needed a hiring
              infrastructure but faced an impossible choice: build it themselves
              and lose weeks to trial and error, or hire an agency and pay
              $15–25K per placement for something they&apos;d never own.
            </p>

            {/* Quote callout */}
            <div
              className="mt-8 p-5 rounded-lg accent-bar-left"
              style={{
                background: "var(--navy-light)",
                borderLeftColor: "var(--accent)",
              }}
            >
              <p
                className="text-sm font-medium italic"
                style={{ fontFamily: "'Lora', Georgia, serif", color: "var(--navy-deeper)" }}
              >
                &ldquo;There is a better option. Bring in someone who builds the
                infrastructure, transfers the knowledge, and gives you something
                you own.&rdquo;
              </p>
              <p
                className="mt-2 text-xs font-semibold uppercase tracking-wider"
                style={{ color: "var(--text-light)", fontFamily: "'Poppins', Arial, sans-serif" }}
              >
                — Prashantth Shan, Founder
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/about">
                <button
                  className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold border transition-all duration-200"
                  style={{
                    borderColor: "var(--navy)",
                    color: "var(--navy)",
                    fontFamily: "'Poppins', Arial, sans-serif",
                  }}
                >
                  Our Story
                </button>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-1 px-2 py-3 text-sm font-semibold hover:gap-2 transition-all"
                style={{ color: "var(--navy)", fontFamily: "'Poppins', Arial, sans-serif" }}
              >
                Meet Prashantth <RxChevronRight />
              </Link>
            </div>
          </div>

          {/* Photo */}
          <div className="relative">
            <div
              className="overflow-hidden rounded-lg"
              style={{ boxShadow: "var(--shadow-lg)" }}
            >
              <img
                src="/images/prashantth-headshot.png"
                alt="Prashantth Shan, Founder"
                className="w-full object-cover object-top"
                style={{ aspectRatio: "4/5" }}
              />
            </div>
            {/* Experience badge */}
            <div
              className="absolute -top-5 -left-5 w-20 h-20 rounded-full flex flex-col items-center justify-center text-center"
              style={{
                background: "linear-gradient(135deg, var(--accent-dark), var(--accent))",
                boxShadow: "var(--shadow-amber)",
              }}
            >
              <p
                className="text-2xl font-bold leading-none"
                style={{ color: "var(--charcoal)", fontFamily: "'Poppins', Arial, sans-serif" }}
              >
                8+
              </p>
              <p
                className="text-[9px] font-semibold uppercase tracking-wider"
                style={{ color: "var(--charcoal)", fontFamily: "'Poppins', Arial, sans-serif" }}
              >
                Yrs Exp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
