"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import SlidesSection from "@/components/SlidesSection";
import AIVideoSection from "@/components/AIVideoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { Compass, X, ChevronLeft, ChevronRight, ExternalLink, Maximize2, ArrowUpRight } from "lucide-react";

const WORKFLOW_STEPS = [
  {
    step: "STEP 01",
    title: "FIND INSPIRATION",
    desc: "Explore references, trends & visual ideas.",
  },
  {
    step: "STEP 02",
    title: "DEVELOP THE CONCEPT",
    desc: "Refine the idea with AI-assisted workflows.",
  },
  {
    step: "STEP 03",
    title: "DESIGN & REFINE",
    desc: "Perfect the visuals, typography & layout.",
  },
  {
    step: "STEP 04",
    title: "FINALIZE & PUBLISH",
    desc: "Export polished content, ready to share.",
  },
];

interface BannerItem {
  id: string;
  title: string;
  client: string;
  role: string;
  tagline: string;
  tags: string[];
  image: string;
  description: string;
  statsBadge?: string;
  deliverables?: string[];
  review?: {
    quote: string;
    author: string;
    screenshot: string;
    time?: string;
  };
}

const LINKEDIN_BANNERS: BannerItem[] = [
  {
    id: "hamna-smm",
    title: "Hamna — Social Media Manager",
    client: "Hamna • Client Profile",
    role: "Social Media Manager & Brand Strategist",
    tagline: "I Help Brands Go From Overlooked to Unforgettable.",
    tags: ["Branding", "Post Design", "Content Strategy", "1:1 Consultation CTA"],
    image: "/assets/banners/banner-hamna.png",
    description:
      "Designed by Urooj Fatima. High-conversion LinkedIn banner featuring dark mesh neon lighting, framed portrait cutout with avatar badge, and clear value-proposition typography.",
    statsBadge: "Client Profile Banner",
    deliverables: ["Custom 4:1 LinkedIn Canvas", "Profile Photo Integration", "High-Contrast Typography", "Figma & Canva Export"],
    review: {
      quote: "Girl you nailed it I love the design 👀💗",
      author: "Hamna",
      screenshot: "/assets/banners/banner-hamna-review.png",
      time: "9:57 pm",
    },
  },
];

interface PosterItem {
  id: string;
  img: string;
  alt: string;
  statsBadge?: string;
  statsSub?: string;
  screenshot?: string;
}

const POST_DESIGNS: PosterItem[] = [
  {
    id: "jev",
    img: "/assets/posters/poster-4.jpg",
    alt: "What is JEV? 400x Cheaper, 200x Faster",
    statsBadge: "4,525 Impressions",
    statsSub: "30 comments • 42+ loves",
    screenshot: "/assets/stats/post-jev.png",
  },
  {
    id: "voice-notes",
    img: "/assets/posters/poster-voice-notes.png",
    alt: "Still Listening To Your Own Voice Notes? Let AI Turn Them Into Tasks",
    statsBadge: "🎙️ Voice to Tasks AI",
    statsSub: "Dm 'AI' • @_urooj.fatimaaa_",
  },
  {
    id: "p1",
    img: "/assets/posters/poster-1.png",
    alt: "I was building AI Agents before it was a buzzword",
    statsBadge: "4,878 Impressions",
    statsSub: "74 comments • 134+ loves",
    screenshot: "/assets/stats/post-buzzword.png",
  },
  {
    id: "octopus",
    img: "/assets/posters/poster-octopus.jpg",
    alt: "You Don't Have To Carry It All. Let Your Agent Hold Some.",
    statsBadge: "🐙 Multi-Task Agent",
    statsSub: "Dm 'OCTOPUS' • 8 Arms, 1 Brain",
  },
  {
    id: "p5",
    img: "/assets/posters/poster-5.png",
    alt: "AI Video Generation Is Not What I Expected",
    statsBadge: "1,277 Impressions",
    statsSub: "14 comments • 27+ likes",
    screenshot: "/assets/stats/post-ai-video.png",
  },
  {
    id: "lead-followup",
    img: "/assets/posters/poster-lead-followup.jpg",
    alt: "Lead Ghosted You? Let AI Follow Up",
    statsBadge: "⚡ AI Follow-Up Engine",
    statsSub: "Dm 'LEAD' • Smart Follow-Ups",
  },
  {
    id: "p2",
    img: "/assets/posters/poster-2.jpg",
    alt: "Your AI Agent Isn't Broken — It's Missing 7 Things",
    statsBadge: "2,720 Impressions",
    statsSub: "26 comments • 83+ loves",
    screenshot: "/assets/stats/post-broken.png",
  },
  {
    id: "ai-trends",
    img: "/assets/posters/poster-ai-trends.jpg",
    alt: "Don't just follow AI trends. Be the one shaping the Future.",
    statsBadge: "🌧️ Shape the Future",
    statsSub: "Brand Vision • @_urooj.fatimaaa_",
  },
  {
    id: "p3",
    img: "/assets/posters/poster-3.png",
    alt: "This Is How AI Agents Saved Your Company",
    statsBadge: "1,184 Impressions",
    statsSub: "9 comments • 47+ loves",
    screenshot: "/assets/stats/post-saved-company.png",
  },
];

