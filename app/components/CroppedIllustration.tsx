import type { CSSProperties, ReactNode } from "react";

interface LogoBoxProps {
  src: string;
  /** Native width / height ratio of the logo asset. */
  aspectRatio: number;
  corner?: "bottom-right" | "bottom-left";
  /** Logo box width as a fraction (0-1) of the illustration's own width. */
  widthFraction?: number;
  /** width / height ratio of the white box itself. Defaults to the logo asset ratio. */
  boxAspectRatio?: number;
  /** Logo art width as a fraction (0-1) of the white box width. Defaults to 0.88. */
  artWidthFraction?: number;
  /** Top corner radius of the white box. Defaults to "16px". */
  cornerRadius?: string;
}

/**
 * Reproduces a Figma "mask group" crop: the image is rendered at its Figma
 * display size relative to the crop viewport and offset, instead of being
 * shrunk to fit. All values are fractions of the container, so the crop
 * scales fluidly at any viewport width.
 */
interface CropProps {
  /** Image display width / crop viewport width (e.g. 1419 / 737). */
  widthFraction: number;
  /** Image display height / crop viewport height (e.g. 792 / 638). Keeps the
   *  crop filled when the box is stretched taller than its aspect ratio. */
  heightFraction: number;
  /** Image X offset / crop viewport width (e.g. -582 / 737). */
  offsetXFraction: number;
  /** Image Y offset / crop viewport height (e.g. -141 / 638). */
  offsetYFraction: number;
}

interface CroppedIllustrationProps {
  src: string;
  alt?: string;
  /** width / height ratio for the illustration box (e.g. native image ratio, or the original Figma crop viewport ratio). */
  aspectRatio: number;
  /** CSS object-position for the underlying <img>. Defaults to "center". */
  objectPosition?: string;
  /** Figma mask-group crop. Takes precedence over objectPosition when set. */
  crop?: CropProps;
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
  crop,
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
        style={
          crop
            ? {
                position: "absolute",
                left: `${crop.offsetXFraction * 100}%`,
                top: `${crop.offsetYFraction * 100}%`,
                width: `${crop.widthFraction * 100}%`,
                height: `${crop.heightFraction * 100}%`,
                maxWidth: "none",
                objectFit: "cover",
                display: "block",
              }
            : {
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition,
                display: "block",
              }
        }
      />
      {logo && (
        <div
          style={{
            position: "absolute",
            [logo.corner === "bottom-left" ? "left" : "right"]: 0,
            bottom: 0,
            width: `${logoWidthFraction * 100}%`,
            aspectRatio: `${logo.boxAspectRatio ?? logo.aspectRatio}`,
            backgroundColor: "#ffffff",
            borderTopLeftRadius:
              logo.corner === "bottom-left" ? 0 : logo.cornerRadius ?? "16px",
            borderTopRightRadius:
              logo.corner === "bottom-left" ? logo.cornerRadius ?? "16px" : 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: logo.boxAspectRatio ? 0 : "6%",
            boxSizing: "border-box",
          }}
        >
          <img
            src={logo.src}
            alt=""
            style={{
              width: `${(logo.artWidthFraction ?? 1) * 100}%`,
              height: "auto",
              display: "block",
            }}
          />
        </div>
      )}
      {children}
    </div>
  );
}
