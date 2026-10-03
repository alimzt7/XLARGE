import type { ReactNode } from "react";

type IconName =
  | "hamburger"
  | "next"
  | "previous"
  | "arrow-up-left"
  | "bag"
  | "chevron-down"
  | "close"
  | "instagram"
  | "location"
  | "moon"
  | "sun"
  | "phone"
  | "profile";

type IconProps = {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
};

export function Icon({
  name,
  size = 18,
  strokeWidth = 1.6,
  className = "",
}: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };

  const paths: Record<IconName, ReactNode> = {
    hamburger: (
      <>
        <path d="M5 7h14M5 12h14M5 17h14" />
      </>
    ),
    next: <path d="m9 5 7 7-7 7" />,
    previous: <path d="m15 19-7-7 7-7" />,
    "arrow-up-left": (
      <>
        <path d="M17 7H7v10" />
        <path d="M7 7l10 10" />
      </>
    ),
    bag: (
      <>
        <path d="M6 8h12l1 12H5L6 8Z" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      </>
    ),
    "chevron-down": <path d="m6 9 6 6 6-6" />,
    close: (
      <>
        <path d="M6 6l12 12M18 6 6 18" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".5" fill="currentColor" stroke="none" />
      </>
    ),
    location: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    moon: <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5 8.5 8.5 0 1 0 20.5 14.5Z" />,
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
      </>
    ),
    phone: (
      <>
        <path d="M6.5 3.5 9 3l2 5-2 1.5a14.3 14.3 0 0 0 5.5 5.5l1.5-2 5 2 .5 2.5c.3 1.5-1 2.8-2.5 2.5C10.8 17.7 6.3 13.2 3.5 5c-.3-1.5 1-2.8 3-1.5Z" />
      </>
    ),
    profile: (
      <>
        <circle cx="12" cy="8" r="3.25" />
        <path d="M5.5 20c.7-3.3 3-5 6.5-5s5.8 1.7 6.5 5" />
      </>
    ),
  };

  return <svg {...common}>{paths[name]}</svg>;
}
