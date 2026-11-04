"use client";

import { useState, useRef } from "react";
import { Play, Pause, Maximize2, Sparkles, Film, X, Volume2, VolumeX, Briefcase, UserCheck } from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
  category: "Own Profile" | "Client Work";
  badge: string;
  badgeType: "profile" | "client";
  description: string;
  src: string;
}

const VIDEOS: VideoItem[] = [
  {
    id: "v1-profile",
    title: "How AI Agent Works",
    category: "Own Profile",
    badge: "Own Profile",
    badgeType: "profile",
    description: "Generative AI video styling, digital identity & cinematic motion",
    src: "/assets/videos/final-without-subtitle.mp4",
  },
  {
    id: "v1-tiktok",
    title: "Variant 1 TikTok",
    category: "Own Profile",
    badge: "Own Profile",
    badgeType: "profile",
    description: "Short-form storytelling video • TikTok edit",
    src: "/assets/videos/AI-Story%20telling%20videos/variant%201%20tiktok.mp4",
  },
  {
    id: "v1-youtube",
    title: "Variant 1 YouTube",
    category: "Own Profile",
    badge: "Own Profile",
    badgeType: "profile",
    description: "Long-form storytelling video • YouTube edit",
    src: "/assets/videos/AI-Story%20telling%20videos/variant%201%20yt.mp4",
  },
  {
    id: "v2-tiktok",
    title: "Variant 2 TikTok",
    category: "Own Profile",
    badge: "Own Profile",
    badgeType: "profile",
    description: "Short-form storytelling video • TikTok edit",
    src: "/assets/videos/AI-Story%20telling%20videos/variant%202%20tiktok.mp4",
  },
  {
    id: "v3-youtube",
    title: "Variant 2 YouTube",
    category: "Own Profile",
    badge: "Own Profile",
    badgeType: "profile",
    description: "Long-form storytelling video • YouTube edit",
    src: "/assets/videos/AI-Story%20telling%20videos/variant%202%20yt.mp4",
  },
  {
    id: "v4-profile",
    title: "AI Engineering In 2026",
    category: "Own Profile",
    badge: "Own Profile",
    badgeType: "profile",
    description: "Prompt  -> Context -> Loop -> Graph -> Harness",
    src: "/assets/videos/prompt-engineering.mp4",
  },
];

