"use client";

import React from "react";
import { BiLogoLinkedinSquare } from "react-icons/bi";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/service-details", label: "Service Details" },
  { href: "/#contact", label: "Contact" },
];

export function Footer4() {
  return (
    <footer
      className="px-[5%] pt-14 pb-8 md:pt-20 md:pb-10"
      style={{ background: "var(--charcoal)", color: "var(--off-white)" }}
    >
      <div className="container">
        {/* Top section */}
        <div className="grid grid-cols-1 gap-10 pb-10 md:pb-14 md:grid-cols-2 lg:grid-cols-[1fr_auto_auto] lg:gap-x-20 lg:items-start border-b"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          {/* Brand */}
          <div className="max-w-xs">
            <div className="mb-4">
              <img
                src="/images/logo-dark.png"
                alt="Resilience Talent Advisory"
                className="h-20 w-auto object-contain"
              />
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Lora', Georgia, serif" }}
            >
              Boutique recruitment consulting for Ontario startups and SMBs.
              We build the hiring infrastructure you own permanently — no agency dependency.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/prashantth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold transition-opacity hover:opacity-70"
                style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Poppins', Arial, sans-serif" }}
              >
                <BiLogoLinkedinSquare className="size-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-4"
              style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Poppins', Arial, sans-serif" }}
            >
              Navigation
            </p>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-opacity hover:opacity-70"
                    style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Poppins', Arial, sans-serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get started */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-4"
              style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Poppins', Arial, sans-serif" }}
            >
              Get Started
            </p>
            <p
              className="text-sm mb-5"
              style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Lora', Georgia, serif" }}
            >
              Ready to build a hiring system that works without you?
            </p>
            <a href="/#contact">
              <button
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, var(--accent-dark), var(--accent))",
                  color: "var(--charcoal)",
                  fontFamily: "'Poppins', Arial, sans-serif",
                  boxShadow: "var(--shadow-amber)",
                }}
              >
                Book a Discovery Call
              </button>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col-reverse items-center gap-3 md:flex-row md:justify-between"
        >
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Poppins', Arial, sans-serif" }}
          >
            © 2026 Resilience Talent Advisory. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Poppins', Arial, sans-serif" }}
          >
            Ontario, Canada
          </p>
        </div>
      </div>
    </footer>
  );
}
