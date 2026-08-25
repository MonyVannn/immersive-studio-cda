export const brandTypography = {
  primary: {
    family: "var(--font-hanken-grotesk)",
    weight: 400,
  },
  secondary: {
    family: "var(--font-hanken-grotesk)",
    weight: 200,
  },
} as const;

export const typeScale = {
  display: {
    size: "clamp(2.75rem, 6vw, 4.5rem)",
    lineHeight: "1.05",
    letterSpacing: "-0.02em",
    weight: 200,
  },
  h1: {
    size: "clamp(2rem, 4vw, 3rem)",
    lineHeight: "1.1",
    letterSpacing: "-0.02em",
    weight: 400,
  },
  h2: {
    size: "clamp(1.5rem, 3vw, 2.25rem)",
    lineHeight: "1.15",
    letterSpacing: "-0.01em",
    weight: 400,
  },
  h3: {
    size: "1.25rem",
    lineHeight: "1.25",
    letterSpacing: "-0.01em",
    weight: 400,
  },
  body: {
    size: "1rem",
    lineHeight: "1.6",
    letterSpacing: "0",
    weight: 400,
  },
  bodyLight: {
    size: "1rem",
    lineHeight: "1.6",
    letterSpacing: "0.01em",
    weight: 200,
  },
  label: {
    size: "1.125rem",
    lineHeight: "1.4",
    letterSpacing: "0.12em",
    weight: 200,
  },
} as const;
