"use client";

import Link from "next/link";
import React from "react";
import { BiLogoLinkedinSquare } from "react-icons/bi";


export function Layout16() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-start md:gap-x-12 lg:gap-x-20">

          {/* Left: copy */}
          <div>
            <span className="eyebrow mb-4 inline-block">Founder</span>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Eight years building talent systems from the ground up.
            </h2>
            <p className="mb-4 md:text-md" style={{ fontFamily: "'Lora', Georgia, serif" }}>
              I spent eight years designing and scaling Talent Acquisition
              functions across nonprofit, public sector, high-volume hospitality,
              and contract recruiting — sometimes as the only Talent Advisor,
              sometimes as the architect of an operation already in motion.
              Both taught me the same lesson: hiring at scale requires systems
              thinking, not just sourcing instinct.
            </p>
            <p className="mb-6 md:text-md" style={{ fontFamily: "'Lora', Georgia, serif", color: "var(--text-light)" }}>
              I started Resilience Talent Advisory because I kept watching the
              same problem repeat. Growing companies needed a hiring
              infrastructure but were stuck choosing between building it
              themselves and paying agency fees that don&apos;t leave anything
              behind. There is a better option.
            </p>

            {/* Quote */}
            <div
              className="mb-8 p-5 rounded-lg accent-bar-left"
              style={{ background: "var(--navy-light)", borderLeftColor: "var(--accent)" }}
            >
              <p
                className="text-sm font-medium italic"
                style={{ fontFamily: "'Lora', Georgia, serif", color: "var(--navy-deeper)" }}
              >
                &ldquo;Bring in someone who builds the infrastructure, transfers
                the knowledge, and gives you something you own.&rdquo;
              </p>
              <p
                className="mt-2 text-xs font-semibold uppercase tracking-wider"
                style={{ color: "var(--text-light)", fontFamily: "'Poppins', Arial, sans-serif" }}
              >
                — Prashantth Shan, Founder
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="/#contact">
                <button
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: "linear-gradient(135deg, var(--navy-dark), var(--navy))",
                    color: "white",
                    fontFamily: "'Poppins', Arial, sans-serif",
                    boxShadow: "var(--shadow-teal)",
                  }}
                >
                  Start a Conversation
                </button>
              </Link>
              <a
                href="https://www.linkedin.com/in/prashantth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded text-sm font-semibold border transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    borderColor: "var(--navy)",
                    color: "var(--navy)",
                    fontFamily: "'Poppins', Arial, sans-serif",
                  }}
                >
                  <BiLogoLinkedinSquare className="size-4" />
                  LinkedIn
                </button>
              </a>
            </div>
          </div>

          {/* Right: photo */}
          <div className="relative">
            <div
              className="relative overflow-hidden rounded-lg"
              style={{ boxShadow: "var(--shadow-lg)", maxWidth: "400px" }}
            >
              {/* Amber top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-1 z-10 rounded-t-lg"
                style={{ background: "linear-gradient(90deg, var(--accent-dark), var(--accent))" }}
              />
              <img
                src="/images/prashantth-headshot.png"
                alt="Prashantth Shan, Founder of Resilience Talent Advisory"
                className="w-full object-cover object-top"
                style={{ aspectRatio: "4/5" }}
              />
            </div>

            {/* Name + title below image */}
            <div className="mt-4">
              <p
                className="font-bold text-xl"
                style={{ color: "var(--charcoal)", fontFamily: "'Poppins', Arial, sans-serif" }}
              >
                Prashantth Shan
              </p>
              <p
                className="text-base mt-0.5"
                style={{ color: "var(--navy)", fontFamily: "'Poppins', Arial, sans-serif" }}
              >
                Founder, Resilience Talent Advisory
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
