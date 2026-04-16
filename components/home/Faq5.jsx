"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";
import Link from "next/link";
import React from "react";
import { RxPlus } from "react-icons/rx";

const faqs = [
  {
    q: "How long does this take?",
    a: "The Sprint runs for thirty days — fixed scope, fixed timeline. The Fractional Partner option starts at a minimum three months. Both are clearly scoped so you know exactly what you're getting before we start.",
  },
  {
    q: "Do I need to be involved the whole time?",
    a: "Yes, but not constantly. You're in intake meetings, scorecard reviews, and hiring manager coaching sessions. The rest we handle. Think of it as partnership, not outsourcing.",
  },
  {
    q: "Do you guarantee placements?",
    a: "We guarantee process. We build the system, run the sourcing, and coach your team. The hires that come through are strong because the funnel is sound. That's how we hit 85–90% offer acceptance.",
  },
  {
    q: "What if we only have one open role?",
    a: "The Sprint is your fit. Thirty days of intake, job design, scorecards, and sourcing strategy. You'll have a repeatable process for this hire and every one after it.",
  },
  {
    q: "What if we need more than thirty days?",
    a: "The Sprint gets you to a working process. If you have multiple open roles or need ongoing support, we move to the Fractional Talent Acquisition Partner model — embedded, full-cycle recruiting for as long as you need it.",
  },
  {
    q: "Are you a staffing agency?",
    a: "No. We're a boutique advisory firm. We design your hiring infrastructure and embed with your team. We don't place bodies and disappear — we build systems that keep running even without us.",
  },
  {
    q: "What's included in the Sprint?",
    a: "Intake design, job descriptions, evaluation scorecards, hiring manager coaching, and sourcing strategy. Everything you need to run structured hiring on your own after thirty days.",
  },
  {
    q: "What happens after the sprint ends?",
    a: "You have a documented process, trained hiring managers, and a sourcing strategy that works. We're available for questions, but the system runs on its own. You own it completely — no recurring fees, no dependency on us.",
  },
];

export function Faq5() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-[1fr_1.5fr] md:gap-x-12 lg:gap-x-20">
          {/* Left col */}
          <div>
            <span className="eyebrow mb-4 inline-block">FAQ</span>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Common questions
            </h2>
            <p className="mb-8 md:text-md" style={{ fontFamily: "'Lora', Georgia, serif" }}>
              Questions about how we work and what we build for you.
            </p>

            {/* Still have questions box */}
            <div
              className="rounded-lg p-6"
              style={{
                background: "var(--navy-light)",
                border: "1px solid var(--border)",
              }}
            >
              <h4
                className="text-lg font-bold mb-2"
                style={{ fontFamily: "'Poppins', Arial, sans-serif" }}
              >
                Still have questions?
              </h4>
              <p
                className="text-sm mb-4"
                style={{ color: "var(--text-light)", fontFamily: "'Lora', Georgia, serif" }}
              >
                Reach out and let&apos;s talk about your hiring challenge.
              </p>
              <Link href="/#contact">
                <button
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: "linear-gradient(135deg, var(--navy-dark), var(--navy))",
                    color: "white",
                    fontFamily: "'Poppins', Arial, sans-serif",
                    boxShadow: "var(--shadow-teal)",
                  }}
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>

          {/* Accordion */}
          <Accordion type="multiple" className="grid items-start gap-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-lg px-5 md:px-6"
                style={{
                  border: "1px solid var(--border)",
                  background: "var(--white)",
                }}
              >
                <AccordionTrigger
                  icon={
                    <RxPlus
                      className="size-5 shrink-0 transition-transform duration-300 [&[data-state=open]]:rotate-45"
                      style={{ color: "var(--navy)" }}
                    />
                  }
                  className="py-4 md:py-5 text-sm font-semibold md:text-base [&[data-state=open]>svg]:rotate-45"
                  style={{ fontFamily: "'Poppins', Arial, sans-serif", color: "var(--charcoal)" }}
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent
                  className="pb-4 md:pb-5 text-sm leading-relaxed"
                  style={{ color: "var(--text-light)", fontFamily: "'Lora', Georgia, serif" }}
                >
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
