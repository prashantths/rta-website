"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import React from "react";

const tabs = [
  {
    value: "tab-one",
    heading: "Infrastructure you own permanently",
    body: "The system keeps running after the engagement ends. That is the point — we build it, transfer the knowledge, and leave you with something you can operate independently.",
    img: "/images/founder-workspace.jpg",
    imgAlt: "Infrastructure you own",
  },
  {
    value: "tab-two",
    heading: "Outbound sourcing, not just job posts",
    body: "60% of hires sourced proactively. We find candidates before they find you — using LinkedIn Recruiter, sourcing strategies, and targeted outreach.",
    img: "/images/track-record.jpg",
    imgAlt: "Outbound sourcing",
  },
  {
    value: "tab-three",
    heading: "Structured evaluation, not gut feel",
    body: "Scorecards and structured interviews. That is how you hit 85–90% offer acceptance. Every hire evaluated against the same consistent criteria.",
    img: "/images/services-pipeline.jpg",
    imgAlt: "Structured evaluation",
  },
];

export function Layout219() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-section-alt">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <span className="eyebrow mb-4 inline-block">Differentiators</span>
          <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
            What sets us apart
          </h2>
        </div>

        <Tabs
          defaultValue="tab-one"
          className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20"
        >
          {/* Image panel */}
          <div className="max-size-full order-last flex items-center justify-center overflow-hidden md:order-first">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="data-[state=active]:animate-tabs w-full"
              >
                <div
                  className="overflow-hidden rounded-lg"
                  style={{ boxShadow: "var(--shadow-lg)" }}
                >
                  <img
                    src={tab.img}
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg";
                    }}
                    alt={tab.imgAlt}
                    className="w-full object-cover aspect-[4/3]"
                  />
                </div>
              </TabsContent>
            ))}
          </div>

          {/* Tab list */}
          <TabsList className="order-first flex-col gap-6 py-8 md:order-last md:py-0">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex-col items-start whitespace-normal border-0 border-l-2 border-transparent bg-transparent py-0 pl-6 pr-0 text-left transition-all duration-200 data-[state=active]:border-l-[3px] data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
                style={{
                  "--tw-border-opacity": 1,
                }}
              >
                <h3
                  className="mb-2 text-xl font-bold md:text-2xl md:leading-[1.3] lg:text-3xl data-[state=active]:text-current"
                  style={{ fontFamily: "'Poppins', Arial, sans-serif" }}
                >
                  {tab.heading}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "var(--text-light)",
                    fontFamily: "'Lora', Georgia, serif",
                  }}
                >
                  {tab.body}
                </p>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </section>
  );
}