export default function HomePage() {
  const [selectedPosterIndex, setSelectedPosterIndex] = useState<number | null>(null);
  const [posterModalView, setPosterModalView] = useState<"artwork" | "proof">("artwork");
  const [selectedBanner, setSelectedBanner] = useState<BannerItem | null>(null);

  const activePoster = selectedPosterIndex !== null ? POST_DESIGNS[selectedPosterIndex] : null;

  const handlePrevPoster = () => {
    setSelectedPosterIndex((prev) => (prev !== null ? (prev - 1 + POST_DESIGNS.length) % POST_DESIGNS.length : 0));
    setPosterModalView("artwork");
  };

  const handleNextPoster = () => {
    setSelectedPosterIndex((prev) => (prev !== null ? (prev + 1) % POST_DESIGNS.length : 0));
    setPosterModalView("artwork");
  };

  const handleClosePosterModal = () => {
    setSelectedPosterIndex(null);
    setPosterModalView("artwork");
  };

  useEffect(() => {
    if (selectedPosterIndex === null && !selectedBanner) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedPosterIndex(null);
        setSelectedBanner(null);
      } else if (selectedPosterIndex !== null) {
        if (e.key === "ArrowLeft") {
          setSelectedPosterIndex((prev) => (prev !== null ? (prev - 1 + POST_DESIGNS.length) % POST_DESIGNS.length : 0));
          setPosterModalView("artwork");
        } else if (e.key === "ArrowRight") {
          setSelectedPosterIndex((prev) => (prev !== null ? (prev + 1) % POST_DESIGNS.length : 0));
          setPosterModalView("artwork");
        }
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPosterIndex, selectedBanner]);

  return (
    <div className="about-page-wrapper" style={{ gap: "90px" }}>
      {/* 1. TOP HERO SECTION: CINEMATIC REFERENCE DESIGN (MATCHING UPLOADED MOCKUP) */}
      <section id="about" className="cinematic-hero-section">
        <div className="cinematic-hero-glow" />

        {/* Giant PORTFOLIO typography layered with Portrait Cutout */}
        <div className="hero-display-wrap">
          {/* Layer 1: Background letters behind image (T and F outlined) */}
          <div className="hero-portfolio-text hero-portfolio-bg" aria-hidden="true">
            <div className="hero-word-track">
              <span className="hero-char-ghost">P</span>
              <span className="hero-char-ghost">O</span>
              <span className="hero-char-ghost">R</span>
              <span className="hero-char-outline">T</span>
              <span className="hero-char-outline">F</span>
              <span className="hero-char-ghost">O</span>
              <span className="hero-char-ghost">L</span>
              <span className="hero-char-ghost">I</span>
              <span className="hero-char-ghost">O</span>
            </div>
          </div>

          {/* Layer 2: Urooj's Center High-Quality Portrait (in front of T and F) */}
          <div className="hero-portrait-wrap">
            <motion.div
              style={{ width: "100%", height: "100%", display: "flex", alignItems: "flex-end", justifyContent: "center" }}
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/urooj_cutout.png"
                alt="Urooj Fatima"
                className="hero-portrait-img"
              />
            </motion.div>
          </div>

          {/* Layer 3: Foreground letters (solid POR, outlined O over shoulder, solid LIO) */}
          <div className="hero-portfolio-text hero-portfolio-fg" aria-hidden="true">
            <div className="hero-word-track">
              <span className="hero-char-solid">P</span>
              <span className="hero-char-solid">O</span>
              <span className="hero-char-solid">R</span>
              <span className="hero-char-ghost">T</span>
              <span className="hero-char-ghost">F</span>
              <span className="hero-char-outline">O</span>
              <span className="hero-char-solid">L</span>
              <span className="hero-char-solid">I</span>
              <span className="hero-char-solid">O</span>
            </div>
          </div>
        </div>

        {/* Text and Action Buttons below portrait with clean breathing room */}
        <motion.div
          className="hero-meta-wrap"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
        >
          <h1 className="hero-name">Hi, I'm Urooj Fatima</h1>

          <p className="hero-subtitle-primary">
            I create High quality Posters, Slides, AI Videos, AI Agents &amp; Automations workflows too. Scroll to see my work.
            <br />
            See you on LinkedIn &amp; Instagram &mdash; just DM me to get started
          </p>

          {/* AI Portfolio Badge (Short High-Converting CTA) */}
          <a
            href="https://uroojfatima.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-ai-badge"
          >
            <span className="hero-ai-badge-text">
              Looking for my Agentic AI projects?
            </span>
            <span className="hero-ai-badge-cta">
              Explore AI Portfolio ↗
            </span>
          </a>

          <p className="hero-subtitle-secondary">
            Post Design | AI Video Generation |  Agentic AI  | AI Automation 
          </p>

          {/* Action Buttons: LinkedIn, Instagram & Contact Me */}
          <div className="hero-actions-row">
            <a
              href="https://www.linkedin.com/in/urooj-fatima-b2698431a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-pill-btn hero-btn-dark"
            >
              <span className="hero-btn-icon hero-icon-linkedin">
                <span className="hero-linkedin-badge">in</span>
              </span>
              <span>LinkedIn</span>
            </a>

            <a
              href="https://www.instagram.com/_urooj.fatimaaa_?igsi=MWd6MnFhdzd2azRpOA=="
              target="_blank"
              rel="noopener noreferrer"
              className="hero-pill-btn hero-btn-dark"
            >
              <span className="hero-btn-icon hero-icon-instagram">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </span>
              <span>Instagram</span>
            </a>

            <a
              href="#contact"
              className="hero-pill-btn hero-btn-accent"
            >
              <span>Contact Me</span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* 2. POST I DESIGNS (HORIZONTAL INFINITE MARQUEE, JEV FIRST) */}
      <section id="posters" style={{ width: "100%", margin: "0 auto", padding: "10px 0" }}>
        <div className="section-header" style={{ marginBottom: "22px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "var(--accent-violet)",
                  background: "var(--accent-violet-subtle)",
                  padding: "3px 10px",
                  borderRadius: "var(--radius-sm)",
                }}
              >
                Creative Posters
              </span>
            </div>
            <h2 className="section-title">POST I DESIGNS</h2>
          </div>
        </div>

        <div className="posters-marquee-container">
          <div className="posters-marquee-track">
            {/* Array doubled for seamless continuous loop */}
            {[...POST_DESIGNS, ...POST_DESIGNS].map((p, index) => (
              <div
                key={`${p.id}-${index}`}
                className="poster-marquee-item"
                onClick={() => {
                  setSelectedPosterIndex(index % POST_DESIGNS.length);
                  setPosterModalView("artwork");
                }}
                title="Click to view full post individually"
              >
                {/* Poster Graphic */}
                <div style={{ position: "relative", width: "100%", height: "290px", flex: 1, minHeight: 0 }}>
                  <Image
                    src={p.img}
                    alt={p.alt}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="(max-width: 640px) 280px, 340px"
                    priority={index < 4}
                  />
                </div>

                {/* Prominent High-Visibility Stats Bottom Bar */}
                {p.statsBadge && (
                  <div
                    style={{
                      width: "100%",
                      padding: "8px 14px",
                      background: "rgba(244, 244, 246, 0.95)",
                      borderTop: "1px solid var(--border-light)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "6px",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: 800,
                          color: p.statsBadge.includes("Impressions") ? "#5835E5" : "var(--text-main)",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        {p.statsBadge.includes("Impressions") && <span>📈</span>}
                        {p.statsBadge}
                      </span>
                      {p.statsSub && (
                        <span style={{ fontSize: "10.5px", color: "var(--text-muted)" }}>
                          {p.statsSub}
                        </span>
                      )}
                    </div>

                    {p.screenshot ? (
                      <span
                        style={{
                          fontSize: "10px",
                          fontWeight: 700,
                          background: "#0E0E0E",
                          color: "#FFFFFF",
                          padding: "3px 8px",
                          borderRadius: "6px",
                          letterSpacing: "0.02em",
                          flexShrink: 0,
                        }}
                      >
                        Proof ↗
                      </span>
                    ) : (
                      <span
                        style={{
                          fontSize: "10px",
                          fontWeight: 700,
                          background: "var(--accent-violet-subtle)",
                          color: "var(--accent-violet)",
                          padding: "3px 8px",
                          borderRadius: "6px",
                          letterSpacing: "0.02em",
                          flexShrink: 0,
                        }}
                      >
                        View ↗
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDIVIDUAL POST VIEWER LIGHTBOX MODAL */}
      {selectedPosterIndex !== null && activePoster && (
        <div
          className="modal-overlay"
          onClick={handleClosePosterModal}
          role="dialog"
          aria-modal="true"
          style={{
            padding: "16px",
            zIndex: 9999,
            background: "rgba(10, 10, 14, 0.82)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
          }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "920px",
              width: "100%",
              maxHeight: "94vh",
              padding: "0",
              borderRadius: "22px",
              background: "#0F0F14",
              color: "#FFFFFF",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 35px rgba(88, 53, 229, 0.25)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Modal Top Bar */}
            <div
              style={{
                padding: "16px 22px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                background: "rgba(255, 255, 255, 0.02)",
                gap: "12px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: 0 }}>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "#A78BFA",
                    background: "rgba(139, 92, 246, 0.18)",
                    padding: "4px 10px",
                    borderRadius: "20px",
                    flexShrink: 0,
                  }}
                >
                  Post {selectedPosterIndex + 1} of {POST_DESIGNS.length}
                </span>
                <h3
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    margin: 0,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {activePoster.alt}
                </h3>
              </div>

              {/* View Toggle Tabs (if poster has a verified screenshot proof) */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
                {activePoster.screenshot && (
                  <div
                    style={{
                      display: "inline-flex",
                      background: "rgba(255, 255, 255, 0.08)",
                      borderRadius: "20px",
                      padding: "3px",
                      gap: "2px",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setPosterModalView("artwork")}
                      style={{
                        padding: "5px 12px",
                        borderRadius: "16px",
                        fontSize: "11.5px",
                        fontWeight: 700,
                        border: "none",
                        cursor: "pointer",
                        background: posterModalView === "artwork" ? "#5835E5" : "transparent",
                        color: posterModalView === "artwork" ? "#FFFFFF" : "rgba(255, 255, 255, 0.65)",
                        transition: "all 0.2s ease",
                      }}
                    >
                      Artwork
                    </button>
                    <button
                      type="button"
                      onClick={() => setPosterModalView("proof")}
                      style={{
                        padding: "5px 12px",
                        borderRadius: "16px",
                        fontSize: "11.5px",
                        fontWeight: 700,
                        border: "none",
                        cursor: "pointer",
                        background: posterModalView === "proof" ? "#22C55E" : "transparent",
                        color: posterModalView === "proof" ? "#FFFFFF" : "rgba(255, 255, 255, 0.65)",
                        transition: "all 0.2s ease",
                      }}
                    >
                      Proof 📈
                    </button>
                  </div>
                )}

                {/* Close button */}
                <button
                  type="button"
                  onClick={handleClosePosterModal}
                  aria-label="Close poster view"
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "50%",
                    width: "34px",
                    height: "34px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                    cursor: "pointer",
                    transition: "background 0.2s ease, transform 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <X size={17} />
                </button>
              </div>
            </div>

            {/* Modal Center Display (Artwork + Left/Right Arrow Nav) */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "clamp(340px, 54vh, 520px)",
                background: "radial-gradient(ellipse at center, rgba(88, 53, 229, 0.12) 0%, #08080C 75%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px",
              }}
            >
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <Image
                  src={posterModalView === "proof" && activePoster.screenshot ? activePoster.screenshot : activePoster.img}
                  alt={activePoster.alt}
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                  sizes="(max-width: 960px) 90vw, 880px"
                />
              </div>

              {/* Prev Arrow */}
              <button
                type="button"
                onClick={handlePrevPoster}
                aria-label="Previous poster"
                title="Previous (Left Arrow key)"
                style={{
                  position: "absolute",
                  left: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "rgba(18, 18, 24, 0.75)",
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "0 6px 18px rgba(0, 0, 0, 0.4)",
                  backdropFilter: "blur(8px)",
                  transition: "all 0.2s ease",
                  zIndex: 10,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#5835E5";
                  e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(18, 18, 24, 0.75)";
                  e.currentTarget.style.transform = "translateY(-50%) scale(1)";
                }}
              >
                <ChevronLeft size={22} />
              </button>

              {/* Next Arrow */}
              <button
                type="button"
                onClick={handleNextPoster}
                aria-label="Next poster"
                title="Next (Right Arrow key)"
                style={{
                  position: "absolute",
                  right: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "rgba(18, 18, 24, 0.75)",
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "0 6px 18px rgba(0, 0, 0, 0.4)",
                  backdropFilter: "blur(8px)",
                  transition: "all 0.2s ease",
                  zIndex: 10,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#5835E5";
                  e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(18, 18, 24, 0.75)";
                  e.currentTarget.style.transform = "translateY(-50%) scale(1)";
                }}
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* Modal Bottom Details & Direct Actions */}
            <div
              style={{
                padding: "16px 22px",
                background: "rgba(255, 255, 255, 0.03)",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "13.5px", fontWeight: 700, color: "#FFFFFF" }}>
                    {activePoster.statsBadge}
                  </span>
                  {activePoster.screenshot && (
                    <span style={{ fontSize: "11px", fontWeight: 700, color: "#22C55E", background: "rgba(34, 197, 94, 0.15)", padding: "1px 8px", borderRadius: "10px" }}>
                      ✓ Verified
                    </span>
                  )}
                </div>
                {activePoster.statsSub && (
                  <span style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.65)" }}>
                    {activePoster.statsSub}
                  </span>
                )}
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                {/* Open Original Full File in New Tab */}
                <a
                  href={posterModalView === "proof" && activePoster.screenshot ? activePoster.screenshot : activePoster.img}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "7px 14px",
                    borderRadius: "10px",
                    background: "rgba(255, 255, 255, 0.08)",
                    color: "#FFFFFF",
                    border: "1px solid rgba(255, 255, 255, 0.14)",
                    fontSize: "12px",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "background 0.2s ease",
                  }}
                >
                  <span>Open Original</span>
                  <ExternalLink size={13} />
                </a>

                {/* DM / Inbound Action */}
                <a
                  href="https://www.instagram.com/_urooj.fatimaaa_?igsi=MWd6MnFhdzd2azRpOA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "7px 16px",
                    borderRadius: "10px",
                    background: "var(--accent-violet)",
                    color: "#FFFFFF",
                    fontSize: "12px",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  <span>DM Urooj to Design Yours</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Mini Thumbnail Carousel Strip */}
            <div
              style={{
                padding: "10px 16px",
                background: "rgba(0, 0, 0, 0.5)",
                borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                display: "flex",
                gap: "8px",
                overflowX: "auto",
              }}
            >
              {POST_DESIGNS.map((item, idx) => {
                const isSelected = idx === selectedPosterIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setSelectedPosterIndex(idx);
                      setPosterModalView("artwork");
                    }}
                    style={{
                      position: "relative",
                      width: "44px",
                      height: "54px",
                      borderRadius: "8px",
                      overflow: "hidden",
                      border: isSelected ? "2px solid #5835E5" : "1px solid rgba(255, 255, 255, 0.12)",
                      opacity: isSelected ? 1 : 0.5,
                      transform: isSelected ? "scale(1.06)" : "scale(1)",
                      transition: "all 0.2s ease",
                      flexShrink: 0,
                      background: "#181820",
                      cursor: "pointer",
                      padding: 0,
                    }}
                    title={item.alt}
                  >
                    <Image
                      src={item.img}
                      alt={item.alt}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="44px"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* 2.5 LINKEDIN BANNERS I DESIGN */}
      <section id="banners" style={{ width: "100%", margin: "0 auto", padding: "10px 0" }}>
        <div className="section-header" style={{ marginBottom: "24px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "var(--accent-violet)",
                  background: "var(--accent-violet-subtle)",
                  padding: "3px 10px",
                  borderRadius: "var(--radius-sm)",
                }}
              >
                Profile Branding
              </span>
              <span style={{ fontSize: "12px", color: "var(--text-light)" }}>•</span>
              <span style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: 500 }}>
                High-Conversion Header Design
              </span>
            </div>
            <h2 className="section-title">LINKEDIN BANNERS I DESIGN</h2>
          </div>
        </div>

        {/* Banner Showcase Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {LINKEDIN_BANNERS.map((banner) => (
            <div
              key={banner.id}
              className="linkedin-banner-card"
              onClick={() => setSelectedBanner(banner)}
              title="Click to view full LinkedIn banner in high resolution"
            >
              {/* Banner Graphic Frame with LinkedIn 4:1 Ratio */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "1584 / 396",
                  background: "#0E0E12",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={banner.image}
                  alt={banner.title}
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 1200px) 100vw, 1140px"
                  priority
                />
                <div
                  className="banner-expand-hint"
                  style={{
                    position: "absolute",
                    top: "14px",
                    right: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "rgba(0, 0, 0, 0.65)",
                    backdropFilter: "blur(8px)",
                    color: "#FFFFFF",
                    fontSize: "11.5px",
                    fontWeight: 700,
                    padding: "6px 12px",
                    borderRadius: "20px",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    transition: "all 0.25s ease",
                  }}
                >
                  <Maximize2 size={13} />
                  <span>Click to Expand</span>
                </div>
              </div>

              {/* Banner Details Row */}
              <div
                className="banner-details-row"
                style={{
                  padding: "18px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "14px",
                  borderTop: "1px solid var(--border-light)",
                  background: "linear-gradient(180deg, #FFFFFF 0%, #FAFAFC 100%)",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: 800,
                        color: "var(--text-main)",
                        margin: 0,
                      }}
                    >
                      {banner.title}
                    </h3>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        background: "rgba(249, 115, 22, 0.12)",
                        color: "#EA580C",
                        padding: "2px 9px",
                        borderRadius: "12px",
                      }}
                    >
                      {banner.role}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "13.5px",
                      color: "var(--text-muted)",
                      margin: "4px 0 0",
                    }}
                  >
                    &ldquo;{banner.tagline}&rdquo; &mdash; {banner.description}
                  </p>
                </div>

                {/* Tags & Action Button */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    {banner.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "11px",
                          fontWeight: 600,
                          padding: "3px 9px",
                          borderRadius: "12px",
                          background: "var(--bg-body)",
                          border: "1px solid var(--border-light)",
                          color: "var(--text-muted)",
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "8px 16px",
                      borderRadius: "10px",
                      background: "var(--accent-violet)",
                      color: "#FFFFFF",
                      border: "none",
                      fontSize: "12.5px",
                      fontWeight: 700,
                      cursor: "pointer",
                      boxShadow: "0 4px 12px rgba(88, 53, 229, 0.25)",
                    }}
                  >
                    <span>View Banner</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>

              {/* Client Review Screenshot Only */}
              {banner.review && (
                <div
                  style={{
                    padding: "16px 24px",
                    background: "#FAFAFC",
                    borderTop: "1px solid var(--border-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      maxWidth: "414px",
                      width: "100%",
                      height: "66px",
                      borderRadius: "10px",
                      overflow: "hidden",
                      border: "1px solid rgba(0, 0, 0, 0.08)",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                      background: "#FFFFFF",
                    }}
                  >
                    <Image
                      src={banner.review.screenshot}
                      alt="Client Review"
                      fill
                      style={{ objectFit: "contain" }}
                      sizes="(max-width: 640px) 100vw, 414px"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* BANNER LIGHTBOX MODAL */}
      {selectedBanner && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedBanner(null)}
          role="dialog"
          aria-modal="true"
          style={{
            padding: "16px",
            zIndex: 9999,
            background: "rgba(10, 10, 14, 0.82)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
          }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "1100px",
              width: "100%",
              maxHeight: "92vh",
              padding: "0",
              borderRadius: "22px",
              background: "#0E0E12",
              color: "#FFFFFF",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 35px rgba(249, 115, 22, 0.2)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Top Bar */}
            <div
              style={{
                padding: "16px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                background: "rgba(255, 255, 255, 0.02)",
                gap: "12px",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "#F97316",
                    background: "rgba(249, 115, 22, 0.15)",
                    padding: "4px 10px",
                    borderRadius: "20px",
                  }}
                >
                  LinkedIn Banner Design
                </span>
                <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#FFFFFF", margin: "6px 0 0" }}>
                  {selectedBanner.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedBanner(null)}
                aria-label="Close banner view"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  cursor: "pointer",
                  transition: "background 0.2s ease",
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Banner Graphic Frame */}
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "1584 / 396",
                background: "#08080A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px",
              }}
            >
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <Image
                  src={selectedBanner.image}
                  alt={selectedBanner.title}
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                  sizes="1100px"
                />
              </div>
            </div>

            {/* Client Review Screenshot in Modal */}
            {selectedBanner.review && (
              <div
                style={{
                  padding: "14px 24px",
                  background: "rgba(255, 255, 255, 0.02)",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    maxWidth: "414px",
                    width: "100%",
                    height: "66px",
                    borderRadius: "10px",
                    overflow: "hidden",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    background: "#FFFFFF",
                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <Image
                    src={selectedBanner.review.screenshot}
                    alt="Client Review"
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="(max-width: 640px) 100vw, 414px"
                  />
                </div>
              </div>
            )}

            {/* Bottom Bar */}
            <div
              style={{
                padding: "18px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "12px",
                background: "rgba(255, 255, 255, 0.03)",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "#FFFFFF" }}>
                  {selectedBanner.role}
                </div>
                <div style={{ fontSize: "12.5px", color: "rgba(255, 255, 255, 0.65)", marginTop: "2px" }}>
                  &ldquo;{selectedBanner.tagline}&rdquo;
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                <a
                  href={selectedBanner.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 14px",
                    borderRadius: "10px",
                    background: "rgba(255, 255, 255, 0.08)",
                    color: "#FFFFFF",
                    border: "1px solid rgba(255, 255, 255, 0.14)",
                    fontSize: "12.5px",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  <span>Open Original</span>
                  <ExternalLink size={13} />
                </a>

                <a
                  href="#contact"
                  onClick={() => setSelectedBanner(null)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 18px",
                    borderRadius: "10px",
                    background: "var(--accent-violet)",
                    color: "#FFFFFF",
                    fontSize: "12.5px",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  <span>Order Your LinkedIn Banner</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. SLIDES WALA PART (INTERACTIVE CAROUSEL) */}
      <SlidesSection />

      {/* 4. AI VIDEO GENERATION SECTION */}
      <AIVideoSection />

      {/* 5. HOW DO I WORK (4-STEP WORKFLOW) */}
      <section id="workflow">
        <div className="center-section-header">
          <div className="workflow-pill-wrap">
            <span className="workflow-process-pill">
              <Compass size={14} color="#5835E5" />
              <span>CREATIVE PROCESS</span>
            </span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(30px, 4.2vw, 44px)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              color: "#0E0E0E",
              marginTop: "8px",
            }}
          >
            How Do I Work?
          </h2>
          <p style={{ fontSize: "15px", color: "var(--text-muted)", maxWidth: "560px", margin: "6px auto 0" }}>
            My 4-step creative process, from inspiration to publication.
          </p>
        </div>

        <div className="workflow-grid">
          {WORKFLOW_STEPS.map((item, index) => (
            <motion.div
              key={item.step}
              className="workflow-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -6,
                boxShadow: "0 16px 36px rgba(0, 0, 0, 0.08)",
                transition: { type: "spring", stiffness: 350, damping: 25 },
              }}
            >
              <div className="workflow-card-top">
                <span className="workflow-step-pill">{item.step}</span>
              </div>
              <h3 className="workflow-card-title">{item.title}</h3>
              <p className="workflow-card-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. WHAT PEOPLE SAY ABOUT DESIGNS (COMMUNITY COMPLIMENTS & TESTIMONIALS) */}
      <TestimonialsSection />

      {/* 7. CONTACT ME SECTION */}
      <section id="contact" style={{ maxWidth: "760px", margin: "0 auto", width: "100%" }}>
        <ContactForm />
      </section>

      {/* Converto Reference Style Luxury Footer */}
      <Footer />
    </div>
  );
}
