"use client";

import Link from "next/link";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

const problems = [
  {
    label: "Bottleneck",
    heading: "10+ hours per week lost to screening",
    body: "You're posting jobs, scheduling calls, and reviewing resumes when you should be building. That's not scaling. That's surviving.",
    img: "/images/time-drain.jpg",
    imgAlt: "Time bottleneck",
    dark: false,
  },
  {
    label: "Cost",
    heading: "Agency fees that vanish",
    body: "You pay $15K to $25K per placement and get nothing you can reuse. No process. No framework. No foundation for the next hire.",
    img: "/images/agency-cost.jpg",
    imgAlt: "Agency cost",
    dark: false,
  },
  {
    label: "Risk",
    heading: "Hires that don't stick",
    body: "Without structured evaluation, wrong hires slip through. Every bad placement compounds your problems and burns your runway.",
    img: "/images/hiring-risk.jpg",
    imgAlt: "Hiring risk",
    dark: true,
  },
];

export function Layout369() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-section-alt">
      <div className="container">
        <div className="mx-auto max-w-xl text-center mb-12 md:mb-18 lg:mb-20">
          <span className="eyebrow mb-4 inline-block">Problem</span>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Three things that break hiring
          </h2>
          <p className="md:text-md" style={{ fontFamily: "'Lora', Georgia, serif" }}>
            Most founders are drowning in the work itself — here&apos;s why.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {problems.map((p) => (
            <div
              key={p.label}
              className={`flex flex-col overflow-hidden rounded-lg ${p.dark ? "card-dark" : "card-elevated"}`}
            >
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
                      ? "linear-gradient(180deg, transparent 20%, rgba(23,71,69,0.9) 100%)"
                      : "linear-gradient(180deg, transparent 40%, rgba(26,36,36,0.45) 100%)",
                  }}
                />
              </div>
              <div className="flex flex-col flex-1 p-6 md:p-8">
                <span className={`mb-3 ${p.dark ? "badge-amber" : "badge-teal"}`}>
                  {p.label}
                </span>
                <h3
                  className="text-xl font-bold mb-2 md:text-2xl"
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
                  className="inline-flex items-center gap-1 text-sm font-semibold hover:gap-2 transition-all self-start"
                  style={{
                    color: p.dark ? "var(--accent)" : "var(--navy)",
                    fontFamily: "'Poppins', Arial, sans-serif",
                  }}
                >
                  Explore <RxChevronRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
