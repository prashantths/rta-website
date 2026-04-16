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

export function Layout141() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        {/* Philosophy callout — centered, editorial */}
        <div className="mx-auto max-w-2xl text-center mb-12 md:mb-16">
          <span className="eyebrow mb-4 inline-block">Philosophy</span>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Systems that survive the consultant
          </h2>
          <p className="md:text-md mb-8" style={{ fontFamily: "'Lora', Georgia, serif" }}>
            At Resilience, we don&apos;t build dependency. We build infrastructure.
            Our hiring engine is designed to run without us.
            <br />
            Documented, repeatable, scalable. Owned by your team forever.
          </p>
          <div className="divider-amber w-20 mx-auto mb-8" />
          <Link href="/services">
            <button
              className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, var(--navy-dark), var(--navy))",
                color: "white",
                fontFamily: "'Poppins', Arial, sans-serif",
                boxShadow: "var(--shadow-teal)",
              }}
            >
              Explore our services
            </button>
          </Link>
        </div>

        {/* Three principle cards — accordion on mobile, grid on desktop */}
        {(() => {
          const principles = [
            {
              number: "01",
              heading: "Document everything",
              body: "Every process, framework, and scorecard is fully documented. Nothing lives only in someone's head.",
            },
            {
              number: "02",
              heading: "Transfer the knowledge",
              body: "I run coaching sessions with your hiring managers so the capability stays with your team — not with me.",
            },
            {
              number: "03",
              heading: "Leave behind what lasts",
              body: "When the engagement ends, you own the system completely. No recurring fees. No dependency on me.",
            },
          ];
          return (
            <>
              {/* Mobile: accordion */}
              <Accordion type="multiple" className="flex flex-col gap-3 md:hidden">
                {principles.map((card) => (
                  <AccordionItem
                    key={card.number}
                    value={card.number}
                    className="rounded-lg px-5"
                    style={{
                      background: "var(--white)",
                      border: "1px solid var(--border)",
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    <AccordionTrigger
                      icon={
                        <RxPlus
                          className="size-5 shrink-0 transition-transform duration-300 [&[data-state=open]]:rotate-45"
                          style={{ color: "var(--navy)" }}
                        />
                      }
                      className="py-4 text-sm font-semibold [&[data-state=open]>svg]:rotate-45"
                      style={{ fontFamily: "'Poppins', Arial, sans-serif", color: "var(--charcoal)" }}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className="text-xl font-bold"
                          style={{ color: "var(--navy-light)", fontFamily: "'Poppins', Arial, sans-serif", letterSpacing: "-0.04em" }}
                        >
                          {card.number}
                        </span>
                        {card.heading}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent
                      className="pb-4 text-sm leading-relaxed"
                      style={{ color: "var(--text-light)", fontFamily: "'Lora', Georgia, serif" }}
                    >
                      {card.body}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {/* Desktop: card grid */}
              <div className="hidden md:grid md:grid-cols-3 md:gap-6">
                {principles.map((card) => (
                  <div
                    key={card.number}
                    className="rounded-lg p-8"
                    style={{
                      background: "var(--white)",
                      border: "1px solid var(--border)",
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    <p
                      className="text-4xl font-bold mb-4"
                      style={{ color: "var(--navy-light)", fontFamily: "'Poppins', Arial, sans-serif", letterSpacing: "-0.04em" }}
                    >
                      {card.number}
                    </p>
                    <h3 className="text-lg font-bold mb-2 md:text-xl">{card.heading}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-light)", fontFamily: "'Lora', Georgia, serif" }}>
                      {card.body}
                    </p>
                  </div>
                ))}
              </div>
            </>
          );
        })()}
      </div>
    </section>
  );
}
