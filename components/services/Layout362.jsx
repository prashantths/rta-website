"use client";

import Link from "next/link";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

const services = [
  {
    tag: "Sprint",
    heading: "Talent Infrastructure Sprint",
    sub: "30 days. Fixed scope. Everything you need to hire right.",
    bullets: [
      "Full hiring system audit",
      "Job architecture & scorecards",
      "Outbound sourcing playbook",
      "Structured interview framework",
      "ATS configuration & templates",
    ],
    img: "/images/services-pipeline.jpg",
    dark: false,
    cta: "Explore Sprint",
    href: "/service-details",
  },
  {
    tag: "Partnership",
    heading: "Fractional TA Partner",
    sub: "Embedded support for companies scaling their hiring function.",
    bullets: [
      "Ongoing Talent Advisor-on-demand",
      "Active search & candidate pipeline",
      "Monthly hiring reporting",
      "Team training & process handoff",
      "Scales with your growth stage",
    ],
    img: "/images/track-record.jpg",
    dark: true,
    cta: "Explore Partnership",
    href: "/service-details",
  },
];

export function Layout362() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-xl text-center mb-12 md:mb-18 lg:mb-20">
          <span className="eyebrow mb-4 inline-block">Offerings</span>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Two ways to build hiring systems
          </h2>
          <p className="md:text-md" style={{ fontFamily: "'Lora', Georgia, serif" }}>
            Choose the sprint to get started fast, or the partnership to scale
            sustainably.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          {services.map((svc) => (
            <div
              key={svc.tag}
              className={`overflow-hidden rounded-lg flex flex-col ${svc.dark ? "card-dark" : "card-elevated"}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/9]">
                <img
                  src={svc.img}
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg";
                  }}
                  alt={svc.heading}
                  className={`w-full h-full object-cover ${svc.dark ? "opacity-50" : ""}`}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: svc.dark
                      ? "linear-gradient(180deg, transparent 0%, rgba(23,71,69,0.95) 100%)"
                      : "linear-gradient(180deg, transparent 50%, rgba(248,250,249,0.95) 100%)",
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 md:p-8">
                <span className={`mb-3 ${svc.dark ? "badge-amber" : "badge-teal"}`}>
                  {svc.tag}
                </span>
                <h3
                  className="text-2xl font-bold mb-2 md:text-3xl"
                  style={{ color: svc.dark ? "white" : undefined }}
                >
                  {svc.heading}
                </h3>
                <p
                  className="mb-5"
                  style={{
                    color: svc.dark ? "rgba(255,255,255,0.65)" : "var(--text-light)",
                    fontFamily: "'Lora', Georgia, serif",
                  }}
                >
                  {svc.sub}
                </p>

                {/* Bullet list */}
                <ul className="flex flex-col gap-2 mb-6 flex-1">
                  {svc.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-sm"
                      style={{
                        color: svc.dark ? "rgba(255,255,255,0.7)" : "var(--text)",
                        fontFamily: "'Lora', Georgia, serif",
                      }}
                    >
                      <span
                        className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5"
                        style={{ background: svc.dark ? "rgba(233,168,50,0.25)" : "var(--navy-light)" }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: svc.dark ? "var(--accent)" : "var(--navy)" }}
                        />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>

                <Link
                  href={svc.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all self-start"
                  style={{
                    color: svc.dark ? "var(--accent)" : "var(--navy)",
                    fontFamily: "'Poppins', Arial, sans-serif",
                  }}
                >
                  {svc.cta} <RxChevronRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
