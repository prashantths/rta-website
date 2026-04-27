"use client";

import Link from "next/link";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

const stats = [
  { number: "85–90%", label: "Offer acceptance rate, against an industry average of 65–70%" },
  { number: "60%", label: "Of all hires sourced through outbound, not inbound applications" },
  { number: "20–35%", label: "Improvement in hiring velocity after deploying AI workflows" },
];

const proofCards = [
  {
    heading: "Built the entire infrastructure",
    body: "Designed intake frameworks, structured interview systems, evaluation scorecards, and real-time dashboards that gave leadership visibility into funnel health, conversion rates, and time-to-fill for the first time.",
    dark: false,
  },
  {
    heading: "Eliminated agency dependency",
    body: "A multi-year hiring program executed with no external agency spend. Built the sourcing operation from scratch so the organization owned its pipeline entirely.",
    dark: true,
  },
  {
    heading: "Deployed AI recruiting workflows",
    body: "Designed a four-stage AI workflow across sourcing, outreach, screening, and interview prep. Not tool adoption — infrastructure that improved velocity by 20–35% while elevating candidate experience.",
    dark: false,
  },
  {
    heading: "Left a system that runs without me",
    body: "The hiring function, processes, dashboards, and workflows I built continued operating after I left. That is the point. You should own your hiring infrastructure permanently.",
    dark: true,
  },
];

export function Layout198() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        {/* Section header */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end">
            <div>
              <span className="eyebrow mb-4 inline-block">The Track Record</span>
              <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
                Built from zero. Measured in outcomes.
              </h2>
            </div>
            <div>
              <p className="md:text-md mb-6" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                At a federally-funded pan-Canadian nonprofit in the healthcare
                space, I was hired as the sole Talent Advisor to build the Talent
                Acquisition function from scratch. No process existed. No
                infrastructure. No sourcing operation. Multiple divisions,
                nationwide scope. Here is what that looked like.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-1 text-sm font-semibold hover:gap-2 transition-all"
                style={{ color: "var(--navy)", fontFamily: "'Poppins', Arial, sans-serif" }}
              >
                See the full story <RxChevronRight />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-12 md:mb-16">
          {stats.map((s) => (
            <div
              key={s.number}
              className="rounded-lg p-5 md:p-6 flex flex-col"
              style={{
                background: "var(--navy-light)",
                border: "1px solid var(--border)",
              }}
            >
              <p
                className="font-bold mb-2 leading-none"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  color: "var(--navy)",
                  fontFamily: "'Poppins', Arial, sans-serif",
                  letterSpacing: "-0.04em",
                }}
              >
                {s.number}
              </p>
              <p
                className="text-xs leading-snug"
                style={{ color: "var(--text-light)", fontFamily: "'Lora', Georgia, serif" }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Proof detail cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {proofCards.map((card) => (
            <div
              key={card.heading}
              className={`rounded-lg p-6 md:p-8 ${card.dark ? "card-dark" : "card-elevated"}`}
            >
              {/* Amber accent bar */}
              <div
                className="w-8 h-0.5 rounded mb-4"
                style={{ background: "var(--accent)" }}
              />
              <h3
                className="text-lg font-bold mb-3 md:text-xl"
                style={{
                  color: card.dark ? "white" : "var(--charcoal)",
                  fontFamily: "'Poppins', Arial, sans-serif",
                }}
              >
                {card.heading}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: card.dark ? "rgba(255,255,255,0.65)" : "var(--text-light)",
                  fontFamily: "'Lora', Georgia, serif",
                }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
