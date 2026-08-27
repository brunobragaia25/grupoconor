"use client";

import { useRef, useState } from "react";

interface VideoWithPlayButtonProps {
  src: string;
  poster?: string;
  className?: string;
  style?: React.CSSProperties;
  label?: string;
}

export function VideoWithPlayButton({
  src,
  poster,
  className,
  style,
  label = "Assistir vídeo",
}: VideoWithPlayButtonProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [hovering, setHovering] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <div
      className={className}
      style={{ position: "relative", overflow: "hidden", ...style }}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        controls={playing}
        playsInline
        onClick={!playing ? handlePlay : undefined}
        onPause={() => setPlaying(false)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          cursor: playing ? "default" : "pointer",
        }}
      />

      {!playing && (
        <button
          type="button"
          onClick={handlePlay}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          aria-label={label}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            background: hovering
              ? "linear-gradient(180deg, rgba(10,20,40,0.45) 0%, rgba(6,12,28,0.75) 100%)"
              : "linear-gradient(180deg, rgba(10,20,40,0.35) 0%, rgba(6,12,28,0.65) 100%)",
            border: "none",
            padding: 0,
            cursor: "pointer",
            transition: "background 0.3s ease",
          }}
        >
          <span
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              backgroundColor: "#52a4ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: hovering
                ? "0 0 0 18px rgba(82, 164, 255, 0.28)"
                : "0 0 0 12px rgba(82, 164, 255, 0.18)",
              transform: hovering ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
            }}
          >
            <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 13.268a2 2 0 010 3.464L3.5 28.99A2 2 0 010.5 27.26V2.74A2 2 0 013.5 1.01l21.5 12.258z" fill="#ffffff" />
            </svg>
          </span>
          <span
            style={{
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#ffffff",
              fontFamily: "var(--font-roboto)",
              opacity: hovering ? 1 : 0.85,
              transform: hovering ? "translateY(-2px)" : "translateY(0)",
              transition: "opacity 0.25s ease, transform 0.25s ease",
            }}
          >
            {label}
          </span>
        </button>
      )}
    </div>
  );
}
