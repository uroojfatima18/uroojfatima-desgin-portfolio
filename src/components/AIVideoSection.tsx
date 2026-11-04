"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Maximize2, X, Volume2, VolumeX, Briefcase, UserCheck, Smartphone, Monitor } from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
  category: "Own Profile" | "Client Work";
  badge: string;
  badgeType: "profile" | "client";
  format: "vertical" | "horizontal";
  description: string;
  src: string;
  previewSrc: string;
  poster: string;
}

// Media CDN URL helper for GitHub LFS videos deployed on Vercel
const LFS_BASE = "https://media.githubusercontent.com/media/uroojfatima18/uroojfatima-desgin-portfolio/main/public";

// Horizontal (YouTube / 16:9) Videos Row
const YOUTUBE_VIDEOS: VideoItem[] = [
  {
    id: "v1-profile",
    title: "How AI Agent Works",
    category: "Own Profile",
    badge: "Own Profile",
    badgeType: "profile",
    format: "horizontal",
    description: "Generative AI video styling, digital identity & cinematic motion",
    src: "/assets/videos/final-without-subtitle.mp4",
    previewSrc: "/assets/videos/previews/v1_profile_preview.mp4",
    poster: "/assets/videos/without_sub_poster.jpg",
  },
  {
    id: "v1-youtube",
    title: "Variant 1 YouTube",
    category: "Client Work",
    badge: "Client Work",
    badgeType: "client",
    format: "horizontal",
    description: "Long-form storytelling video • 16:9 YouTube edit",
    src: `${LFS_BASE}/assets/videos/AI-Story%20telling%20videos/variant%201%20yt.mp4`,
    previewSrc: "/assets/videos/previews/v1_yt_preview.mp4",
    poster: "/assets/videos/AI-Story%20telling%20videos/v1_yt_poster.jpg",
  },
  {
    id: "v3-youtube",
    title: "Variant 2 YouTube",
    category: "Client Work",
    badge: "Client Work",
    badgeType: "client",
    format: "horizontal",
    description: "Long-form storytelling video • 16:9 YouTube edit",
    src: `${LFS_BASE}/assets/videos/AI-Story%20telling%20videos/variant%202%20yt.mp4`,
    previewSrc: "/assets/videos/previews/v2_yt_preview.mp4",
    poster: "/assets/videos/AI-Story%20telling%20videos/v2_yt_poster.jpg",
  },
  {
    id: "v4-profile",
    title: "AI Engineering In 2026",
    category: "Own Profile",
    badge: "Own Profile",
    badgeType: "profile",
    format: "horizontal",
    description: "Prompt  -> Context -> Loop -> Graph -> Harness",
    src: "/assets/videos/prompt-engineering.mp4",
    previewSrc: "/assets/videos/previews/v4_profile_preview.mp4",
    poster: "/assets/videos/prompt_eng_poster.jpg",
  },
];

// Vertical (TikTok / 9:16) Reels Row - 3 Videos Only
const TIKTOK_VIDEOS: VideoItem[] = [
  {
    id: "v-ai-slop",
    title: "AI Slop",
    category: "Own Profile",
    badge: "Own Profile",
    badgeType: "profile",
    format: "vertical",
    description: "Short-form creative commentary • 9:16 AI Storytelling Reel",
    src: `${LFS_BASE}/assets/videos/AI-Story%20telling%20videos/AI%20Slop.mp4`,
    previewSrc: "/assets/videos/previews/ai_slop_preview.mp4",
    poster: "/assets/videos/AI-Story%20telling%20videos/ai_slop_poster.jpg",
  },
  {
    id: "v1-tiktok",
    title: "Variant 1 TikTok",
    category: "Client Work",
    badge: "Client Work",
    badgeType: "client",
    format: "vertical",
    description: "Short-form vertical storytelling • 9:16 TikTok Reel edit",
    src: `${LFS_BASE}/assets/videos/AI-Story%20telling%20videos/variant%201%20tiktok.mp4`,
    previewSrc: "/assets/videos/previews/v1_tiktok_preview.mp4",
    poster: "/assets/videos/AI-Story%20telling%20videos/v1_tiktok_poster.jpg",
  },
  {
    id: "v2-tiktok",
    title: "Variant 2 TikTok",
    category: "Client Work",
    badge: "Client Work",
    badgeType: "client",
    format: "vertical",
    description: "Short-form vertical storytelling • 9:16 TikTok Reel edit",
    src: `${LFS_BASE}/assets/videos/AI-Story%20telling%20videos/variant%202%20tiktok.mp4`,
    previewSrc: "/assets/videos/previews/v2_tiktok_preview.mp4",
    poster: "/assets/videos/AI-Story%20telling%20videos/v2_tiktok_poster.jpg",
  },
];

