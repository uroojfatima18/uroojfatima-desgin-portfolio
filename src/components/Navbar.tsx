"use client";

import { ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Posters", href: "#posters" },
  { name: "Banners", href: "#banners" },
  { name: "Slides", href: "#slides" },
  { name: "AI Videos", href: "#ai-video" },
  { name: "Reviews", href: "#compliments" },
  { name: "Process", href: "#workflow" },
];

export default function Navbar() {
  return (
    <nav className="floating-nav" aria-label="Main Navigation">
      {NAV_LINKS.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="nav-link"
        >
          {link.name}
        </a>
      ))}

      <a href="#contact" className="nav-cta">
        <span>Contact Me</span>
        <ArrowUpRight size={15} />
      </a>
    </nav>
  );
}
