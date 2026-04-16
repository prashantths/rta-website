"use client";

import React from "react";
import { BiSolidStar } from "react-icons/bi";

const testimonials = [
  {
    quote: "Prashantth took the chaos out of our hiring process and made it repeatable. We went from losing 15 hours a week to having a system that actually works.",
    name: "Sarah Chen",
    title: "Founder, SaaS Startup",
    initials: "SC",
  },
  {
    quote: "No fluff, no promises we couldn't keep. Just honest guidance and a process that stuck around long after the engagement ended.",
    name: "Marcus Webb",
    title: "CEO, Logistics Firm",
    initials: "MW",
  },
  {
    quote: "We hired three people in six weeks using the framework he built. All three are still here and performing well.",
    name: "Elena Rodriguez",
    title: "Founder, Tech Services",
    initials: "ER",
  },
];

export function Testimonial17() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-xl text-center mb-12 md:mb-18 lg:mb-20">
          <span className="eyebrow mb-4 inline-block">Testimonials</span>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Real feedback
          </h2>
          <p className="md:text-md" style={{ fontFamily: "'Lora', Georgia, serif" }}>
            What founders tell us
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`flex flex-col justify-between rounded-lg p-6 md:p-8 ${i === 1 ? "card-dark" : "card-elevated"}`}
            >
              {/* Stars */}
              <div>
                <div className="flex gap-0.5 mb-5 md:mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <BiSolidStar
                      key={idx}
                      className="size-4"
                      style={{ color: "var(--accent)" }}
                    />
                  ))}
                </div>

                <blockquote
                  className="text-base leading-relaxed italic"
                  style={{
                    color: i === 1 ? "rgba(255,255,255,0.8)" : "var(--text)",
                    fontFamily: "'Lora', Georgia, serif",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3 pt-5" style={{ borderTop: i === 1 ? "1px solid rgba(255,255,255,0.1)" : "1px solid var(--border)" }}>
                {/* Initials avatar */}
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{
                    background: i === 1 ? "rgba(233,168,50,0.2)" : "var(--navy-light)",
                    color: i === 1 ? "var(--accent)" : "var(--navy)",
                    fontFamily: "'Poppins', Arial, sans-serif",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p
                    className="font-semibold text-sm"
                    style={{
                      color: i === 1 ? "white" : "var(--charcoal)",
                      fontFamily: "'Poppins', Arial, sans-serif",
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-xs"
                    style={{
                      color: i === 1 ? "rgba(255,255,255,0.45)" : "var(--text-light)",
                      fontFamily: "'Poppins', Arial, sans-serif",
                    }}
                  >
                    {t.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
