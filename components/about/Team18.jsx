"use client";

import { Button } from "@relume_io/relume-ui";
import Link from "next/link";
import React from "react";
import { BiLogoLinkedinSquare } from "react-icons/bi";

export function Team18() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 lg:gap-x-20">
          {/* Left: photo */}
          <div className="relative">
            <div
              className="overflow-hidden rounded-lg"
              style={{ boxShadow: "var(--shadow-lg)" }}
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

            {/* Floating name card */}
            <div
              className="absolute -bottom-5 -right-4 px-5 py-4 rounded-lg hidden md:block"
              style={{
                background: "var(--white)",
                boxShadow: "var(--shadow-lg)",
                border: "1px solid var(--border)",
              }}
            >
              <p
                className="font-bold text-sm"
                style={{ color: "var(--charcoal)", fontFamily: "'Poppins', Arial, sans-serif" }}
              >
                Prashantth Shan
              </p>
              <p
                className="text-xs"
                style={{ color: "var(--navy)", fontFamily: "'Poppins', Arial, sans-serif" }}
              >
                Founder, Resilience Talent Advisory
              </p>
              <a
                href="https://www.linkedin.com/in/prashantth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 mt-2 text-xs hover:opacity-70 transition-opacity"
                style={{ color: "var(--text-light)", fontFamily: "'Poppins', Arial, sans-serif" }}
              >
                <BiLogoLinkedinSquare className="size-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: bio */}
          <div>
            <span className="eyebrow mb-4 inline-block">About</span>
            <h2 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
              Prashantth Shan
            </h2>
            <p
              className="mb-6 text-base font-semibold"
              style={{ color: "var(--navy)", fontFamily: "'Poppins', Arial, sans-serif" }}
            >
              Founder, Resilience Talent Advisory
            </p>

            <div className="divider-amber w-12 mb-6" />

            <p
              className="mb-4 leading-relaxed"
              style={{ fontFamily: "'Lora', Georgia, serif", color: "var(--text)" }}
            >
              Eight years building and running Talent Acquisition functions
              across nonprofit, public sector, high-volume hospitality, and
              contract recruiting. I have been the sole Talent Advisor building from
              nothing, and I have been the one scaling an operation that already
              works. Both require systems thinking, not just sourcing skills.
            </p>
            <p
              className="mb-8 leading-relaxed"
              style={{ fontFamily: "'Lora', Georgia, serif", color: "var(--text)" }}
            >
              I started Resilience Talent Advisory because I kept seeing the
              same problem: growing companies that needed a hiring system but
              were stuck choosing between doing it themselves and paying agency
              fees that do not build anything lasting. There is a better option.
              You bring in someone who builds the infrastructure, transfers the
              knowledge, and gives you something you own.
            </p>

            {/* Expertise tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["Talent Systems", "Outbound Sourcing", "Structured Interviews", "AI Workflows", "Ontario SMBs"].map((tag) => (
                <span key={tag} className="badge-teal">{tag}</span>
              ))}
            </div>

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
        </div>
      </div>
    </section>
  );
}
