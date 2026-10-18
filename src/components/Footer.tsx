"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="converto-footer">
      {/* Top Main Section */}
      <motion.div
        className="converto-footer-top"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Brand Column */}
        <div className="converto-brand-col">
          <h2 className="converto-brand-title">UROOJ FATIMA</h2>
          <p className="converto-brand-desc">
            Specialized In High Quality Impactfull Design,
            high-impact slide decks, and Agentic AI solutions.
          </p>
        </div>

        {/* Links Navigation Grid */}
        <div className="converto-nav-grid">
          {/* Quick link */}
          <div className="converto-col">
            <h4 className="converto-col-title">Quick link</h4>
            <ul className="converto-links">
              <li><a href="#about">Home</a></li>
              <li><a href="#posters">Posters</a></li>
              <li><a href="#banners">Banners</a></li>
              <li><a href="#slides">Slides</a></li>
              <li><a href="#workflow">Workflow</a></li>
            </ul>
          </div>

          {/* Focus Areas */}
          <div className="converto-col">
            <h4 className="converto-col-title">Focus</h4>
            <ul className="converto-links">
              <li><a href="#posters">Social Posters</a></li>
              <li><a href="#banners">LinkedIn Banners</a></li>
              <li><a href="#slides">Slide Decks</a></li>
              <li><a href="#ai-video">AI Video</a></li>
              <li><a href="#workflow">Process</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="converto-col">
            <h4 className="converto-col-title">Contact</h4>
            <ul className="converto-links">
              <li><a href="#contact">Get in Touch</a></li>
              <li><a href="mailto:uroojf199@gmail.com" title="uroojf199@gmail.com">Email (uroojf199@gmail.com)</a></li>
            </ul>
          </div>

          {/* Social / Follow Me */}
          <div className="converto-col">
            <h4 className="converto-col-title">Follow Me</h4>
            <ul className="converto-links">
              <li>
                <motion.a
                  href="https://www.linkedin.com/in/urooj-fatima-b2698431a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="converto-social-link"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span>LinkedIn</span>
                  <ArrowUpRight size={13} className="ext-arrow" />
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="https://www.instagram.com/_urooj.fatimaaa_?igsi=MWd6MnFhdzd2azRpOA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="converto-social-link"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <span>Instagram</span>
                  <ArrowUpRight size={13} className="ext-arrow" />
                </motion.a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Middle Row (Copyright + Meta) */}
      <div className="converto-footer-mid">
        <p className="converto-copy">
          &copy; {new Date().getFullYear()} Urooj Fatima. All rights reserved.
        </p>
        <p className="converto-powered">
          Designed by Urooj Fatima &bull; Powered by Next.js
        </p>
      </div>

      {/* Massive Gradient Display Watermark Text at Bottom (exact reference style) */}
      <div className="converto-giant-wrap" aria-hidden="true">
        <span className="converto-giant-text">
          UROOJ FATIMA
        </span>
      </div>
    </footer>
  );
}
