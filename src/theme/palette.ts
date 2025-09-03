export const earthPastel = {
  bg: "#fffaf0",
  border: "#b7a49336",
  text: "#7d6e57",
  text2: "#5b5449ff",
  accent: "#8cc887ff",
  highlight: "#e7cba9",
  pink: "rgb(255, 175, 204, 1)",
  hover: "rgb(255, 175, 204, 1)",
};

export type Palette = typeof earthPastel;

export const typography = {
  fontFamily: {
    heading: '"Inter", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
    body: '"Inter", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  size: {
    h1: '2.25rem',
    h2: '1.875rem',
    h3: '1.5rem',
    body: '1rem',
    small: '0.875rem',
    xsmall: '0.75rem',
  },
  weight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  leading: {
    tight: 1.15,
    snug: 1.3,
    normal: 1.5,
    relaxed: 1.7,
  },
};

export type Typography = typeof typography;

export const earthPastelDark = {
  bg: "#161513",
  border: "#8b7f6a33",
  text: "#d7cbb7",
  text2: "#e8decf",
  accent: "#7ab882",
  highlight: "#c7ad86",
  pink: "rgb(255, 175, 204, 1)",
  hover: "rgb(255, 175, 204, 1)",
};

export const getPalette = () =>
  typeof document !== "undefined" && document.documentElement.classList.contains("dark")
    ? earthPastelDark
    : earthPastel;


