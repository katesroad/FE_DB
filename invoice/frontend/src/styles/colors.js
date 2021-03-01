// colors from styling guide
const p00 = "#7c5dfa";
const p01 = "#92277ff";
const p02 = "#1E2139";
const p03 = "#252945";

const p10 = "#DFE3FA";
const p11 = "#888EB0";
const p12 = "#7E88C3";
const p13 = "#0C0E16";

const p20 = "#EC5757";
const p21 = "#FF9797";
const p22 = "#888EB0"; //modal content color
const p23 = "#141625";

export const colors = {
  white: "#fff",
  primary: p00,
  p00,
  p01,
  p02,
  p10,
  p11,
  p12,
  p12,
  p20,
  p21,
  p22,
  p23,
};
// theme palette
export const dark = {
  element: { bg: p02, color: p10 },
  body: { bg: p23 },
  title: { color: colors.white },
  input: { bg: p02, color: colors.white, border: colors.white },
  button: { bg: p03, color: p10 },
};

export const light = {
  element: { bg: colors.white, color: p11 },
  body: { bg: "#f2f2f2" },
  title: { color: p13 },
  input: { bg: p02, color: colors.white, border: colors.white },
  button: { bg: "#f9fafe", color: p12 },
};

export const red = { normal: p20, thin: p21 };

export const invoicesStatusColors = {
  paid: {
    color: `rgba(51, 214, 159, 1)`,
    bg: `rgba(51, 214, 159, 0.06)`,
  },
  pending: {
    color: "rgba(255, 143, 0, 1)",
    bg: "rgba(255, 143, 0, 0.06)",
  },
  draft: {
    dark: {
      color: "rgba(223,227,250, 1)",
      bg: "rgba(223,227,250, .06)",
    },
    light: {
      color: "rgba(55, 59, 83, 1)",
      bg: "rgba(55, 59, 83, 0.06)",
    },
  },
  primary: "#7c5dfa",
};