export default function AIVideoSection() {
  const [activeModalVideo, setActiveModalVideo] = useState<VideoItem | null>(null);
  const [isHoverPaused, setIsHoverPaused] = useState(false);

  // Repeat items to ensure seamless infinite looping marquee
  const loopedVideos = [...VIDEOS, ...VIDEOS, ...VIDEOS];

  return (
    <section id="ai-video" style={{ width: "100%", margin: "0 auto", padding: "10px 0" }}>
      {/* Section Header */}
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
              Generative Motion &amp; Media
            </span>
            <span style={{ fontSize: "12px", color: "var(--text-light)" }}>•</span>
            <span style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: 500 }}>
              Horizontal Reel
            </span>
          </div>
          <h2 className="section-title">AI VIDEO GENERATION</h2>
        </div>
      </div>

      {/* Horizontal Infinite Marquee Carousel (Like Posters) */}
      <div
        className="videos-marquee-container"
        onMouseEnter={() => setIsHoverPaused(true)}
        onMouseLeave={() => setIsHoverPaused(false)}
      >
        <div
          className="videos-marquee-track"
          style={{
            animationPlayState: isHoverPaused ? "paused" : "running",
          }}
        >
          {loopedVideos.map((video, idx) => {
            const isClient = video.badgeType === "client";
            return (
              <div
                key={`${video.id}-${idx}`}
                className="video-marquee-card"
                onClick={() => setActiveModalVideo(video)}
              >
                {/* Video Preview Box */}
                <div className="video-card-screen-wrap group">
                  <video
                    src={video.src}
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="metadata"
                  />

                  {/* Dark gradient vignette overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(14, 14, 18, 0.75) 0%, rgba(14, 14, 18, 0.1) 50%, rgba(14, 14, 18, 0.4) 100%)",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Category Pill Tag */}
                  <div
                    style={{
                      position: "absolute",
                      top: "14px",
                      left: "14px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "5px 12px",
                      borderRadius: "var(--radius-full)",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.03em",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      background: isClient
                        ? "linear-gradient(135deg, rgba(16, 185, 129, 0.9), rgba(5, 150, 105, 0.9))"
                        : "linear-gradient(135deg, rgba(88, 53, 229, 0.9), rgba(124, 58, 237, 0.9))",
                      color: "#FFFFFF",
                      boxShadow: isClient
                        ? "0 4px 14px rgba(16, 185, 129, 0.35)"
                        : "0 4px 14px rgba(88, 53, 229, 0.35)",
                      zIndex: 3,
                    }}
                  >
                    {isClient ? <Briefcase size={12} /> : <UserCheck size={12} />}
                    <span>{video.badge}</span>
                  </div>

                  {/* Floating Play Icon Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 2,
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        background: "rgba(255, 255, 255, 0.9)",
                        backdropFilter: "blur(8px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#0E0E0E",
                        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
                        transition: "all 0.25s ease",
                      }}
                    >
                      <Play size={20} fill="#0E0E0E" style={{ marginLeft: "2px" }} />
                    </div>
                  </div>

                  {/* Expand badge at bottom right */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "12px",
                      right: "12px",
                      background: "rgba(0, 0, 0, 0.65)",
                      backdropFilter: "blur(6px)",
                      color: "#FFFFFF",
                      padding: "4px 8px",
                      borderRadius: "6px",
                      fontSize: "10.5px",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      zIndex: 3,
                    }}
                  >
                    <Maximize2 size={11} />
                    <span>Click to Watch</span>
                  </div>
                </div>

                {/* Card Info Bottom Bar */}
                <div
                  style={{
                    padding: "16px 18px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                    background: "#FFFFFF",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "16px",
                        fontWeight: 700,
                        color: "#0E0E0E",
                        margin: 0,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {video.title}
                    </h3>

                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        color: isClient ? "#059669" : "var(--accent-violet)",
                        background: isClient ? "rgba(16, 185, 129, 0.08)" : "var(--accent-violet-subtle)",
                        padding: "2px 8px",
                        borderRadius: "4px",
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                      }}
                    >
                      {isClient ? "Client Work" : "Own Profile"}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: "12.5px",
                      color: "var(--text-muted)",
                      margin: 0,
                      lineHeight: 1.45,
                    }}
                  >
                    {video.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Lightbox / Theater Modal */}
      {activeModalVideo && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(10, 10, 14, 0.88)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            animation: "fadeIn 0.25s ease-out",
          }}
          onClick={() => setActiveModalVideo(null)}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "880px",
              background: "#121218",
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              boxShadow: "0 30px 80px rgba(0, 0, 0, 0.7)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 22px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                background: "rgba(255, 255, 255, 0.03)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    padding: "4px 10px",
                    borderRadius: "var(--radius-full)",
                    background:
                      activeModalVideo.badgeType === "client"
                        ? "rgba(16, 185, 129, 0.2)"
                        : "rgba(88, 53, 229, 0.25)",
                    color:
                      activeModalVideo.badgeType === "client"
                        ? "#34D399"
                        : "#A78BFA",
                    border: `1px solid ${
                      activeModalVideo.badgeType === "client"
                        ? "rgba(16, 185, 129, 0.4)"
                        : "rgba(88, 53, 229, 0.4)"
                    }`,
                  }}
                >
                  {activeModalVideo.badge}
                </span>

                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    margin: 0,
                  }}
                >
                  {activeModalVideo.title}
                </h3>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveModalVideo(null)}
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "none",
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
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Video Player in Modal */}
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16 / 9",
                background: "#000000",
              }}
            >
              <video
                src={activeModalVideo.src}
                controls
                autoPlay
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Modal Footer Description */}
            <div
              style={{
                padding: "16px 22px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "10px",
                background: "rgba(255, 255, 255, 0.02)",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "13.5px",
                  color: "rgba(255, 255, 255, 0.7)",
                }}
              >
                {activeModalVideo.description}
              </p>

              <span
                style={{
                  fontSize: "12px",
                  color: "rgba(255, 255, 255, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <Film size={13} />
                <span>Urooj Fatima • Generative Production</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
