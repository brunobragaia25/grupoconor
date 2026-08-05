import type { CSSProperties, ReactNode } from "react";

interface LogoBoxProps {
  src: string;
  /** Native width / height ratio of the logo asset. */
  aspectRatio: number;
  corner?: "bottom-right" | "bottom-left";
  /** Logo box width as a fraction (0-1) of the illustration's own width. */
  widthFraction?: number;
}

interface CroppedIllustrationProps {
  src: string;
  alt?: string;
  /** width / height ratio for the illustration box (e.g. native image ratio, or the original Figma crop viewport ratio). */
  aspectRatio: number;
  /** CSS object-position for the underlying <img>. Defaults to "center". */
  objectPosition?: string;
  borderRadius?: string;
  logo?: LogoBoxProps;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

/**
 * Fluid, non-distorting replacement for the old fixed-pixel "crop mask"
 * pattern (absolutely-positioned background layers sized/offset in raw px,
 * which only looked right at one specific viewport width). Uses
 * object-fit: cover on a real <img> inside an aspect-ratio box, so the
 * illustration always fills its container edge-to-edge, never stretches,
 * and scales correctly at any breakpoint without per-page pixel math.
 */
export function CroppedIllustration({
  src,
  alt = "",
  aspectRatio,
  objectPosition = "center",
  borderRadius,
  logo,
  className,
  style,
  children,
}: CroppedIllustrationProps) {
  const logoWidthFraction = logo?.widthFraction ?? 0.36;

  return (
    <div
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        aspectRatio: `${aspectRatio}`,
        borderRadius,
        ...style,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition,
          display: "block",
        }}
      />
      {logo && (
        <div
          style={{
            position: "absolute",
            [logo.corner === "bottom-left" ? "left" : "right"]: 0,
            bottom: 0,
            width: `${logoWidthFraction * 100}%`,
            aspectRatio: `${logo.aspectRatio}`,
            backgroundColor: "#ffffff",
            borderTopLeftRadius: logo.corner === "bottom-left" ? 0 : "16px",
            borderTopRightRadius: logo.corner === "bottom-left" ? "16px" : 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "6%",
            boxSizing: "border-box",
          }}
        >
          <img src={logo.src} alt="" style={{ width: "100%", height: "auto", display: "block" }} />
        </div>
      )}
      {children}
    </div>
  );
}
