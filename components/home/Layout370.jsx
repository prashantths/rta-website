"use client";

import Link from "next/link";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

const problems = [
  {
    label: "Time",
    stat: "10+",
    statUnit: "hrs / week",
    heading: "You're doing recruiting instead of running your business",
    body: "Founders and operators spending a quarter of their time screening resumes, writing job posts, and scheduling interviews instead of building. That is not scaling. That is surviving.",
    img: "/images/time-drain.jpg",
    imgAlt: "Time drain in hiring",
    dark: false,
  },
  {
    label: "Cost",
    stat: "$15–25K",
    statUnit: "per agency placement",
    heading: "Paying for a hire and an invoice — nothing you can reuse",
    body: "Paying agency fees on every hire because there is no internal process. No sourcing strategy. No pipeline. Just a phone call and an invoice. And nothing left behind.",
    img: "/images/agency-cost.jpg",
    imgAlt: "Agency cost",
    dark: false,
  },
  {
    label: "Risk",
    stat: "60%",
    statUnit: "fail within 18 months",
    heading: "Hiring on gut feel compounds your problems",
    body: "Without structured interviews and consistent evaluation criteria, hiring decisions are based on gut feel. The results are predictable — and expensive to fix.",
    img: "/images/hiring-risk.jpg",
    imgAlt: "Hiring risk",
    dark: true,
  },
];

export function Layout370() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-section-alt">
      <div className="container">
        <div className="mx-auto max-w-xl text-center mb-12 md:mb-18 lg:mb-20">
          <span className="eyebrow mb-4 inline-block">The Cost of No System</span>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            This is what hiring looks like without infrastructure.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {problems.map((p) => (
            <div
              key={p.label}
              className={`flex flex-col overflow-hidden rounded-lg ${p.dark ? "card-dark" : "card-elevated"}`}
            >
              {/* Image with stat overlay */}
              <div className="relative overflow-hidden aspect-[16/9]">
                <img
                  src={p.img}
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg";
                  }}
                  alt={p.imgAlt}
                  className={`w-full h-full object-cover ${p.dark ? "opacity-50" : ""}`}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: p.dark
                      ? "linear-gradient(180deg, transparent 20%, rgba(23,71,69,0.95) 100%)"
                      : "linear-gradient(180deg, transparent 30%, rgba(26,36,36,0.6) 100%)",
                  }}
                />
                <div className="absolute bottom-4 left-4">
                  <p
                    className="text-4xl font-bold leading-none"
                    style={{ color: "var(--accent)", fontFamily: "'Poppins', Arial, sans-serif", letterSpacing: "-0.04em" }}
                  >
                    {p.stat}
                  </p>
                  <p
                    className="text-white/70 text-xs uppercase tracking-wider"
                    style={{ fontFamily: "'Poppins', Arial, sans-serif" }}
                  >
                    {p.statUnit}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 md:p-8">
                <span className={`mb-3 ${p.dark ? "badge-amber" : "badge-teal"}`}>{p.label}</span>
                <h3
                  className="text-xl font-bold mb-3 md:text-2xl"
                  style={{ color: p.dark ? "white" : undefined }}
                >
                  {p.heading}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5 flex-1"
                  style={{
                    color: p.dark ? "rgba(255,255,255,0.65)" : "var(--text-light)",
                    fontFamily: "'Lora', Georgia, serif",
                  }}
                >
                  {p.body}
                </p>
                <Link
                  href="/service-details"
                  className="inline-flex items-center gap-1 text-sm font-semibold hover:gap-2 transition-all"
                  style={{
                    color: p.dark ? "var(--accent)" : "var(--navy)",
                    fontFamily: "'Poppins', Arial, sans-serif",
                  }}
                >
                  Learn More <RxChevronRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