export default function AIVideoSection() {
  const [activeModalVideo, setActiveModalVideo] = useState<VideoItem | null>(null);
  const [isHoverPausedYT, setIsHoverPausedYT] = useState(false);
  const [isHoverPausedTT, setIsHoverPausedTT] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  // Repeat items for seamless horizontal scroll
  const loopedYTVideos = [...YOUTUBE_VIDEOS, ...YOUTUBE_VIDEOS, ...YOUTUBE_VIDEOS];
  const loopedTTVideos = [...TIKTOK_VIDEOS, ...TIKTOK_VIDEOS, ...TIKTOK_VIDEOS, ...TIKTOK_VIDEOS];

  // When modal opens, auto-play with sound handling
  useEffect(() => {
    if (activeModalVideo && modalVideoRef.current) {
      const v = modalVideoRef.current;
      v.muted = isMuted;
      const playPromise = v.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          v.muted = true;
          setIsMuted(true);
          v.play().catch(() => {});
        });
      }
    }
  }, [activeModalVideo]);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (modalVideoRef.current) {
      const nextMuted = !modalVideoRef.current.muted;
      modalVideoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const handleCardClick = (video: VideoItem) => {
    setIsMuted(false);
    setActiveModalVideo(video);
  };

  const renderCard = (video: VideoItem, originalIndex: number, uniqueKey: string) => {
    const isClient = video.badgeType === "client";
    const isVertical = video.format === "vertical";
    const displayNumber = String(originalIndex + 1).padStart(2, "0");

    return (
      <div
        key={uniqueKey}
        className={`video-marquee-card ${isVertical ? "is-vertical" : "is-horizontal"}`}
        style={{
          width: isVertical ? "260px" : "410px",
          cursor: "pointer",
        }}
        onClick={() => handleCardClick(video)}
      >
        {/* Video Preview Box */}
        <div
          className="video-card-screen-wrap group"
          style={{
            aspectRatio: isVertical ? "9 / 16" : "16 / 9",
            maxHeight: isVertical ? "420px" : "235px",
            position: "relative",
          }}
        >
          <video
            src={video.previewSrc}
            poster={video.poster}
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              pointerEvents: "none",
            }}
          />

          {/* Dark gradient vignette overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(14, 14, 18, 0.8) 0%, rgba(14, 14, 18, 0.05) 50%, rgba(14, 14, 18, 0.4) 100%)",
              pointerEvents: "none",
            }}
          />

          {/* Badges Bar (Number Pill + Category Pill + Format Tag) */}
          <div
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              right: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "6px",
              zIndex: 3,
              pointerEvents: "none",
            }}
          >
            {/* Left side: Video Number Badge + Category Pill */}
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              {/* Premium Number Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "24px",
                  height: "24px",
                  borderRadius: "6px",
                  fontSize: "11px",
                  fontWeight: 800,
                  fontFamily: "var(--font-mono, monospace)",
                  letterSpacing: "0.02em",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  background: "rgba(10, 10, 14, 0.82)",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255, 255, 255, 0.22)",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.4)",
                }}
              >
                {displayNumber}
              </div>

              {/* Category Pill Tag */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  padding: "5px 11px",
                  borderRadius: "var(--radius-full)",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.03em",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  background: isClient
                    ? "linear-gradient(135deg, rgba(16, 185, 129, 0.92), rgba(5, 150, 105, 0.92))"
                    : "linear-gradient(135deg, rgba(88, 53, 229, 0.92), rgba(124, 58, 237, 0.92))",
                  color: "#FFFFFF",
                  boxShadow: isClient
                    ? "0 4px 14px rgba(16, 185, 129, 0.35)"
                    : "0 4px 14px rgba(88, 53, 229, 0.35)",
                }}
              >
                {isClient ? <Briefcase size={12} /> : <UserCheck size={12} />}
                <span>{video.badge}</span>
              </div>
            </div>

            {/* Format Tag */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                padding: "4px 9px",
                borderRadius: "6px",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                background: isVertical ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.6)",
                color: isVertical ? "#38BDF8" : "#FBBF24",
                border: isVertical
                  ? "1px solid rgba(56, 189, 248, 0.35)"
                  : "1px solid rgba(251, 191, 36, 0.35)",
              }}
            >
              {isVertical ? <Smartphone size={11} /> : <Monitor size={11} />}
              <span>{isVertical ? "9:16 Reel" : "16:9 YT"}</span>
            </div>
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
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                width: "46px",
                height: "46px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.92)",
                backdropFilter: "blur(8px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#0E0E0E",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
                transition: "all 0.25s ease",
              }}
            >
              <Play size={19} fill="#0E0E0E" style={{ marginLeft: "2px" }} />
            </div>
          </div>

          {/* Expand badge at bottom right */}
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
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
              pointerEvents: "none",
            }}
          >
            <Maximize2 size={11} />
            <span>Watch</span>
          </div>
        </div>

        {/* Card Info Bottom Bar */}
        <div
          style={{
            padding: "13px 15px",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            background: "#FFFFFF",
            flexGrow: 1,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "15px",
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
                fontSize: "10px",
                fontWeight: 700,
                color: isClient ? "#059669" : "var(--accent-violet)",
                background: isClient ? "rgba(16, 185, 129, 0.1)" : "var(--accent-violet-subtle)",
                padding: "2px 7px",
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
              fontSize: "12px",
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
  };

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
              YouTube &amp; TikTok Showcase
            </span>
          </div>
          <h2 className="section-title">AI VIDEO GENERATION</h2>
        </div>
      </div>

      {/* Row 1: YouTube Videos Marquee (Horizontal 16:9) */}
      <div style={{ marginBottom: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", padding: "0 4px" }}>
          <Monitor size={15} style={{ color: "#F59E0B" }} />
          <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-main)", letterSpacing: "0.02em" }}>
            Cinematic &amp; YouTube Edits (16:9)
          </span>
        </div>
        <div
          className="videos-marquee-container"
          onMouseEnter={() => setIsHoverPausedYT(true)}
          onMouseLeave={() => setIsHoverPausedYT(false)}
        >
          <div
            className="videos-marquee-track"
            style={{
              animationPlayState: isHoverPausedYT ? "paused" : "running",
              display: "flex",
              alignItems: "stretch",
            }}
          >
            {loopedYTVideos.map((video, idx) =>
              renderCard(video, idx % YOUTUBE_VIDEOS.length, `yt-${video.id}-${idx}`)
            )}
          </div>
        </div>
      </div>

      {/* Row 2: TikTok Videos Marquee (Vertical 9:16 Reels) */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", padding: "0 4px" }}>
          <Smartphone size={15} style={{ color: "#38BDF8" }} />
          <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-main)", letterSpacing: "0.02em" }}>
            TikTok &amp; Short-Form Reels (9:16)
          </span>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              color: "#38BDF8",
              background: "rgba(56, 189, 248, 0.12)",
              padding: "2px 8px",
              borderRadius: "12px",
              marginLeft: "4px",
            }}
          >
            3 Reels
          </span>
        </div>
        <div
          className="videos-marquee-container"
          onMouseEnter={() => setIsHoverPausedTT(true)}
          onMouseLeave={() => setIsHoverPausedTT(false)}
        >
          <div
            className="videos-marquee-track"
            style={{
              animationPlayState: isHoverPausedTT ? "paused" : "running",
              display: "flex",
              alignItems: "stretch",
              animationDuration: "32s",
            }}
          >
            {loopedTTVideos.map((video, idx) =>
              renderCard(video, idx % TIKTOK_VIDEOS.length, `tt-${video.id}-${idx}`)
            )}
          </div>
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
            zIndex: 99999,
            background: "rgba(10, 10, 14, 0.92)",
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
              maxWidth: activeModalVideo.format === "vertical" ? "420px" : "880px",
              background: "#121218",
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.14)",
              boxShadow: "0 30px 80px rgba(0, 0, 0, 0.8)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 18px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                background: "rgba(255, 255, 255, 0.03)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: 0 }}>
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
                    flexShrink: 0,
                  }}
                >
                  {activeModalVideo.badge}
                </span>

                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    margin: 0,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {activeModalVideo.title}
                </h3>
              </div>

              {/* Header Right Actions */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
                {/* Volume Toggle */}
                <button
                  type="button"
                  onClick={toggleSound}
                  style={{
                    background: isMuted ? "rgba(239, 68, 68, 0.2)" : "rgba(255, 255, 255, 0.1)",
                    border: isMuted ? "1px solid rgba(239, 68, 68, 0.4)" : "1px solid rgba(255, 255, 255, 0.15)",
                    borderRadius: "50%",
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: isMuted ? "#F87171" : "#FFFFFF",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  title={isMuted ? "Unmute" : "Mute"}
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
                </button>

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
            </div>

            {/* Video Player in Modal */}
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: activeModalVideo.format === "vertical" ? "9 / 16" : "16 / 9",
                maxHeight: activeModalVideo.format === "vertical" ? "75vh" : "62vh",
                background: "#000000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <video
                ref={modalVideoRef}
                key={activeModalVideo.src}
                src={activeModalVideo.src}
                poster={activeModalVideo.poster}
                controls
                playsInline
                autoPlay
                preload="auto"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              >
                <source src={activeModalVideo.src} type="video/mp4" />
                <source src={activeModalVideo.previewSrc} type="video/mp4" />
              </video>
            </div>

            {/* Modal Footer Description */}
            <div
              style={{
                padding: "14px 18px",
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
                  fontSize: "13px",
                  color: "rgba(255, 255, 255, 0.7)",
                }}
              >
                {activeModalVideo.description}
              </p>

              <span
                style={{
                  fontSize: "11.5px",
                  color: "rgba(255, 255, 255, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span>Urooj Fatima • Generative Production</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
