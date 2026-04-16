"use client";

import Link from "next/link";
import React from "react";

export function Faq8() {
  return (
    <section id="faq" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Questions
          </h2>
          <p className="md:text-md">What you need to know before we talk</p>
          <div className="mt-6 md:mt-8">
            <Link href="/#contact">
              <button
                className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, var(--navy-dark), var(--navy))",
                  color: "white",
                  fontFamily: "'Poppins', Arial, sans-serif",
                  boxShadow: "var(--shadow-teal)",
                }}
              >
                Talk to a Talent Advisor
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h3 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How long does the sprint take?
            </h3>
            <p>
              Thirty days. Fixed scope, fixed timeline. We move fast because we
              know what we're doing and you're ready to move.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Do I need to be involved the whole time?
            </h3>
            <p>
              Yes, but not constantly. You're in intake meetings, scorecard
              reviews, and manager coaching. The rest we handle. Think of it as
              partnership, not outsourcing.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What if we need more than thirty days?
            </h3>
            <p>
              The sprint gets you to working process. If you have multiple open
              roles or need ongoing support, we move to the Fractional Talent
              Acquisition Partner model. That's the embedded partnership.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Are you a staffing agency?
            </h3>
            <p>
              No. We don't place people. We build your hiring system so you can
              place the right people yourself. You own the relationships and the
              process.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What happens after the sprint ends?
            </h3>
            <p>
              You have a documented process, trained managers, and a sourcing
              strategy that works. We're available for questions, but the system
              runs on its own.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
